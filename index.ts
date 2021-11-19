#! /usr/bin/env node
import yargs from 'yargs';
import {hideBin}from 'yargs/helpers'; 
import figlet from 'figlet'; 
import {createController, createRoute, createModel} from './utils';

const usage = "\nAyuda: Majiar-cli ofrece las siguientes funciones";const options = yargs  
.usage(usage)
.option("gc", {alias:"generateController", describe: "crea un controlador nuevo", type: "string", demandOption
: false })
.option("gr", {alias:"generateRoute", describe: "crea un router nuevo", type: "string", demandOption
: false })
.option("gm", {alias:"generateModel", describe: "crea un modelo nuevo", type: "string", demandOption
: false })                                                                                                    
.help(true); 
const argv = yargs(hideBin(process.argv)).argv
//@ts-ignore            
if(yargs.argv.gc || yargs.argv.generateController ){
    // @ts-ignore
createController(yargs.argv.gc || yargs.argv.generateController,false);
//@ts-ignore            
}else if(yargs.argv.gr || yargs.argv.generateRoute ){
//@ts-ignore            
createRoute(yargs.argv.gr || yargs.argv.generateRoute,false);

//@ts-ignore
}else if(yargs.argv.gm || yargs.argv.generateModel  ){
//@ts-ignore            
createModel(yargs.argv.gm || yargs.argv.generateModel,false);
}else{
      figlet.text('Majiar', {
      
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