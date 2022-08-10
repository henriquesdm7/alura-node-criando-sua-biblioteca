#!/usr/bin/env node

import readFile from "./index.js";
import validateURLs from "./http-validation.js";
import chalk from "chalk";

const args = process.argv;

async function processText(args) {
    const result = await readFile(args[2]);

    if (args[3] === "validate") {
        console.log(chalk.yellow('Validated links'), await validateURLs(result));
    } else {
        console.log(chalk.yellow('Links list'), result);
    }
}

processText(args);