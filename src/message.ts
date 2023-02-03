// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
let disposable = vscode.commands.registerCommand('fastlog.helloWorld', () => {
	// The code you place here will be executed every time your command is executed
	// Display a message box to the user
	vscode.window.showInformationMessage('Hello World from fastLog!');

	// vscode.window.showInformationMessage('第一个demo弹出信息!');
	// vscode.window.showWarningMessage('第一个警告信息')
	// vscode.window.showErrorMessage('第一个错误信息!');

});

export default disposable


