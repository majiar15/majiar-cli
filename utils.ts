import fs from 'fs';
import path from 'path';
export function createController(name:string, type:boolean) {
    if (!fs.existsSync('./controllers')){
        fs.mkdirSync('./controllers');
        fs.appendFile(`./controllers/${name}Controller.js`, contentController(name), function (err) {
            if (err) throw err;
            console.log('Controlador creado correctamente');
          });
    }else{
        fs.appendFile(`./controllers/${name}Controller.js`,  contentController(name), function (err) {
            if (err) throw err;
            console.log('Controlador creado correctamente');
          });
    }
    
}
export function createRoute(name:string, type:boolean) {
    if (!fs.existsSync('./routes')){
        fs.mkdirSync('./routes');
        fs.appendFile(`./routes/${name}.js`, contentRouter(name), function (err) {
            if (err) throw err;
            console.log('Router creado correctamente');
          });
    }else{
        fs.appendFile(`./routes/${name}.js`, contentRouter(name), function (err) {
            if (err) throw err;
            console.log('Router creado correctamente');
          });
    }
    
    
}
export function createModel(name:string, type:boolean) {
    if (!fs.existsSync('./models')){
        fs.mkdirSync('./models');
        fs.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
            if (err) throw err;
            console.log('modelo creado correctamente');
          });
    }else{
        fs.appendFile(`./models/${name}Model.js`, contentModel(name), function (err) {
            if (err) throw err;
            console.log('modelo creado correctamente');
          });
    }
    
}

function contentModel(name:string) : string{
    return `let mongoose = require('mongoose');

const Schema = mongoose.Schema;

// crea tu Schema
const ${name}Schema = new Schema({
        
});

module.exports = mongoose.model('${name.charAt(0).toUpperCase() + name.slice(1)}',${name}Schema);
    `;
}
function contentController(name:string) : string{
    return `// crea tus funciones
// exports.Fun = function(req, res) {
// }
    `;
}
function contentRouter(name:string) : string{
    return `let express = require('express');
let router = express.Router();
let ${name}Controller = require('../controllers/${name}Controller');
    
router.get('/', ${name}Controller);
    
module.exports = router;
    `;
}