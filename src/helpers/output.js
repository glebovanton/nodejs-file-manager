export function consoleLog (text) {
    process.stdout.write(text + '\n');
}

export const welcome = username => {
    consoleLog(`Welcome to the File Manager, ${username}`);
}
