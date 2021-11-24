#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const utils_1 = require("./utils");
yargs_1.default
    .command(["g", '$0'], "Generate", function (yargs) {
    return yargs
        .option("c", {
        alias: "generateController",
        describe: "genera un nuevo controlador",
        type: "string",
    })
        .option("r", {
        alias: "generateRoute",
        describe: "crea un router nuevo",
        type: "string",
    })
        .option("m", {
        alias: "generateModel",
        describe: "crea un modelo nuevo",
        type: "string",
    })
        .option("ts", {
        alias: "typescript",
        describe: "crea los archivos en typescript",
        type: "boolean",
    }).help(true).version(false);
})
    .command(["new-project", '$0'], "Crear", function (yargs) {
    return yargs
        .option("ts", {
        alias: "typescript",
        describe: "crea los archivos en typescript",
        type: "boolean",
    }).help(true).version(false);
})
    .help("h")
    .alias("h", "help").argv;
//@ts-ignore
if ((yargs_1.default.argv.c || yargs_1.default.argv.generateController) && yargs_1.default.argv._[0] === 'g') {
    console.log(1);
    // @ts-ignore
    if (yargs_1.default.argv.ts) {
        // @ts-ignore
        utils_1.createController(yargs_1.default.argv.c || yargs_1.default.argv.generateController, true);
    }
    else {
        // @ts-ignore
        utils_1.createController(yargs_1.default.argv.c || yargs_1.default.argv.generateController, false);
    }
    //@ts-ignore
}
else if ((yargs_1.default.argv.r || yargs_1.default.argv.generateRoute) && yargs_1.default.argv._[0] === 'g') {
    console.log(2);
    //@ts-ignore
    if (yargs_1.default.argv.ts) {
        // @ts-ignore
        utils_1.createRoute(yargs_1.default.argv.r || yargs_1.default.argv.generateRoute, true);
    }
    else {
        // @ts-ignore
        utils_1.createRoute(yargs_1.default.argv.r || yargs_1.default.argv.generateRoute, false);
    }
    //@ts-ignore
}
else if ((yargs_1.default.argv.m || yargs_1.default.argv.generateModel) && yargs_1.default.argv._[0] === 'g') {
    console.log(3);
    //@ts-ignore
    if (yargs_1.default.argv.ts) {
        // @ts-ignore
        utils_1.createModel(yargs_1.default.argv.m || yargs_1.default.argv.generateModel, true);
    }
    else {
        //@ts-ignore
        utils_1.createModel(yargs_1.default.argv.m || yargs_1.default.argv.generateModel, false);
    }
    // @ts-ignore
}
else if (yargs_1.default.argv._[0] == "new-project") {
    console.log(chalk_1.default.yellow('Creando projecto'));
    let name = '';
    // @ts-ignore
    yargs_1.default.argv._.forEach((element, i) => {
        if (i != 0 && i != 1) {
            name += element.charAt(0).toUpperCase() + element.slice(1);
        }
        else if (i != 0) {
            name += element;
        }
    });
    // @ts-ignore
    if (yargs_1.default.argv.ts) {
        utils_1.createProject(name, true);
    }
    else {
        utils_1.createProject(name, false);
    }
}
else {
    figlet_1.default.text('Majiar', {
        font: 'Sub-Zero',
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
