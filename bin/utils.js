"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.createModel = exports.createRoute = exports.createController = void 0;
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
function createController(name, type) {
    if (!fs_1.default.existsSync("./controllers")) {
        fs_1.default.mkdirSync("./controllers");
        if (type) {
            fs_1.default.appendFile(`./controllers/${name}Controller.ts`, contentController(name, true), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Controlador creado correctamente"));
            });
        }
        else {
            fs_1.default.appendFile(`./controllers/${name}Controller.js`, contentController(name), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Controlador creado correctamente"));
            });
        }
    }
    else {
        if (type) {
            fs_1.default.appendFile(`./controllers/${name}Controller.ts`, contentController(name, true), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Controlador creado correctamente"));
            });
        }
        else {
            fs_1.default.appendFile(`./controllers/${name}Controller.js`, contentController(name), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Controlador creado correctamente"));
            });
        }
    }
}
exports.createController = createController;
function createRoute(name, type) {
    if (!fs_1.default.existsSync("./routes")) {
        fs_1.default.mkdirSync("./routes");
        if (type) {
            fs_1.default.appendFile(`./routes/${name}.ts`, contentRouter(name, true), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Router creado correctamente"));
            });
        }
        else {
            fs_1.default.appendFile(`./routes/${name}.js`, contentRouter(name), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Router creado correctamente"));
            });
        }
    }
    else {
        if (type) {
            fs_1.default.appendFile(`./routes/${name}.ts`, contentRouter(name, true), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Router creado correctamente"));
            });
        }
        else {
            fs_1.default.appendFile(`./routes/${name}.js`, contentRouter(name), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("Router creado correctamente"));
            });
        }
    }
}
exports.createRoute = createRoute;
function createModel(name, type) {
    if (!fs_1.default.existsSync("./models")) {
        fs_1.default.mkdirSync("./models");
        if (type) {
            fs_1.default.appendFile(`./models/${name}Model.ts`, contentModel(name, true), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("modelo creado correctamente"));
            });
        }
        else {
            fs_1.default.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("modelo creado correctamente"));
            });
        }
    }
    else {
        if (type) {
            fs_1.default.appendFile(`./models/${name}Model.ts`, contentModel(name, true), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("modelo creado correctamente"));
            });
        }
        else {
            fs_1.default.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
                if (err)
                    throw err;
                console.log(chalk_1.default.greenBright("modelo creado correctamente"));
            });
        }
    }
}
exports.createModel = createModel;
function createProject(name, type) {
    if (!fs_1.default.existsSync(`./${name}`)) {
        fs_1.default.mkdirSync(`./${name}`);
    }
    if (type) {
        child_process_1.exec(`cd ${name} && npm init -y`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            contentNewProject(name, true);
        });
    }
    else {
        // fs.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
        //     if (err) throw err;
        //     console.log(chalk.greenBright('modelo creado correctamente'));
        //   });
        child_process_1.exec(`cd ${name} && npm init -y`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            contentNewProject(name);
        });
    }
}
exports.createProject = createProject;
function contentModel(name, type = false) {
    if (type) {
        return `import { Schema, model, Document } from "mongoose";

const ${name}Schema: Schema = new Schema({
    name: String,
});

interface i${name.charAt(0).toUpperCase() + name.slice(1)} extends Document{
    name: String;
};

export default model<i${name.charAt(0).toUpperCase() + name.slice(1)}>('${name.charAt(0).toUpperCase() + name.slice(1)}', ${name}Schema);`;
    }
    else {
        return `let mongoose = require('mongoose');

const Schema = mongoose.Schema;

// crea tu Schema
const ${name}Schema = new Schema({
    name: String,
});

module.exports = mongoose.model('${name.charAt(0).toUpperCase() + name.slice(1)}',${name}Schema);`;
    }
}
function contentController(name, type = false) {
    if (type) {
        return `import { Response, Request } from "express";
import { CallbackError, Schema } from "mongoose";

import ${name}Model from "../models/${name}Model";
class ${name.charAt(0).toUpperCase() + name.slice(1)}Controller{

    constructor(){}
    index(req:Request, res: Response){
        res.status(200).send("${name}Controller");
    }

}
const ${name}Controller:${name.charAt(0).toUpperCase() + name.slice(1)}Controller =  new ${name.charAt(0).toUpperCase() + name.slice(1)}Controller();

export default ${name}Controller;`;
    }
    else {
        return `// crea tus funciones
    // exports.Fun = function(req, res) {
    // }
        `;
    }
}
function contentServer(type = false) {
    if (!type) {
        return `// dependencies
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// Routers
const userRouter = require("./routes/user");

// application settings
const app = express();
const mongoDB = process.env.MONGO_URI;
app.set('port', process.env.PORT || 3000);

// configuracion de base de datos
mongoose.createConnection
mongoose.connect(mongoDB)
    .then(db =>{ console.log("db is conected")})
    .catch(error =>{ console.log('error '+error)});

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
//rutas
app.use('/api/user', userRouter);

//start server
app.listen(app.get('port'), function() {
    console.log('server on port ' + app.get('port'));
});
`;
    }
    else {
        return `import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {config as dotenvConfig} from "dotenv";
// routers
import userRouter from './routes/user';
class Server {
    public app: express.Application;
    constructor() {
        
        this.app = express();
        this.config();
        this.routes();
    }
    config(){
        dotenvConfig();
        const mongoUri = process.env.MONGO_URI;
        mongoose.createConnection;
        //@ts-ignore
        mongoose.connect(mongoUri)
            .then(db =>{ console.log("db is conected")})
            .catch(error =>{ console.log('error '+error)});
        // setings
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        
        
    }
    routes(){
        this.app.use('/api/user',userRouter); 
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log("server listenig in port "+this.app.get('port'));
        });
    }
}
let server = new Server();

server.start();`;
    }
}
function contentRouter(name, type = false) {
    if (type) {
        return `import { Router, Response, Request } from "express";
import ${name}Controller from "../controllers/${name}Controller";
class ${name.charAt(0).toUpperCase() + name.slice(1)}Router{
    
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }
    routes(){
        // this.router.get('/', ${name}Controller);
    }
}
const ${name}Router = new ${name.charAt(0).toUpperCase() + name.slice(1)}Router();
export default ${name}Router.router;`;
    }
    else {
        return `let express = require('express');
let router = express.Router();
let ${name}Controller = require('../controllers/${name}Controller');
    
// router.get('/', ${name}Controller);
    
module.exports = router;
        `;
    }
}
function contentNewProject(name, type = false) {
    if (type) {
        // CREATE user controller
        if (!fs_1.default.existsSync(`./${name}/controllers`)) {
            fs_1.default.mkdirSync(`./${name}/controllers`);
            fs_1.default.appendFile(`./${name}/controllers/userController.ts`, contentController("user", true), function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            fs_1.default.appendFile(`./${name}/controllers/userController.ts`, contentController("user", true), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE user model
        if (!fs_1.default.existsSync(`./${name}/models`)) {
            fs_1.default.mkdirSync(`./${name}/models`);
            fs_1.default.appendFile(`./${name}/models/userModel.ts`, contentModel("user", true), function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            fs_1.default.appendFile(`./${name}/models/userModel.ts`, contentModel("user", true), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE router
        if (!fs_1.default.existsSync(`./${name}/routes`)) {
            fs_1.default.mkdirSync(`./${name}/routes`);
            fs_1.default.appendFile(`./${name}/routes/user.ts`, contentRouter("user", true), function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            fs_1.default.appendFile(`./${name}/routes/user.ts`, contentRouter("user", true), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE server.js
        if (!fs_1.default.existsSync(`./${name}/server.ts`)) {
            fs_1.default.appendFile(`./${name}/server.ts`, contentServer(true), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE .env
        if (!fs_1.default.existsSync(`./${name}/.env`)) {
            fs_1.default.appendFile(`./${name}/.env`, `MONGO_URI=mongodb://localhost:27017/${name}`, function (err) {
                if (err)
                    throw err;
            });
        }
        // add scripts package.json
        let rawdata = fs_1.default.readFileSync(`./${name}/package.json`);
        // @ts-ignore
        let packagejson = JSON.parse(rawdata);
        packagejson.main = "server.ts";
        packagejson.scripts = {
            ts: "tsc -w",
            dev: "nodemon ./build/server.js",
            start: "node ./build/server.js",
        };
        fs_1.default.writeFile(`./${name}/package.json`, JSON.stringify(packagejson, null, 2), (error) => {
            if (error) {
                console.log("An error has occurred ", error);
                return;
            }
        });
        // add tsconfig.json
        if (!fs_1.default.existsSync(`./${name}/tsconfig.json`)) {
            fs_1.default.appendFile(`./${name}/tsconfig.json`, contentTsConfig(), function (err) {
                if (err)
                    throw err;
            });
        }
        // create gitignore
        if (!fs_1.default.existsSync(`./${name}/.gitignore`)) {
            fs_1.default.appendFile(`./${name}/.gitignore`, "/node_modules \n/build", function (err) {
                if (err)
                    throw err;
            });
        }
        console.log(chalk_1.default.greenBright("cargando dependencias..."));
        // add dependecis
        child_process_1.exec(`cd ./${name} && npm install express mongoose cors dotenv && npm install nodemon @types/express @types/cors @types/mongoose --save-dev`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            console.log(chalk_1.default.greenBright("Proyecto creado correctamente"));
        });
    }
    else {
        // CREATE user controller
        if (!fs_1.default.existsSync(`./${name}/controllers`)) {
            fs_1.default.mkdirSync(`./${name}/controllers`);
            fs_1.default.appendFile(`./${name}/controllers/userController.js`, contentController("user"), function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            fs_1.default.appendFile(`./${name}/controllers/userController.js`, contentController("user"), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE user model
        if (!fs_1.default.existsSync(`./${name}/models`)) {
            fs_1.default.mkdirSync(`./${name}/models`);
            fs_1.default.appendFile(`./${name}/models/userModel.js`, contentModel("user"), function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            fs_1.default.appendFile(`./${name}/models/userModel.js`, contentModel("user"), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE router
        if (!fs_1.default.existsSync(`./${name}/routes`)) {
            fs_1.default.mkdirSync(`./${name}/routes`);
            fs_1.default.appendFile(`./${name}/routes/user.js`, contentRouter("user"), function (err) {
                if (err)
                    throw err;
            });
        }
        else {
            fs_1.default.appendFile(`./${name}/routes/user.js`, contentRouter("user"), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE server.js
        if (!fs_1.default.existsSync(`./${name}/server.js`)) {
            fs_1.default.appendFile(`./${name}/server.js`, contentServer(), function (err) {
                if (err)
                    throw err;
            });
        }
        // CREATE .env
        if (!fs_1.default.existsSync(`./${name}/.env`)) {
            fs_1.default.appendFile(`./${name}/.env`, `MONGO_URI=mongodb://localhost:27017/${name}`, function (err) {
                if (err)
                    throw err;
            });
        }
        // add scripts to package.json
        let rawdata = fs_1.default.readFileSync(`./${name}/package.json`);
        // @ts-ignore
        let packagejson = JSON.parse(rawdata);
        packagejson.main = "server.js";
        packagejson.scripts = {
            dev: "nodemon ./server.js",
            start: "node ./server.js",
        };
        fs_1.default.writeFile(`./${name}/package.json`, JSON.stringify(packagejson, null, 2), (error) => {
            if (error) {
                console.log("An error has occurred ", error);
                return;
            }
        });
        // create gitignore
        if (!fs_1.default.existsSync(`./${name}/.gitignore`)) {
            fs_1.default.appendFile(`./${name}/.gitignore`, "/node_modules", function (err) {
                if (err)
                    throw err;
            });
        }
        console.log(chalk_1.default.greenBright("cargando dependencias..."));
        // add dependecis
        child_process_1.exec(`cd ./${name} && npm install express cors mongoose dotenv && npm install nodemon --save-dev`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            console.log(chalk_1.default.greenBright("Proyecto creado correctamente"));
        });
    }
}
function contentTsConfig() {
    return `{
    "compilerOptions": {
        /* Visit https://aka.ms/tsconfig.json to read more about this file */

        /* Basic Options */
        // "incremental": true,                         /* Enable incremental compilation */
        "target": "es6",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
        "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
        // "lib": [],                                   /* Specify library files to be included in the compilation. */
        // "allowJs": true,                             /* Allow javascript files to be compiled. */
        // "checkJs": true,                             /* Report errors in .js files. */
        // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
        // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
        // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
        // "sourceMap": true,                           /* Generates corresponding '.map' file. */
        // "outFile": "./",                             /* Concatenate and emit output to single file. */
        "outDir": "./build",                              /* Redirect output structure to the directory. */
        // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
        // "composite": true,                           /* Enable project compilation */
        // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
        // "removeComments": true,                      /* Do not emit comments to output. */
        // "noEmit": true,                              /* Do not emit outputs. */
        // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
        // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
        // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

        /* Strict Type-Checking Options */
        "strict": true,                                 /* Enable all strict type-checking options. */
        // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
        // "strictNullChecks": true,                    /* Enable strict null checks. */
        // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
        // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
        // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
        // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
        // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

        /* Additional Checks */
        // "noUnusedLocals": true,                      /* Report errors on unused locals. */
        // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
        // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
        // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
        // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
        // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

        /* Module Resolution Options */
        // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
        // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
        // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
        // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
        // "typeRoots": [],                             /* List of folders to include type definitions from. */
        // "types": [],                                 /* Type declaration files to be included in compilation. */
        // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
        "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
        // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
        // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

        /* Source Map Options */
        // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
        // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
        // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
        // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

        /* Experimental Options */
        // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
        // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

        /* Advanced Options */
        "skipLibCheck": true,                           /* Skip type checking of declaration files. */
        "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
    }
}`;
}
