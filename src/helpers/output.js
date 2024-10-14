import { readdir } from 'node:fs/promises';

export class TableRow {
    constructor(name, isDirectory = false) {
        this.name = name;
        this.type = isDirectory ? 'directory' : 'file';
    }
}

export const consoleLog = (data) => {
    process.stdout.write(JSON.stringify(data, null, 2) + '\n');
};

export const showDirContent = async (dirPath) =>{
    const dirContent = await readdir(dirPath, { withFileTypes: true });

    const [directories, files] = dirContent.reduce((acc, file) => {
        acc[file.isDirectory() ? 0 : 1].push(file);

        return acc;
    }, [[], []]);

    const directoriesRows = directories.map(directory => new TableRow(directory.name, true));
    const filesRows = files.map(file => new TableRow(file.name));

    console.table(directoriesRows.concat(filesRows));
}

export const showCurrentPlace = dirPath => {
    consoleLog(`You are currently in ${dirPath}`);
}

export const goodbye = username => {
    consoleLog(`Thank you for using File Manager, ${username}, goodbye!`);
}

export const welcome = username => {
    consoleLog(`Welcome to the File Manager, ${username}`);
}
