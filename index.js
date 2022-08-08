import chalk from 'chalk';
import fs, { read } from 'fs';

function errorTreat(error) {
    throw new Error(chalk.red(error.code, 'o arquivo não foi encontrado'));
}

// ==> Synchronous format
// function readFile(filepath) {
//     const encoding = 'utf-8';
//     fs.readFile(filepath, encoding, (error, text) => {
//         if (error) {
//             errorTreat(error);

//         }

//         console.log(chalk.green(text))
//     });
// }

// ==> Asynchronous format
function readFile(filepath) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(filepath, encoding)
        .then((text) => {
            console.log(chalk.blue(text));
        })
        .catch((error) => errorTreat(error));
}

readFile('./arquivos/texto1.md');