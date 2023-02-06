// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import path = require('path');

// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
let hover: vscode.Disposable = vscode.languages.registerHoverProvider('javascript', {
  provideHover(document, position, token) {
    const fileName    = document.fileName;
    const workDir     = path.dirname(fileName);
    const word        = document.getText(document.getWordRangeAtPosition(position));
    // console.log(1, document)
    // console.log(2, position)
    // console.log(3, token)
    // console.log(4, '这个就是悬停的文字', word)
    // 支持markdown语法
    return new vscode.Hover(
    `### 我就是返回的信息!
      1. 第一项：
        - 第一个元素
        - 第二个元素
  `);
  }
 }
);

export default hover



