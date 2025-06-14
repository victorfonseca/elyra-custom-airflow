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

import { elyraIcon } from '@elyra/ui-components';

import {
  Launcher as JupyterlabLauncher,
  LauncherModel as JupyterLauncherModel,
  ILauncher
} from '@jupyterlab/launcher';
import { TranslationBundle } from '@jupyterlab/translation';
import { LabIcon } from '@jupyterlab/ui-components';

import { each } from '@lumino/algorithm';

import * as React from 'react';

/**
 * The known categories of launcher items and their default ordering.
 */
const ELYRA_CATEGORY = 'Elyra';

const CommandIDs = {
  newFile: 'fileeditor:create-new',
  createNewPythonEditor: 'script-editor:create-new-python-editor',
  createNewREditor: 'script-editor:create-new-r-editor'
};

export class LauncherModel extends JupyterLauncherModel {
  /**
   * Return an iterator of launcher items, but remove unnecessary items.
   */
  *items(): IterableIterator<ILauncher.IItemOptions> {
    const items: ILauncher.IItemOptions[] = [];

    let pyEditorInstalled = false;
    let rEditorInstalled = false;

    this.itemsList.forEach((item) => {
      if (item.command === CommandIDs.createNewPythonEditor) {
        pyEditorInstalled = true;
      } else if (item.command === CommandIDs.createNewREditor) {
        rEditorInstalled = true;
      }
    });

    if (!pyEditorInstalled && !rEditorInstalled) {
      yield* this.itemsList;
    }

    // Dont add tiles for new py and r files if their script editor is installed
    this.itemsList.forEach((item) => {
      if (
        !(
          item.command === CommandIDs.newFile &&
          ((pyEditorInstalled && item.args?.fileExt === 'py') ||
            (rEditorInstalled && item.args?.fileExt === 'r'))
        )
      ) {
        items.push(item);
      }
    });

    yield* items;
  }
}

export class Launcher extends JupyterlabLauncher {
  /**
   * Construct a new launcher widget.
   */
  constructor(options: ILauncher.IOptions) {
    super(options);
    this._translator = this.translator.load('jupyterlab');
  }

  private replaceCategoryIcon(
    category: React.ReactElement,
    icon: LabIcon
  ): React.ReactElement {
    const children = React.Children.map(category.props.children, (child) => {
      if (child.props.className === 'jp-Launcher-sectionHeader') {
        const grandchildren = React.Children.map(
          child.props.children,
          (grandchild) => {
            if (grandchild.props.className !== 'jp-Launcher-sectionTitle') {
              return <icon.react stylesheet="launcherSection" />;
            } else {
              return grandchild;
            }
          }
        );

        return React.cloneElement(child, child.props, grandchildren);
      } else {
        return child;
      }
    });

    return React.cloneElement(category, category.props, children);
  }

  /**
   * Render the launcher to virtual DOM nodes.
   */
  protected render(): React.ReactElement<React.JSX.Element> | null {
    // Bail if there is no model.
    if (!this.model) {
      return null;
    }

    // get the rendering from JupyterLab Launcher
    // and resort the categories
    const launcherBody = super.render();
    const launcherContent = launcherBody?.props.children;
    const launcherCategories = launcherContent.props.children;

    const categories: React.ReactElement<string>[] = [];

    const knownCategories = [ELYRA_CATEGORY];

    // Assemble the final ordered list of categories
    each(knownCategories, (category) => {
      React.Children.forEach(launcherCategories, (cat) => {
        if (cat.key === category) {
          if (cat.key === ELYRA_CATEGORY) {
            // First replace the icon
            cat = this.replaceCategoryIcon(cat, elyraIcon);

            // Then replace the category title text
            const children = React.Children.map(cat.props.children, (child) => {
              if (child.props.className === 'jp-Launcher-sectionHeader') {
                const grandchildren = React.Children.map(
                  child.props.children,
                  (grandchild) => {
                    if (
                      grandchild.props.className === 'jp-Launcher-sectionTitle'
                    ) {
                      // Replace "Elyra" with "Key Ward HUB" in the title
                      return React.cloneElement(
                        grandchild,
                        grandchild.props,
                        'Key Ward HUB'
                      );
                    }
                    return grandchild;
                  }
                );
                return React.cloneElement(child, child.props, grandchildren);
              }
              return child;
            });
            cat = React.cloneElement(cat, cat.props, children);
          }
          categories.push(cat);
        }
      });
    });

    // Wrap the sections in body and content divs.
    return (
      <div className="jp-Launcher-body">
        <div className="jp-Launcher-content">
          <div className="jp-Launcher-cwd">
            <h3>{this.cwd}</h3>
          </div>
          {categories}
        </div>
      </div>
    );
  }

  private _translator: TranslationBundle;
}
