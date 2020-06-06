# Informacion con relacion a curso de CRUD
Todo el codigo escrito para este CRUD es obtenido del curso https://www.youtube.com/watch?v=o9LCKgRPka4&list=PLo5lAe9kQrwqUEXK7oQbzv63KsdODzuAy&index=3 si se quiere seguir el curso por medio de este se desarrollo o desarrolla esta aplicacion.

Para iniciar un proyecto nuevo rapido se utiliza ```npm init -y```

## Informacion de dependencias
 - express: Este modulo es un framework que se utiliza para crear un servidor
 - connect-flash: Este modulo ayuda para mandar un mensaje entre paginas (nos ayuda en la comunicacion entre paginas).
 - bcrypt: Este es un modulo de cifrado que nos ayudara a cifrar informacion como lo es la clave de los usuarios.
 - express-handlebars: Este es un motor de plantilla la cual ayuda a construir paginas HTML de forma rapida y simple.
 - express-session: Este nos ayudara informacion en la memoria del servidor (mayormente para mantener el usuario ya logueado).
 - method-override: Este nos ayudara para realizar peticiones como DEL ademas del GET y POST.
 - mongoose: Este modulo ayuda a conectarnos con la base de datos.
 - passport: Es un modulo que nos ayudara a autentificar el usuario, es mas precisamente para descifrar la password del usuario.
 - passport-local: Este modulo nos ayuda a indicar en passport tiene una base de datos local.

## Dev-dependencies: dependencias no necesarias para el servicio.
 - dotenv: Este modulo nos ayuda para leer archivos de tipo .env que son variables de entorno.
 - nodemon: Este modulo nos ayuda en la parte de que constante mente se refresque y se reinicie el servidor despues de un cambio.
 - handlebars: este nos ayuda a que se corrija los errores de express-handlebars.
 - npm-check-updates: Este nos ayuda a verificar si existe una actualizacion o un nuevo modulo.

 ### Dependencia propia
 - colors: esta dependencia solo nos ayuda para darle color al texto que se muestre por consola de una forma facil.

## Estructura del proyecto
 - node_modules: en esta carpeta se tiene todo el codigo de las dependencias y dependecias de desarrollo (modulos no necesarios).
 - package.json: archivo que tiene informacion del proyecto desde el nombre hasta las dependecias y dependecias de desarrollo asi mismo tambien atajos para iniciar el servidor.
 - package-lock.json: este archivo contiene informacion con relacion a las dependencias y dependencias de desarrollo como version y configuracion.
 - .env: arvhivo que posee todas las variables de entorno del proyecto.
 - .gitignore: archivo git para ignorar ya sea carpetas o archivos del proyecto para no compartir.
 - README.md: Este mismo archivo que esta leyendo. Es el archivo en donde se documentara informacion de entrada sobre el codigo.
 - src: carpeta principal en donde se encuentra todo el codigo propio.

### En src:
 - index.js: archivo principal para iniciar el servidor.
 - server.js: archivo que contiene el codigo base del servidor (codigo de express).
 - database.js: archivo que contiene la coneccion con la base de datos.
 - config: carpeta en donde se colocara la configuracion para nuestros modulos.
 - helpers: funciones que nos ayudara con el helpers.
 - models: modelos (schemas) para la base de datos.
 - public: carpeta con archivos publicos.
 - routes: son las rutas por las que se recibira las peticiones por parte del cliente.
 - views: carpeta en donde se guardaran los archivos del handlebars.