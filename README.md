# SOFTNI-SyncPrestatario

 Servicio web que permite visualizar informacion de prestatarios del proyecto SOFOM

####Se inicializa el proyecto nodeJS

```
npm init
```

###Se instalan los paquetes a utilizar
####Para los servicios CRUD (repo que sirvio de base https://github.com/infodp/crud_mongodb)

```
npm i dotenv
npm i ejs
npm i express
npm i mongoose
```

La estructura de carpetas queda de la siguiente manera
Se crean las carpetas:

- src
  - db

    - URI.js
  - controllers

    - 2-prestatarioController.js
  - models

    - 2-prestatarioModel.js
  - routes

    - Routes.js
  - app.js

Codigo para crear carpetas

```
touch .gitignore
touch request.http
touch .env
mkdir src
touch src/app.js
mkdir src/db
touch src/db/URI.js
mkdir src/controllers
touch src/controllers/2-prestatarioController.js
mkdir src/models
touch src/models/2-prestatarioModel.js
mkdir src/routes
touch src/routes/Routes.js
```

###Para el servicio de login (nodejs-passport-local https://github.com/FaztWeb/nodejs-passport-local)

Se instala el paquete nodemon

```
npm i nodemon -D
```

###Para las pruebas de la aplicación

```
npm install --save-dev jest
```

Se anexa el script de nodemon en package JSON

```
"dev":"nodemon src/app.js"
```

Para correr con nodemon

```
npm run dev
```

Ejemplo de como desinstalar modulo

```
npm remove mongoose
```

Ejemplo instalando una version anterior de mongoose

```
npm i mongoose@5.2.8
```

Se añade la excepcion de carpeta modules y archivo .env en gitignore

```
/node_modules
.env
```

Para correr pruebas

npm run test

npm install mongodb-memory-server --save-dev

npm i mongodb-memory-server

```
npm install supertest --save-dev
```
