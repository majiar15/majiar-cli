"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.createModel = exports.createRoute = exports.createController = void 0;
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
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
function createProject(name, type) {
    if (!fs_1.default.existsSync(`./${name}`)) {
        fs_1.default.mkdirSync(`./${name}`);
        if (type) {
            fs_1.default.appendFile(`./models/${name}Model.ts`, contentModel(name, true), function (err) {
                if (err)
                    throw err;
                console.log('modelo creado correctamente');
            });
        }
        else {
            // fs.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
            //     if (err) throw err;
            //     console.log('modelo creado correctamente');
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
exports.createProject = createProject;
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
function contentServer(type = false) {
    if (!type) {
        return `require('dotenv').config();
import express from "express";
const app = express();
import userRouter from './routes/user';
import mongoose from "mongoose";
const mongoDB = process.env.MONGO_URI;
//configuracion de puerto
app.set('port', process.env.PORT || 3000);
// configuracion de base de datos
mongoose.set('useFindAndModify',false);
mongoose.createConnection
mongoose.connect(mongoDB || '',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})
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
        mongoose.set('useFindAndModify',false);
        mongoose.createConnection
        mongoose.connect(mongoUri || '',{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology:true
        })
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
            console.log("server listenig in port "+this.app.get('port'))
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
function contentNewProject(name, type = false) {
    if (type) {
    }
    else {
        console.log('creando projecto...');
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
        // add dependecis
        child_process_1.exec(`cd ./${name} && npm install express mongoose dotenv && npm install nodemon --save-dev`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            console.log("Proyecto creado correctamente");
        });
    }
}
