import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.openSpongeBob', () => {
            const panel = vscode.window.createWebviewPanel(
                'spongeBob', // Identifies the type of the webview used internally
                'SpongeBob Video', // Title of the panel displayed to the user
                vscode.ViewColumn.One, // Editor column to show the new webview panel in.
                {
                    enableScripts: true
                } // Webview options.
            );

            panel.webview.html = getWebviewContent();
        })
    );
}

function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SpongeBob Video</title>
    </head>
    <body>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Id7qNPRQBP0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </body>
    </html>`;
}




export function deactivate() {}
