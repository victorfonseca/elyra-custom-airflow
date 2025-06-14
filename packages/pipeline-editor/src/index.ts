/*
 * Copyright 2018-2025 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { PIPELINE_CURRENT_VERSION } from '@elyra/pipeline-editor';
import { RequestHandler } from '@elyra/services';
import {
  containerIcon,
  pipelineIcon,
  RequestErrors,
  runtimesIcon,
  componentCatalogIcon
} from '@elyra/ui-components';

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILayoutRestorer
} from '@jupyterlab/application';
import { ICommandPalette, WidgetTracker } from '@jupyterlab/apputils';
import { DocumentWidget } from '@jupyterlab/docregistry';
import { IDefaultFileBrowser } from '@jupyterlab/filebrowser';
import { ILauncher } from '@jupyterlab/launcher';
import { IMainMenu } from '@jupyterlab/mainmenu';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
import {
  addIcon,
  IRankedMenu,
  LabIcon,
  refreshIcon
} from '@jupyterlab/ui-components';

import { ReadonlyJSONValue } from '@lumino/coreutils';

import {
  COMPONENT_CATALOGS_SCHEMASPACE,
  ComponentCatalogsWidget
} from './ComponentCatalogsWidget';
import { PipelineEditorFactory, commandIDs } from './PipelineEditorWidget';
import {
  IRuntimeType,
  PipelineService,
  RUNTIMES_SCHEMASPACE
} from './PipelineService';
import {
  RUNTIME_IMAGES_SCHEMASPACE,
  RuntimeImagesWidget
} from './RuntimeImagesWidget';
import { RuntimesWidget } from './RuntimesWidget';
import { SubmitFileButtonExtension } from './SubmitFileButtonExtension';

import '../style/index.css';

const PIPELINE_EDITOR = 'Pipeline Editor';
const PIPELINE = 'pipeline';
const PIPELINE_EDITOR_NAMESPACE = 'elyra-pipeline-editor-extension';
const PLUGIN_ID = '@elyra/pipeline-editor-extension:plugin';

const createRemoteIcon = async ({
  name,
  url
}: {
  name: string;
  url: string;
}): Promise<LabIcon> => {
  const svgstr = await RequestHandler.makeServerRequest<string>(url, {
    method: 'GET',
    type: 'text'
  });
  if (!svgstr) {
    throw new Error(`Failed to fetch icon from ${url}`);
  }
  return new LabIcon({ name, svgstr });
};

export type ResolvedRuntimeType = IRuntimeType & { icon: LabIcon };

interface ICommandArgs {
  isMenu?: string;
  isPalette?: string;
  isContextMenu?: string;
  runtimeType?: ResolvedRuntimeType;
}

export const getEmptyPipelineJson = (runtime_type: string | undefined) => {
  return {
    doc_type: 'pipeline',
    version: '3.0',
    json_schema:
      'http://api.dataplatform.ibm.com/schemas/common-pipeline/pipeline-flow/pipeline-flow-v3-schema.json',
    id: 'elyra-auto-generated-pipeline',
    primary_pipeline: 'primary',
    pipelines: [
      {
        id: 'primary',
        nodes: [],
        app_data: {
          ui_data: {
            comments: []
          },
          version: PIPELINE_CURRENT_VERSION,
          runtime_type
        },
        runtime_ref: ''
      }
    ],
    schemas: []
  };
};

/**
 * Initialization data for the pipeline-editor-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: PIPELINE,
  autoStart: true,
  requires: [
    ICommandPalette,
    ILauncher,
    IDefaultFileBrowser,
    ILayoutRestorer,
    IMainMenu,
    ISettingRegistry
  ],
  activate: async (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    launcher: ILauncher,
    browserFactory: IDefaultFileBrowser,
    restorer: ILayoutRestorer,
    menu: IMainMenu,
    registry: ISettingRegistry
  ) => {
    console.log('Elyra - pipeline-editor extension is activated!');

    // Fetch the initial state of the settings.
    const settings = await registry.load(PLUGIN_ID).catch((error) => {
      console.log(error);
      return undefined;
    });

    PipelineService.getRuntimeTypes()
      .then(async (types) => {
        const filteredTypes = types.filter((t) => t.runtime_enabled);
        const promises = filteredTypes.map(async (t) => {
          return {
            ...t,
            icon: await createRemoteIcon({
              name: `elyra:platform:${t.id}`,
              url: t.icon
            })
          };
        });

        const resolvedTypes = (await Promise.all(
          promises
        )) as ResolvedRuntimeType[];

        // Set up new widget Factory for .pipeline files
        const pipelineEditorFactory = new PipelineEditorFactory({
          name: PIPELINE_EDITOR,
          fileTypes: [PIPELINE],
          defaultFor: [PIPELINE],
          shell: app.shell,
          commands: app.commands,
          browserFactory: browserFactory,
          serviceManager: app.serviceManager,
          settings: settings,
          defaultRuntimeType: resolvedTypes[0]?.id
        });

        // Add the default behavior of opening the widget for .pipeline files
        app.docRegistry.addFileType(
          {
            name: PIPELINE,
            displayName: 'Pipeline',
            extensions: ['.pipeline'],
            icon: pipelineIcon
          },
          ['JSON']
        );
        app.docRegistry.addWidgetFactory(pipelineEditorFactory);

        const tracker = new WidgetTracker<DocumentWidget>({
          namespace: PIPELINE_EDITOR_NAMESPACE
        });

        pipelineEditorFactory.widgetCreated.connect((_sender, widget) => {
          void tracker.add(widget);

          // Notify the widget tracker if restore data needs to update
          widget.context.pathChanged.connect(() => {
            void tracker.save(widget);
          });
        });

        // Handle state restoration
        void restorer.restore(tracker, {
          command: commandIDs.openDocManager,
          args: (widget) => ({
            path: widget.context.path,
            factory: PIPELINE_EDITOR
          }),
          name: (widget) => widget.context.path
        });

        // Add command to add file to pipeline
        const addFileToPipelineCommand: string = commandIDs.addFileToPipeline;
        app.commands.addCommand(addFileToPipelineCommand, {
          label: 'Add File to Pipeline',
          icon: addIcon,
          execute: (args) => {
            pipelineEditorFactory.addFileToPipelineSignal?.emit(args);
          }
        });
        const refreshPaletteCommand: string = commandIDs.refreshPalette;
        app.commands.addCommand(refreshPaletteCommand, {
          label: 'Refresh Pipeline Palette',
          icon: refreshIcon,
          execute: (args) => {
            pipelineEditorFactory.refreshPaletteSignal?.emit(args);
          }
        });
        app.contextMenu.addItem({
          selector: '[data-file-type="notebook"]',
          command: addFileToPipelineCommand
        });
        app.contextMenu.addItem({
          selector: '[data-file-type="python"]',
          command: addFileToPipelineCommand
        });
        app.contextMenu.addItem({
          selector: '[data-file-type="r"]',
          command: addFileToPipelineCommand
        });

        // Add an application command
        const openPipelineEditorCommand: string = commandIDs.openPipelineEditor;
        app.commands.addCommand(openPipelineEditorCommand, {
          label: (args) => {
            const commandArgs = args as ICommandArgs;
            if (commandArgs.isPalette) {
              return `New ${PIPELINE_EDITOR}`;
            }
            if (commandArgs.runtimeType?.id === 'LOCAL') {
              const contextMenuPrefix = commandArgs.isContextMenu ? 'New ' : '';
              return `${contextMenuPrefix}Generic ${PIPELINE_EDITOR}`;
            }
            // For the caption (tooltip)
            if (commandArgs.runtimeType?.id === 'APACHE_AIRFLOW') {
              return `Key Ward HUB ${PIPELINE_EDITOR}`;
            }

            // For the iconLabel (hover text)
            if (commandArgs.runtimeType?.id === 'APACHE_AIRFLOW') {
              return `Key Ward HUB ${PIPELINE_EDITOR}`;
            }
            if (commandArgs.isMenu) {
              return `${commandArgs.runtimeType?.display_name} ${PIPELINE_EDITOR}`;
            }
            if (commandArgs.isContextMenu) {
              return `New ${commandArgs.runtimeType?.display_name} ${PIPELINE_EDITOR}`;
            }
            return PIPELINE_EDITOR;
          },
          caption: (args) => {
            const commandArgs = args as ICommandArgs;
            if (commandArgs.runtimeType?.id === 'LOCAL') {
              return `Generic ${PIPELINE_EDITOR}`;
            }
            return `${commandArgs.runtimeType?.display_name} ${PIPELINE_EDITOR}`;
          },
          iconLabel: (args) => {
            const commandArgs = args as ICommandArgs;
            if (commandArgs.isPalette) {
              return '';
            }
            if (commandArgs.runtimeType?.id === 'LOCAL') {
              return `Generic ${PIPELINE_EDITOR}`;
            }
            return `${commandArgs.runtimeType?.display_name} ${PIPELINE_EDITOR}`;
          },
          icon: (args) => {
            const commandArgs = args as ICommandArgs;
            if (commandArgs.isPalette) {
              return undefined;
            }
            return commandArgs.runtimeType?.icon;
          },
          execute: (args) => {
            const commandArgs = args as ICommandArgs;
            // Creates blank file, then opens it in a new window
            app.commands
              .execute(commandIDs.newDocManager, {
                type: 'file',
                path: browserFactory.model.path,
                ext: '.pipeline'
              })
              .then(async (model) => {
                const platformId = commandArgs.runtimeType?.id;
                const runtime_type =
                  platformId === 'LOCAL' ? undefined : platformId;

                const pipelineJson = getEmptyPipelineJson(runtime_type);
                const newWidget = await app.commands.execute(
                  commandIDs.openDocManager,
                  {
                    path: model.path,
                    factory: PIPELINE_EDITOR
                  }
                );
                newWidget.context.ready.then(() => {
                  newWidget.context.model.fromJSON(pipelineJson);
                  app.commands.execute(commandIDs.saveDocManager, {
                    path: model.path
                  });
                });
              });
          }
        });
        // Add the command to the palette.
        palette.addItem({
          command: openPipelineEditorCommand,
          args: { isPalette: true },
          category: 'Elyra'
        });

        // Add the command to the launcher
        if (launcher) {
          const fileMenuItems: IRankedMenu.IItemOptions[] = [];

          let contextMenuRank = 100;

          app.contextMenu.addItem({
            command: openPipelineEditorCommand,
            type: 'separator',
            selector: '.jp-DirListing-content',
            rank: ++contextMenuRank
          });

          for (const t of resolvedTypes) {
            if (t.id !== 'LOCAL') {
              launcher.add({
                command: openPipelineEditorCommand,
                category: 'Elyra',
                args: { runtimeType: t as unknown as ReadonlyJSONValue },
                rank: 2
              });
            }

            fileMenuItems.push({
              command: openPipelineEditorCommand,
              args: {
                runtimeType: t as unknown as ReadonlyJSONValue,
                isMenu: true
              },
              rank: t.id === 'LOCAL' ? 90 : 91
            });

            app.contextMenu.addItem({
              command: openPipelineEditorCommand,
              args: {
                runtimeType: t as unknown as ReadonlyJSONValue,
                isContextMenu: true
              },
              selector: '.jp-DirListing-content',
              rank: ++contextMenuRank
            });
          }

          app.contextMenu.addItem({
            command: openPipelineEditorCommand,
            type: 'separator',
            selector: '.jp-DirListing-content',
            rank: ++contextMenuRank
          });

          menu.fileMenu.newMenu.addGroup(fileMenuItems);
        }
      })
      .catch(async (error) => {
        await RequestErrors.serverError(error);
      });

    // SubmitNotebookButtonExtension initialization code
    const notebookButtonExtension = new SubmitFileButtonExtension();
    app.docRegistry.addWidgetExtension('Notebook', notebookButtonExtension);
    app.contextMenu.addItem({
      selector: '.jp-Notebook',
      command: commandIDs.submitNotebook,
      rank: -0.5
    });

    // SubmitScriptButtonExtension initialization code
    const scriptButtonExtension = new SubmitFileButtonExtension();
    app.docRegistry.addWidgetExtension('Python Editor', scriptButtonExtension);
    app.contextMenu.addItem({
      selector: '.elyra-ScriptEditor',
      command: commandIDs.submitScript,
      rank: -0.5
    });

    app.docRegistry.addWidgetExtension('R Editor', scriptButtonExtension);
    app.contextMenu.addItem({
      selector: '.elyra-ScriptEditor',
      command: commandIDs.submitScript,
      rank: -0.5
    });

    const runtimesWidget = new RuntimesWidget({
      app,
      display_name: 'Runtimes',
      schemaspace: RUNTIMES_SCHEMASPACE,
      icon: runtimesIcon,
      titleContext: 'runtime configuration',
      addLabel: 'runtime configuration',
      appendToTitle: true
    });
    const runtimesWidgetID = `elyra-metadata:${RUNTIMES_SCHEMASPACE}`;
    runtimesWidget.id = runtimesWidgetID;
    runtimesWidget.title.icon = runtimesIcon;
    runtimesWidget.title.caption = 'Runtimes';

    restorer.add(runtimesWidget, runtimesWidgetID);
    app.shell.add(runtimesWidget, 'left', { rank: 950 });

    const runtimeImagesWidget = new RuntimeImagesWidget({
      app,
      display_name: 'Runtime Images',
      schemaspace: RUNTIME_IMAGES_SCHEMASPACE,
      icon: containerIcon,
      titleContext: '',
      addLabel: 'runtime image'
    });
    const runtimeImagesWidgetID = `elyra-metadata:${RUNTIME_IMAGES_SCHEMASPACE}`;
    runtimeImagesWidget.id = runtimeImagesWidgetID;
    runtimeImagesWidget.title.icon = containerIcon;
    runtimeImagesWidget.title.caption = 'Runtime Images';

    restorer.add(runtimeImagesWidget, runtimeImagesWidgetID);
    app.shell.add(runtimeImagesWidget, 'left', { rank: 951 });

    const componentCatalogWidget = new ComponentCatalogsWidget({
      app,
      display_name: 'Component Catalogs', // TODO: This info should come from the server for all schemaspaces
      schemaspace: COMPONENT_CATALOGS_SCHEMASPACE,
      icon: componentCatalogIcon,
      titleContext: '',
      addLabel: 'component catalog',
      refreshCallback: (): void => {
        app.commands.execute(commandIDs.refreshPalette);
      }
    });
    const componentCatalogWidgetID = `elyra-metadata:${COMPONENT_CATALOGS_SCHEMASPACE}`;
    componentCatalogWidget.id = componentCatalogWidgetID;
    componentCatalogWidget.title.icon = componentCatalogIcon;
    componentCatalogWidget.title.caption = 'Component Catalogs';

    restorer.add(componentCatalogWidget, componentCatalogWidgetID);
    app.shell.add(componentCatalogWidget, 'left', { rank: 961 });
  }
};
export default extension;
