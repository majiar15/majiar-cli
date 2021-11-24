#! /usr/bin/env node
import yargs from "yargs";
import figlet from "figlet";
import chalk from "chalk";
import { createController, createRoute, createModel } from "./utils";
yargs
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
if ((yargs.argv.c || yargs.argv.generateController) && yargs.argv._[0] === 'g') {
    console.log(1);
  // @ts-ignore
  if (yargs.argv.ts) {
    // @ts-ignore
    createController(yargs.argv.c || yargs.argv.generateController, true);
  } else {
    // @ts-ignore
    createController(yargs.argv.c || yargs.argv.generateController, false);
  }
  //@ts-ignore
} else if ((yargs.argv.r || yargs.argv.generateRoute) && yargs.argv._[0] === 'g') {
    console.log(2);

  //@ts-ignore
  if (yargs.argv.ts) {
    // @ts-ignore
    createRoute(yargs.argv.r || yargs.argv.generateRoute, true);
  } else {
    // @ts-ignore
    createRoute(yargs.argv.r || yargs.argv.generateRoute, false);
  }

  //@ts-ignore
} else if ((yargs.argv.m || yargs.argv.generateModel) && yargs.argv._[0] === 'g') {
    console.log(3);

  //@ts-ignore
  if (yargs.argv.ts) {
    // @ts-ignore
    createModel(yargs.argv.m || yargs.argv.generateModel, true);
  } else {
    //@ts-ignore
    createModel(yargs.argv.m || yargs.argv.generateModel, false);
  }

// @ts-ignore
}else if (yargs.argv._[0] == "new-project"){
    // @ts-ignore
    if (yargs.argv.ts) {

    }
    console.log(yargs.argv);
} else {
    figlet.text('Majiar', {
        font: 'Sub-Zero',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data);
    });     
}
