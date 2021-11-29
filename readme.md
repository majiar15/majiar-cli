# Majiar cli

_esta linea de comandos te ayudara a la productividad al escribir codigo de express js ofreciendo la capacidad de crear proyectos, controladores, rutas, modelos al igual que su contraparte en Typescript_



### Instalación 🔧

_puedes instalar Majiar CLI atravez de npm_

```
npm install -g majiar-cli 
```

_esto permitira instalar de manera global Majiar CLI en su equipo y utilizar los comandos en cualquier parte de su pc_

# Uso

## generando un projecto de express js
```
majiar new-project <nombre>  
```
![New Project](https://raw.githubusercontent.com/majiar15/majiar-cli/master/images/new-project-ts.png)

_este comando creara una estructura basica de un proyecto de express js con un controlador, router y modelo de usuario_

![New Project Javascript](https://raw.githubusercontent.com/majiar15/majiar-cli/master/images/javascript.png)
## generando un projecto de express js usando typescript
```
majiar new-project <nombre> --ts
```
_este comando creara una estructura basica de un proyecto de express js utilizando Typescript con un controlador, router y modelo de usuario_

![New Project Javascript](https://raw.githubusercontent.com/majiar15/majiar-cli/master/images/javascript.png)

## generando controlador
```
majiar g -c <nombre>
```
_este comando creara un controlador con la siguiente estructura listo pra descomentar y darle nombre a la funcion que se exporta_
```js
// crea tus funciones
// exports.Fun = function(req, res) {
// }
        
```
## generando controlador en typescript
```
majiar g -c <nombre> --ts
```
_este comando creara un controlador utilizando typescript clases con la siguiente estructura, ademas de un metodo index_
```ts
import { Response, Request } from "express";
import { CallbackError, Schema } from "mongoose";

import userModel from "../models/userModel";
class UserController{

    constructor(){}
    index(req:Request, res: Response){
        res.status(200).send("userController");
    }

}
const userController:UserController =  new UserController();

export default userController;    
```

## generando modelo de mongodb
```
majiar g -m <nombre>
```

_este comando creara un modelo de mongoose utilizando con la siguiente estructura con una propiedade name_
```ts
let mongoose = require('mongoose');

const Schema = mongoose.Schema;

// crea tu Schema
const userSchema = new Schema({
        name: String
});

module.exports = mongoose.model('User',userSchema); 
```

## generando modelo en typescript
```
majiar g -m <nombre> --ts
```

_este comando creara un modelo de mongoose utilizando typescript y clases con la siguiente estructura ademas de una interfaz para que typescript reconozca las propiedades de su modelo con una propiedade name_
```ts
import { Schema, model, Document } from "mongoose";

const userSchema: Schema = new Schema({
    name: String,
});

interface iUser extends Document{
    name: String;
};

export default model<iUser>('User', userSchema);  
```


## generando router
```
majiar g -r <nombre>
```

_este comando creara un router con la siguiente estructura listo para descomentar el metodo get y llamar el metodo del controlador_
```ts
let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
    
// router.get('/', userController);
    
module.exports = router; 
```

## generando router en typescript
```
majiar g -r <nombre> --ts
```
_este comando creara un router utilizando typescript y clases con la siguiente estructura listo para descomentar el metodo get y llamar el metodo del controlador_
```ts
import { Router, Response, Request } from "express";
import userController from "../controllers/userController";
class UserRouter{
    
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }
    routes(){
        // this.router.get('/', userController);
    }
}
const userRouter = new UserRouter();
export default userRouter.router;
```