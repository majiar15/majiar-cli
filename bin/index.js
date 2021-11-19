#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const figlet_1 = __importDefault(require("figlet"));
const utils_1 = require("./utils");
const usage = "\nAyuda: Majiar-cli ofrece las siguientes funciones";
const options = yargs_1.default
    .usage(usage)
    .option("gc", { alias: "generateController", describe: "crea un controlador nuevo", type: "string", demandOption: false })
    .option("gr", { alias: "generateRoute", describe: "crea un router nuevo", type: "string", demandOption: false })
    .option("gm", { alias: "generateModel", describe: "crea un modelo nuevo", type: "string", demandOption: false })
    .help(true);
const argv = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).argv;
//@ts-ignore            
if (yargs_1.default.argv.gc || yargs_1.default.argv.generateController) {
    // @ts-ignore
    (0, utils_1.createController)(yargs_1.default.argv.gc || yargs_1.default.argv.generateController, false);
    //@ts-ignore            
}
else if (yargs_1.default.argv.gr || yargs_1.default.argv.generateRoute) {
    //@ts-ignore            
    (0, utils_1.createRoute)(yargs_1.default.argv.gr || yargs_1.default.argv.generateRoute, false);
    //@ts-ignore
}
else if (yargs_1.default.argv.gm || yargs_1.default.argv.generateModel) {
    //@ts-ignore            
    (0, utils_1.createModel)(yargs_1.default.argv.gm || yargs_1.default.argv.generateModel, false);
}
else {
    figlet_1.default.text('Majiar', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });
}
