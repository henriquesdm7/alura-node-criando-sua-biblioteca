// import chalk from 'chalk';
import fs from 'fs';

function extractLinks(text) {
    const regex = /\[([^\]]+)\]\((https:\/\/[^\)]+)\)/gm;
    const arrayResults = [];

    let temp;

    while ((temp = regex.exec(text)) !== null) {
        arrayResults.push({ [temp[1]]: temp[2] })
    }

    return arrayResults.length === 0 ? 'no links' : arrayResults;
}

function errorTreat(error) {
    throw new Error(error.code, 'the file was not found');
}

// => With async/await
async function readFile(filepath) {
    const encoding = 'utf-8';

    try {
        const text = await fs.promises.readFile(filepath, encoding);
        return extractLinks(text);
    } catch (error) {
        errorTreat(error);
    }
}

export default readFile;