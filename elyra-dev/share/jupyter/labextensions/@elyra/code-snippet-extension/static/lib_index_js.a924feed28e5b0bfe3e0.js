"use strict";
(self["webpackChunk_elyra_code_snippet_extension"] = self["webpackChunk_elyra_code_snippet_extension"] || []).push([["lib_index_js"],{

/***/ "./lib/CodeSnippetService.js":
/*!***********************************!*\
  !*** ./lib/CodeSnippetService.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeSnippetService = exports.CODE_SNIPPET_SCHEMA = exports.CODE_SNIPPET_SCHEMASPACE = void 0;
const services_1 = __webpack_require__(/*! @elyra/services */ "webpack/sharing/consume/default/@elyra/services/@elyra/services");
const apputils_1 = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
exports.CODE_SNIPPET_SCHEMASPACE = 'code-snippets';
exports.CODE_SNIPPET_SCHEMA = 'code-snippet';
class CodeSnippetService {
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            return (_a = (yield services_1.MetadataService.getMetadata(exports.CODE_SNIPPET_SCHEMASPACE))) !== null && _a !== void 0 ? _a : [];
        });
    }
    // TODO: Test this function
    static findByLanguage(language) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allCodeSnippets = yield this.findAll();
                const codeSnippetsByLanguage = [];
                for (const codeSnippet of allCodeSnippets) {
                    if (codeSnippet.metadata.language === language) {
                        codeSnippetsByLanguage.push(codeSnippet);
                    }
                }
                return codeSnippetsByLanguage;
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    /**
     * Opens a dialog to confirm that the given code snippet
     * should be deleted, then sends a delete request to the metadata server.
     *
     * @param codeSnippet: code snippet to be deleted
     *
     * @returns A boolean promise that is true if the dialog confirmed
     * the deletion, and false if the deletion was cancelled.
     */
    static deleteCodeSnippet(codeSnippet) {
        return (0, apputils_1.showDialog)({
            title: `Delete snippet '${codeSnippet.display_name}'?`,
            buttons: [apputils_1.Dialog.cancelButton(), apputils_1.Dialog.okButton()]
        }).then((result) => {
            // Do nothing if the cancel button is pressed
            if (result.button.accept) {
                return services_1.MetadataService.deleteMetadata(exports.CODE_SNIPPET_SCHEMASPACE, codeSnippet.name).then(() => true);
            }
            else {
                return false;
            }
        });
    }
}
exports.CodeSnippetService = CodeSnippetService;


/***/ }),

/***/ "./lib/CodeSnippetWidget.js":
/*!**********************************!*\
  !*** ./lib/CodeSnippetWidget.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeSnippetWidget = void 0;
__webpack_require__(/*! ../style/index.css */ "./style/index.css");
const metadata_common_1 = __webpack_require__(/*! @elyra/metadata-common */ "webpack/sharing/consume/default/@elyra/metadata-common/@elyra/metadata-common");
const ui_components_1 = __webpack_require__(/*! @elyra/ui-components */ "webpack/sharing/consume/default/@elyra/ui-components/@elyra/ui-components");
const apputils_1 = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
const cells_1 = __webpack_require__(/*! @jupyterlab/cells */ "webpack/sharing/consume/default/@jupyterlab/cells");
const codeeditor_1 = __webpack_require__(/*! @jupyterlab/codeeditor */ "webpack/sharing/consume/default/@jupyterlab/codeeditor");
const codemirror_1 = __webpack_require__(/*! @jupyterlab/codemirror */ "webpack/sharing/consume/default/@jupyterlab/codemirror");
const coreutils_1 = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils");
const fileeditor_1 = __webpack_require__(/*! @jupyterlab/fileeditor */ "webpack/sharing/consume/default/@jupyterlab/fileeditor");
const notebook_1 = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
const ui_components_2 = __webpack_require__(/*! @jupyterlab/ui-components */ "webpack/sharing/consume/default/@jupyterlab/ui-components");
const algorithm_1 = __webpack_require__(/*! @lumino/algorithm */ "webpack/sharing/consume/default/@lumino/algorithm");
const coreutils_2 = __webpack_require__(/*! @lumino/coreutils */ "webpack/sharing/consume/default/@lumino/coreutils");
const dragdrop_1 = __webpack_require__(/*! @lumino/dragdrop */ "webpack/sharing/consume/default/@lumino/dragdrop");
const react_1 = __importDefault(__webpack_require__(/*! react */ "webpack/sharing/consume/default/react"));
const CodeSnippetService_1 = __webpack_require__(/*! ./CodeSnippetService */ "./lib/CodeSnippetService.js");
const METADATA_EDITOR_ID = 'elyra-metadata-editor';
const SNIPPET_DRAG_IMAGE_CLASS = 'elyra-codeSnippet-drag-image';
const CODE_SNIPPETS_METADATA_CLASS = 'elyra-metadata-code-snippets';
/**
 * The threshold in pixels to start a drag event.
 */
const DRAG_THRESHOLD = 5;
/**
 * The mimetype used for Jupyter cell data.
 */
const JUPYTER_CELL_MIME = 'application/vnd.jupyter.cells';
/**
 * A React Component for code-snippets display list.
 */
class CodeSnippetDisplay extends metadata_common_1.MetadataDisplay {
    constructor(props) {
        super(props);
        this.editors = {};
        // Handle code snippet insertion into an editor
        this.insertCodeSnippet = (snippet) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            const widget = this.props.getCurrentWidget();
            const codeSnippet = this.extractMetadataCodeSnippet(snippet);
            const snippetLanguage = this.extractMetadataLanguage(snippet);
            if (widget === null) {
                return;
            }
            if (this.isFileEditor(widget)) {
                const fileEditor = widget.content.editor;
                const markdownRegex = /^\.(md|mkdn?|mdown|markdown)$/;
                const editorLanguage = this.getEditorLanguage(widget);
                if (coreutils_1.PathExt.extname(widget.context.path).match(markdownRegex) !== null &&
                    snippetLanguage.toLowerCase() !== 'markdown') {
                    (_a = fileEditor.replaceSelection) === null || _a === void 0 ? void 0 : _a.call(fileEditor, this.addMarkdownCodeBlock(snippetLanguage, codeSnippet));
                }
                else if (editorLanguage) {
                    yield this.verifyLanguageAndInsert(snippet, editorLanguage, fileEditor);
                }
                else {
                    (_b = fileEditor.replaceSelection) === null || _b === void 0 ? void 0 : _b.call(fileEditor, codeSnippet);
                }
            }
            else if (widget instanceof notebook_1.NotebookPanel) {
                const notebookWidget = widget;
                const notebookCell = notebookWidget.content.activeCell;
                if (notebookCell === null) {
                    return;
                }
                const notebookCellEditor = notebookCell.editor;
                if (notebookCellEditor !== null) {
                    if (notebookCell instanceof cells_1.CodeCell) {
                        const kernelInfo = yield ((_d = (_c = notebookWidget.sessionContext.session) === null || _c === void 0 ? void 0 : _c.kernel) === null || _d === void 0 ? void 0 : _d.info);
                        const kernelLanguage = (kernelInfo === null || kernelInfo === void 0 ? void 0 : kernelInfo.language_info.name) || '';
                        yield this.verifyLanguageAndInsert(snippet, kernelLanguage, notebookCellEditor);
                    }
                    else if (notebookCell instanceof cells_1.MarkdownCell &&
                        snippetLanguage.toLowerCase() !== 'markdown') {
                        (_e = notebookCellEditor.replaceSelection) === null || _e === void 0 ? void 0 : _e.call(notebookCellEditor, this.addMarkdownCodeBlock(snippetLanguage, codeSnippet));
                    }
                    else {
                        (_f = notebookCellEditor.replaceSelection) === null || _f === void 0 ? void 0 : _f.call(notebookCellEditor, codeSnippet);
                    }
                    const notebookContent = notebookWidget.content;
                    const activeCellIndex = (_g = notebookContent.activeCellIndex) !== null && _g !== void 0 ? _g : -1;
                    const contentFactory = new notebook_1.NotebookPanel.ContentFactory({
                        editorFactory: this.props.editorServices.factoryService.newInlineEditor
                    });
                    /*
                      interface CodeCellCreatorOption {
                      model: ICodeCellModel | undefined;
                      rendermime: RenderMimeRegistry;
                      contentFactory: any;
                      cell_type: string;
                    }
                    */
                    const options = {
                        model: (_h = notebookContent.activeCell) === null || _h === void 0 ? void 0 : _h.model,
                        rendermime: notebookContent.rendermime,
                        contentFactory: contentFactory
                    };
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- API mismatch
                    const codeCell = contentFactory.createCodeCell(options);
                    codeCell.cell_type = 'code';
                    //insert the new code cell into the notebook at the specified index
                    // codeCell: CodeCell
                    // codeCell: SharedCell.Cell
                    (_j = widget.content.model) === null || _j === void 0 ? void 0 : _j.sharedModel.insertCell(activeCellIndex, codeCell);
                    //update the active cell index to the newly inserted cell
                    notebookWidget.content.activeCellIndex = activeCellIndex + 1;
                }
                else {
                    this.showErrDialog('notebookCellEditor have to be not null');
                }
            }
            else {
                this.showErrDialog('Code snippet insert failed: Unsupported widget');
            }
        });
        // Verify if a given widget is a FileEditor
        this.isFileEditor = (widget) => {
            return widget.content instanceof fileeditor_1.FileEditor;
        };
        // Return the language of the editor or empty string
        this.getEditorLanguage = (widget) => {
            var _a;
            const editorLanguage = codemirror_1.EditorLanguageRegistry.getDefaultLanguages().find((language) => language.mime.includes(widget.content.model.mimeType));
            return (_a = editorLanguage === null || editorLanguage === void 0 ? void 0 : editorLanguage.displayName) !== null && _a !== void 0 ? _a : '';
        };
        // Return the given code wrapped in a markdown code block
        this.addMarkdownCodeBlock = (language, code) => {
            return '```' + language + '\n' + code + '\n```';
        };
        // Handle language compatibility between code snippet and editor
        this.verifyLanguageAndInsert = (snippet, editorLanguage, editor) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const codeSnippet = this.extractMetadataCodeSnippet(snippet);
            const snippetLanguage = this.extractMetadataLanguage(snippet);
            if (editorLanguage &&
                snippetLanguage.toLowerCase() !== editorLanguage.toLowerCase()) {
                const result = yield this.showWarnDialog(editorLanguage, snippet.display_name);
                if (result.button.accept) {
                    (_a = editor.replaceSelection) === null || _a === void 0 ? void 0 : _a.call(editor, codeSnippet);
                }
            }
            else {
                // Language match or editorLanguage is unavailable
                (_b = editor.replaceSelection) === null || _b === void 0 ? void 0 : _b.call(editor, codeSnippet);
            }
        });
        // Display warning dialog when inserting a code snippet incompatible with editor's language
        this.showWarnDialog = (editorLanguage, snippetName) => __awaiter(this, void 0, void 0, function* () {
            return (0, apputils_1.showDialog)({
                title: 'Warning',
                body: `Code snippet "${snippetName}" is incompatible with ${editorLanguage}. Continue?`,
                buttons: [apputils_1.Dialog.cancelButton(), apputils_1.Dialog.okButton()]
            });
        });
        // Display error dialog when inserting a code snippet into unsupported widget (i.e. not an editor)
        this.showErrDialog = (errMsg) => {
            return (0, apputils_1.showDialog)({
                title: 'Error',
                body: errMsg,
                buttons: [apputils_1.Dialog.okButton()]
            });
        };
        this.extractMetadataCodeSnippet = (metadata) => {
            var _a;
            const codeLines = (_a = metadata.metadata.code) !== null && _a !== void 0 ? _a : [];
            return codeLines.join('\n');
        };
        this.extractMetadataLanguage = (metadata) => {
            var _a;
            return (_a = metadata.metadata.language) !== null && _a !== void 0 ? _a : 'Unknown';
        };
        this.extractMetadataDescription = (metadata) => {
            var _a;
            return (_a = metadata.metadata.description) !== null && _a !== void 0 ? _a : '';
        };
        this.actionButtons = (metadata) => {
            return [
                {
                    title: 'Copy to clipboard',
                    icon: ui_components_2.pasteIcon,
                    feedback: 'Copied!',
                    onClick: () => {
                        apputils_1.Clipboard.copyToSystem(this.extractMetadataCodeSnippet(metadata));
                    }
                },
                {
                    title: 'Insert',
                    icon: ui_components_1.importIcon,
                    onClick: () => {
                        this.insertCodeSnippet(metadata);
                    }
                },
                {
                    title: 'Edit',
                    icon: ui_components_2.editIcon,
                    onClick: () => {
                        this.props.openMetadataEditor({
                            onSave: this.props.updateMetadata,
                            schemaspace: CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE,
                            schema: CodeSnippetService_1.CODE_SNIPPET_SCHEMA,
                            name: metadata.name
                        });
                    }
                },
                {
                    title: 'Duplicate',
                    icon: ui_components_2.copyIcon,
                    onClick: () => {
                        metadata_common_1.MetadataCommonService.duplicateMetadataInstance(CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE, metadata, this.props.metadata)
                            .then((_response) => {
                            this.props.updateMetadata();
                        })
                            .catch((error) => __awaiter(this, void 0, void 0, function* () {
                            yield ui_components_1.RequestErrors.serverError(error);
                        }));
                    }
                },
                {
                    title: 'Delete',
                    icon: ui_components_1.trashIcon,
                    onClick: () => {
                        CodeSnippetService_1.CodeSnippetService.deleteCodeSnippet(metadata)
                            .then((deleted) => {
                            if (deleted) {
                                this.props.updateMetadata();
                                delete this.editors[metadata.name];
                                const editorWidget = (0, algorithm_1.find)(this.props.shell.widgets('main'), (value, index) => {
                                    return (value.id ===
                                        `${METADATA_EDITOR_ID}:${CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE}:${CodeSnippetService_1.CODE_SNIPPET_SCHEMA}:${metadata.name}`);
                                });
                                if (editorWidget) {
                                    editorWidget.dispose();
                                }
                            }
                        })
                            .catch((error) => __awaiter(this, void 0, void 0, function* () {
                            yield ui_components_1.RequestErrors.serverError(error);
                        }));
                    }
                }
            ];
        };
        // Render display of a code snippet
        this.renderMetadata = (metadata) => {
            return (react_1.default.createElement("div", { key: metadata.name, "data-item-id": metadata.display_name, className: metadata_common_1.METADATA_ITEM, style: this.state.metadata.includes(metadata) ? {} : { display: 'none' } },
                react_1.default.createElement(ui_components_1.ExpandableComponent, { displayName: this.getDisplayName(metadata), tooltip: this.extractMetadataDescription(metadata), actionButtons: this.actionButtons(metadata), onExpand: () => {
                        this.editors[metadata.name].redo();
                    }, onMouseDown: (event) => {
                        this.handleDragSnippet(event, metadata);
                    } },
                    react_1.default.createElement("div", { id: metadata.name }))));
        };
        this.createPreviewEditors = () => {
            const editorFactory = this.props.editorServices.factoryService.newInlineEditor;
            this.props.metadata.map((codeSnippet) => {
                const content = this.extractMetadataCodeSnippet(codeSnippet);
                if (codeSnippet.name in this.editors) {
                    // Make sure code is up to date
                    this.editors[codeSnippet.name].model.sharedModel.setSource(content);
                }
                else {
                    // Add new snippets
                    const snippetElement = document.getElementById(codeSnippet.name);
                    if (snippetElement === null) {
                        return;
                    }
                    const language = this.extractMetadataLanguage(codeSnippet);
                    const mimeType = this.props.editorServices.mimeTypeService.getMimeTypeByLanguage({
                        value: content,
                        name: language,
                        codemirror_mode: language
                    });
                    const newEditor = editorFactory({
                        config: { readOnly: true },
                        host: snippetElement,
                        model: new codeeditor_1.CodeEditor.Model({ mimeType })
                    });
                    newEditor.model.sharedModel.setSource(content);
                    this.editors[codeSnippet.name] = newEditor;
                }
            });
        };
        this._drag = null;
        this._dragData = null;
        this.handleDragMove = this.handleDragMove.bind(this);
        this._evtMouseUp = this._evtMouseUp.bind(this);
    }
    // Initial setup to handle dragging a code snippet
    handleDragSnippet(event, metadata) {
        const { button } = event;
        // do nothing if left mouse button is clicked
        if (button !== 0) {
            return;
        }
        this._dragData = {
            pressX: event.clientX,
            pressY: event.clientY,
            dragImage: null
        };
        const mouseUpListener = (event) => {
            this._evtMouseUp(event, metadata, mouseMoveListener);
        };
        const mouseMoveListener = (event) => {
            this.handleDragMove(event, metadata, mouseMoveListener, mouseUpListener);
        };
        const target = event.target;
        target.addEventListener('mouseup', mouseUpListener, {
            once: true,
            capture: true
        });
        target.addEventListener('mousemove', mouseMoveListener, true);
        // since a browser has its own drag'n'drop support for images and some other elements.
        target.ondragstart = () => false;
    }
    _evtMouseUp(event, _metadata, mouseMoveListener) {
        event.preventDefault();
        event.stopPropagation();
        const target = event.target;
        target.removeEventListener('mousemove', mouseMoveListener, true);
    }
    handleDragMove(event, metadata, mouseMoveListener, mouseUpListener) {
        event.preventDefault();
        event.stopPropagation();
        const data = this._dragData;
        if (data &&
            this.shouldStartDrag(data.pressX, data.pressY, event.clientX, event.clientY)) {
            // Create drag image
            const element = document.createElement('div');
            element.innerHTML = this.getDisplayName(metadata);
            element.classList.add(SNIPPET_DRAG_IMAGE_CLASS);
            data.dragImage = element;
            // Remove mouse listeners and start the drag.
            const target = event.target;
            target.removeEventListener('mousemove', mouseMoveListener, true);
            target.removeEventListener('mouseup', mouseUpListener, true);
            void this.startDrag(data.dragImage, metadata, event.clientX, event.clientY);
        }
    }
    /**
     * Detect if a drag event should be started. This is down if the
     * mouse is moved beyond a certain distance (DRAG_THRESHOLD).
     *
     * @param prevX - X Coordinate of the mouse pointer during the mousedown event
     * @param prevY - Y Coordinate of the mouse pointer during the mousedown event
     * @param nextX - Current X Coordinate of the mouse pointer
     * @param nextY - Current Y Coordinate of the mouse pointer
     */
    shouldStartDrag(prevX, prevY, nextX, nextY) {
        const dx = Math.abs(nextX - prevX);
        const dy = Math.abs(nextY - prevY);
        return dx >= 0 || dy >= DRAG_THRESHOLD;
    }
    startDrag(dragImage, metadata, clientX, clientY) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const widget = this.props.getCurrentWidget();
            const notebookContent = widget.content;
            //const activeCellIndex = notebookContent.activeCellIndex ?? -1;
            const contentFactory = new notebook_1.NotebookPanel.ContentFactory({
                editorFactory: this.props.editorServices.factoryService.newInlineEditor
            });
            const options = {
                model: (_a = notebookContent.activeCell) === null || _a === void 0 ? void 0 : _a.model,
                rendermime: notebookContent.rendermime,
                contentFactory: contentFactory
            };
            const options2 = {
                model: (_b = notebookContent.activeCell) === null || _b === void 0 ? void 0 : _b.model,
                rendermime: notebookContent.rendermime,
                contentFactory: contentFactory
            };
            const codeCell = contentFactory.createCodeCell(options);
            const markdownCell = contentFactory.createMarkdownCell(options2);
            const language = this.extractMetadataLanguage(metadata);
            const model = language.toLowerCase() !== 'markdown' ? codeCell : markdownCell;
            const content = this.extractMetadataCodeSnippet(metadata);
            if (language.toLowerCase() !== 'markdown') {
                if (model.model.type === 'code') {
                    model.model.sharedModel.setSource(content);
                }
                else {
                    // Handle other cases if needed
                }
            }
            if (language.toLowerCase() === 'markdown') {
                if (model.model.type === 'markdown') {
                    model.model.sharedModel.setSource(content);
                }
                else {
                    // Handle other cases if needed
                }
            }
            this._drag = new dragdrop_1.Drag({
                mimeData: new coreutils_2.MimeData(),
                dragImage: dragImage,
                supportedActions: 'copy-move',
                proposedAction: 'copy',
                source: this
            });
            const selected = [model.model.toJSON()];
            this._drag.mimeData.setData(JUPYTER_CELL_MIME, selected);
            this._drag.mimeData.setData('text/plain', content);
            return this._drag.start(clientX, clientY).then(() => {
                this._drag = null;
                this._dragData = null;
            });
        });
    }
    getDisplayName(metadata) {
        const language = this.extractMetadataLanguage(metadata);
        return `[${language}] ${metadata.display_name}`;
    }
    sortMetadata() {
        this.props.metadata.sort((a, b) => this.getDisplayName(a).localeCompare(this.getDisplayName(b)));
    }
    matchesSearch(searchValue, metadata) {
        searchValue = searchValue.toLowerCase();
        // True if search string is in name, display_name, or language of snippet
        // or if the search string is empty
        return (metadata.name.toLowerCase().includes(searchValue) ||
            metadata.display_name.toLowerCase().includes(searchValue) ||
            this.extractMetadataLanguage(metadata).toLowerCase().includes(searchValue));
    }
    componentDidMount() {
        this.createPreviewEditors();
    }
    componentDidUpdate() {
        this.createPreviewEditors();
    }
}
/**
 * A widget for Code Snippets.
 */
class CodeSnippetWidget extends metadata_common_1.MetadataWidget {
    constructor(props) {
        super(props);
        this.props = props;
    }
    // Request code snippets from server
    fetchMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            return CodeSnippetService_1.CodeSnippetService.findAll().catch((error) => __awaiter(this, void 0, void 0, function* () {
                yield ui_components_1.RequestErrors.serverError(error);
                return [];
            }));
        });
    }
    renderDisplay(metadata) {
        if (Array.isArray(metadata) && !metadata.length) {
            // Empty metadata
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("br", null),
                react_1.default.createElement("h6", { className: "elyra-no-metadata-msg" },
                    "Click the + button to add ",
                    this.props.display_name.toLowerCase())));
        }
        return (react_1.default.createElement(CodeSnippetDisplay, { metadata: metadata, openMetadataEditor: this.openMetadataEditor, updateMetadata: this.updateMetadata, schemaspace: CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE, getCurrentWidget: this.props.getCurrentWidget, className: CODE_SNIPPETS_METADATA_CLASS, editorServices: this.props.editorServices, shell: this.props.app.shell, sortMetadata: true }));
    }
}
exports.CodeSnippetWidget = CodeSnippetWidget;


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.code_snippet_extension = void 0;
__webpack_require__(/*! ../style/index.css */ "./style/index.css");
const ui_components_1 = __webpack_require__(/*! @elyra/ui-components */ "webpack/sharing/consume/default/@elyra/ui-components/@elyra/ui-components");
const application_1 = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application");
const apputils_1 = __webpack_require__(/*! @jupyterlab/apputils */ "webpack/sharing/consume/default/@jupyterlab/apputils");
const codeeditor_1 = __webpack_require__(/*! @jupyterlab/codeeditor */ "webpack/sharing/consume/default/@jupyterlab/codeeditor");
const docregistry_1 = __webpack_require__(/*! @jupyterlab/docregistry */ "webpack/sharing/consume/default/@jupyterlab/docregistry");
const fileeditor_1 = __webpack_require__(/*! @jupyterlab/fileeditor */ "webpack/sharing/consume/default/@jupyterlab/fileeditor");
const markdownviewer_1 = __webpack_require__(/*! @jupyterlab/markdownviewer */ "webpack/sharing/consume/default/@jupyterlab/markdownviewer");
const notebook_1 = __webpack_require__(/*! @jupyterlab/notebook */ "webpack/sharing/consume/default/@jupyterlab/notebook");
const CodeSnippetService_1 = __webpack_require__(/*! ./CodeSnippetService */ "./lib/CodeSnippetService.js");
const CodeSnippetWidget_1 = __webpack_require__(/*! ./CodeSnippetWidget */ "./lib/CodeSnippetWidget.js");
const CODE_SNIPPET_EXTENSION_ID = 'elyra-code-snippet-extension';
const commandIDs = {
    saveAsSnippet: 'codesnippet:save-as-snippet'
};
/**
 * Initialization data for the code-snippet extension.
 */
exports.code_snippet_extension = {
    id: CODE_SNIPPET_EXTENSION_ID,
    autoStart: true,
    requires: [apputils_1.ICommandPalette, application_1.ILayoutRestorer, codeeditor_1.IEditorServices],
    activate: (app, palette, restorer, editorServices) => {
        console.log('Elyra - code-snippet extension is activated!');
        const getCurrentWidget = () => {
            return app.shell.currentWidget;
        };
        const codeSnippetWidget = new CodeSnippetWidget_1.CodeSnippetWidget({
            app,
            display_name: 'Code Snippets',
            schemaspace: CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE,
            schema: CodeSnippetService_1.CODE_SNIPPET_SCHEMA,
            icon: ui_components_1.codeSnippetIcon,
            getCurrentWidget,
            editorServices,
            titleContext: '',
            addLabel: 'code snippet'
        });
        const codeSnippetWidgetId = `elyra-metadata:${CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE}`;
        codeSnippetWidget.id = codeSnippetWidgetId;
        codeSnippetWidget.title.icon = ui_components_1.codeSnippetIcon;
        codeSnippetWidget.title.caption = 'Code Snippets';
        restorer.add(codeSnippetWidget, codeSnippetWidgetId);
        // Rank has been chosen somewhat arbitrarily to give priority to the running
        // sessions widget in the sidebar.
        app.shell.add(codeSnippetWidget, 'left', { rank: 900 });
        app.commands.addCommand(commandIDs.saveAsSnippet, {
            label: 'Save As Code Snippet',
            isEnabled: () => {
                var _a, _b;
                const currentWidget = app.shell.currentWidget;
                const editor = getEditor(currentWidget);
                let selection = '';
                if (editor) {
                    selection = getTextSelection(editor);
                }
                else if (isMarkdownDocument(currentWidget)) {
                    selection = (_b = (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
                }
                if (selection.length > 0) {
                    return true;
                }
                if (isNotebookEditor(currentWidget)) {
                    if (getSelectedCellContents().length > 0) {
                        return true;
                    }
                }
                return false;
            },
            isVisible: () => true,
            execute: () => {
                var _a, _b;
                const currentWidget = app.shell.currentWidget;
                const editor = getEditor(currentWidget);
                let selection = '';
                if (editor) {
                    selection = getTextSelection(editor);
                }
                else if (isMarkdownDocument(currentWidget)) {
                    selection = (_b = (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
                }
                if (selection.length > 0) {
                    codeSnippetWidget.openMetadataEditor({
                        schemaspace: CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE,
                        schema: CodeSnippetService_1.CODE_SNIPPET_SCHEMA,
                        code: selection.split('\n'),
                        onSave: codeSnippetWidget.updateMetadata
                    });
                }
                else {
                    const selectedCells = getSelectedCellContents();
                    const code = selectedCells.join('\n\n').split('\n');
                    codeSnippetWidget.openMetadataEditor({
                        schemaspace: CodeSnippetService_1.CODE_SNIPPET_SCHEMASPACE,
                        schema: CodeSnippetService_1.CODE_SNIPPET_SCHEMA,
                        code: code,
                        onSave: codeSnippetWidget.updateMetadata
                    });
                }
            }
        });
        app.contextMenu.addItem({
            command: commandIDs.saveAsSnippet,
            selector: '.jp-Cell'
        });
        app.contextMenu.addItem({
            command: commandIDs.saveAsSnippet,
            selector: '.jp-FileEditor'
        });
        app.contextMenu.addItem({
            command: commandIDs.saveAsSnippet,
            selector: '.jp-MarkdownViewer'
        });
        const getTextSelection = (editor, markdownPreview) => {
            var _a, _b;
            const selectionObj = editor.getSelection();
            const start = editor.getOffsetAt(selectionObj.start);
            const end = editor.getOffsetAt(selectionObj.end);
            const source = editor.model.sharedModel.getSource();
            const selection = source.substring(start, end);
            if (!selection && source) {
                // Allow selections from a rendered notebook cell
                return (_b = (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
            }
            return selection;
        };
        const getSelectedCellContents = () => {
            const currentWidget = app.shell.currentWidget;
            const notebookWidget = currentWidget;
            const notebook = notebookWidget.content;
            const notebookCell = notebook.activeCell;
            const selectedCells = [];
            if (notebookCell) {
                const allCells = notebook.widgets;
                allCells.forEach((cell) => {
                    if (notebook.isSelectedOrActive(cell)) {
                        const contents = cell.model.toJSON().source.toString();
                        if (contents.length > 0)
                            selectedCells.push(contents);
                    }
                });
            }
            return selectedCells;
        };
        const isFileEditor = (currentWidget) => {
            return (currentWidget instanceof docregistry_1.DocumentWidget &&
                currentWidget.content instanceof fileeditor_1.FileEditor);
        };
        const isNotebookEditor = (currentWidget) => {
            return currentWidget instanceof notebook_1.NotebookPanel;
        };
        const isMarkdownDocument = (currentWidget) => {
            return currentWidget instanceof markdownviewer_1.MarkdownDocument;
        };
        const getEditor = (currentWidget) => {
            if (isFileEditor(currentWidget)) {
                const documentWidget = currentWidget;
                return documentWidget.content.editor;
            }
            else if (isNotebookEditor(currentWidget)) {
                const notebookWidget = currentWidget;
                const notebookCell = notebookWidget.content.activeCell;
                return notebookCell === null || notebookCell === void 0 ? void 0 : notebookCell.editor;
            }
            return undefined;
        };
    }
};
exports["default"] = exports.code_snippet_extension;


/***/ })

}]);
//# sourceMappingURL=lib_index_js.a924feed28e5b0bfe3e0.js.map