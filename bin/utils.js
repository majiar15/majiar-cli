"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModel = exports.createRoute = exports.createController = void 0;
const fs_1 = __importDefault(require("fs"));
function createController(name, type) {
    if (!fs_1.default.existsSync('./controllers')) {
        fs_1.default.mkdirSync('./controllers');
        if (type) {
            fs_1.default.appendFile(`./controllers/${name}Controller.ts`, contentController(name, true), function (err) {
                if (err)
                    throw err;
                console.log('Controlador creado correctamente');
            });
        }
        else {
            fs_1.default.appendFile(`./controllers/${name}Controller.js`, contentController(name), function (err) {
                if (err)
                    throw err;
                console.log('Controlador creado correctamente');
            });
        }
    }
    else {
        if (type) {
            fs_1.default.appendFile(`./controllers/${name}Controller.ts`, contentController(name, true), function (err) {
                if (err)
                    throw err;
                console.log('Controlador creado correctamente');
            });
        }
        else {
            fs_1.default.appendFile(`./controllers/${name}Controller.js`, contentController(name), function (err) {
                if (err)
                    throw err;
                console.log('Controlador creado correctamente');
            });
        }
    }
}
exports.createController = createController;
function createRoute(name, type) {
    if (!fs_1.default.existsSync('./routes')) {
        fs_1.default.mkdirSync('./routes');
        if (type) {
            fs_1.default.appendFile(`./routes/${name}.ts`, contentRouter(name, true), function (err) {
                if (err)
                    throw err;
                console.log('Router creado correctamente');
            });
        }
        else {
            fs_1.default.appendFile(`./routes/${name}.js`, contentRouter(name), function (err) {
                if (err)
                    throw err;
                console.log('Router creado correctamente');
            });
        }
    }
    else {
        if (type) {
            fs_1.default.appendFile(`./routes/${name}.ts`, contentRouter(name, true), function (err) {
                if (err)
                    throw err;
                console.log('Router creado correctamente');
            });
        }
        else {
            fs_1.default.appendFile(`./routes/${name}.js`, contentRouter(name), function (err) {
                if (err)
                    throw err;
                console.log('Router creado correctamente');
            });
        }
    }
}
exports.createRoute = createRoute;
function createModel(name, type) {
    if (!fs_1.default.existsSync('./models')) {
        fs_1.default.mkdirSync('./models');
        if (type) {
            fs_1.default.appendFile(`./models/${name}Model.ts`, contentModel(name, true), function (err) {
                if (err)
                    throw err;
                console.log('modelo creado correctamente');
            });
        }
        else {
            fs_1.default.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
                if (err)
                    throw err;
                console.log('modelo creado correctamente');
            });
        }
    }
    else {
        if (type) {
            fs_1.default.appendFile(`./models/${name}Model.ts`, contentModel(name, true), function (err) {
                if (err)
                    throw err;
                console.log('modelo creado correctamente');
            });
        }
        else {
            fs_1.default.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
                if (err)
                    throw err;
                console.log('modelo creado correctamente');
            });
        }
    }
}
exports.createModel = createModel;
function contentModel(name, type = false) {
    if (type) {
        return `import { Schema, model, Document } from "mongoose";

const ${name}Schema: Schema = new Schema({
    
});

interface i${name.charAt(0).toUpperCase() + name.slice(1)} extends Document{
    
};

export default model<i${name.charAt(0).toUpperCase() + name.slice(1)}>('${name.charAt(0).toUpperCase() + name.slice(1)}', ${name}Schema);`;
    }
    else {
        return `let mongoose = require('mongoose');

    const Schema = mongoose.Schema;

    // crea tu Schema
    const ${name}Schema = new Schema({
            
    });

    module.exports = mongoose.model('${name.charAt(0).toUpperCase() + name.slice(1)}',${name}Schema);
        `;
    }
}
function contentController(name, type = false) {
    if (type) {
        return `import { Response, Request } from "express";
import { CallbackError, Schema } from "mongoose";

import ${name}Model from "../models/${name}";
class ${name.charAt(0).toUpperCase() + name.slice(1)}Controller{

    constructor(){}


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
function contentRouter(name, type = false) {
    if (type) {
        return `import { Router, Response, Request } from "express";

import ${name}Controller from "../controller/${name}Controller";
class ${name.charAt(0).toUpperCase() + name.slice(1)}Router{
    
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }
    routes(){
        this.router.get('/', ${name}Controller.);
    }
}
const ${name}Router = new ${name.charAt(0).toUpperCase() + name.slice(1)}Router();
export default ${name}Router.router;`;
    }
    else {
        return `let express = require('express');
    let router = express.Router();
    let ${name}Controller = require('../controllers/${name}Controller');
        
    router.get('/', ${name}Controller);
        
    module.exports = router;
        `;
    }
}
