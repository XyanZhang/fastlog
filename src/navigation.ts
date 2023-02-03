// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// The command has been defined in the package.json file
// Now provide the implementation of the command with registerCommand
// The commandId parameter must match the command field in package.json
let disposable: vscode.Disposable = vscode.commands.registerCommand('fastlog.nav', () => {
  let day = new Date();
  day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
  let date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
  vscode.window.showInformationMessage(`明天是: ${date}`);
  
  printDefinitionsForActiveEditor()

});

export default disposable


async function printDefinitionsForActiveEditor() {
  const activeEditor = vscode.window.activeTextEditor;
  console.log('activeEditor',activeEditor)
  if (!activeEditor) {
    return;
  }

  const definitions = await vscode.commands.executeCommand<vscode.Location[]>(
    'vscode.executeDefinitionProvider',
    activeEditor.document.uri,
    activeEditor.selection.active
  );
  console.log(activeEditor.selection.active)
  console.log(activeEditor.selection.active.character)
  console.log(activeEditor.selection.active.line)

  for (const definition of definitions) {
    console.log('definition',definition);
  }
  
  // console.log(activeEditor.selection.isSingleLine) // 是否是单行
  console.log(activeEditor.selection)
  contentReplace(activeEditor)
}

function contentReplace(activeEditor: vscode.TextEditor) {
  const { selection, document } = activeEditor;
  let handleLine = selection.active.line
  let newLine = handleLine + 1; 
  console.log(selection.start)
  console.log(selection.end)
  const word  = document.getText(document.getWordRangeAtPosition(selection.start));
  const line = document.lineAt(handleLine).text;
  console.log('word', word)
  console.log('line', line)
  activeEditor?.edit(editBuilder => {
    // 从开始到结束，全量替换
    const text = `${line}\nconsole.log('${word}',${word});\n`;
    // 获取当前行
    //  new vscode.Range()
    editBuilder.replace(new vscode.Range(handleLine, 0, handleLine+1, 0), text);
  });
}
