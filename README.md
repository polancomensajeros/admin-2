# ADMIN Mensajeros urbanos 2

versión 2017-05-18 
Administrador 2 interno de mensajeros urbanos.

## Herramientas

La aplicación esta desarrollada con angular 1.x pero con un enfoque no tradicional, usa una arquitectura orientada a componentes, cada una de las vistas es un componente con su lógica y estilos propios, y componentes hijos de ser necesario.
Los componentes estan en la carpeta : _client/app/components_. 
Cada componente comparte la misma estructura de archivos:

```
component
│   component.controller.js
│   component.directive.js
│   component.html
│   component.js
│   component.scss
│   component.spec.js
____components
```

- _component.controller.js_ : Controlador de componente, clase de ES6
- _component.directive.js_ : Constante de ES6 con los datos de la directiva
- _component.html_ : Template, HTML
- _component.js_ : Declaración del módulo y las rutas
- _component.scss_ : Estilos de componente en SASS
- _component.spec.js_ : Archivo de pruebas
- _components_ : Carpeta con los componentes hijos

## Instalación

requisitos:

- node js
- npm
- gulp
- protractor

Despues de clonar el repositorio se deben instalar todas las dependencias usando el comando:

```
npm install
```

Para correr el servidor local de pruebas se ejecuta el comando

```
npm start
```

## Desarrollo

Para crear un nuevo componente se ejecuta el comando:

```
gulp component --name micomponente
```
Donde _micomponente_ es el nombre que se le va a dar al nuevo componente. Este comando generara dentro de la carpeta _client/app/components_ los archivos del nuevo componente.

Despues de crear el componente se debe registrar en el archivo app.js

```javascript
import {micomponente} from './components/micomponente/micomponente';

angular.module('app', [
  uiRouter,
  ngAnimate,
  ngMaterial,
  home.name,
  shared.name,
  // Registrar el modulo usando su nombre
  micomponente.name
])
```
Si se van a desarrollar servicios compartidos (factories, constants) deben ser registrados en el modulo shared.   

Si un componente tiene componentes hijos con controllers independientes ($mdDialog), se debe crear una carpeta llamada *components* dentro de la carpeta del componente, 
y dentro de esta carpeta crear sub-carpetas para cada uno de los componentes.

### Clases
Las clases generales estan en la ruta : __client/app/classes__
#### PageClass
Cada componente que sea una vista debe heredar de **PageClass**. __loginRequired__ define si la vista necesita o no que el usuario este logueado

### TableClass
Los componentes que sean tablas heredan de **TableClass**, en esta clase estan definidos los metodos para obtener los datos de un endpoint, paginarlos, reordenarlos y filtrarlos. Al instanciarla se debe pasar como parametro el factory que consumira la API
### Testing

#### Unit testing

Cada componente tiene su archivo de testing, se puede identificar por el patrón _component.spec.js_ , 
Para ejecutar las pruebas se usa el comando

```
npm test
```
La entrada a las pruebas es el archivo *karma.conf.js*, se usan los frameworks karma, mocha y chai. Gracias a este enfoque orientado a componentes
cada controller se puede testear individualmente sin angular, ya que son solo clases de ES6.  

#### End to end testing

Las pruebas end to end se encuentran dentro de la carpeta e2e en el root de la aplicación.

```
e2e
│___helpers           // Helper functions
|     variables.js
|     dropdowns.js
|___pages             // App views or pages
|_____loginPage
|       loginPage.js
|_______components
|___specs             // specifications   
|     loginSpec.js
│   conf.js           // Configuracion de protractor
```

Por cada una de las paginas se debe crear un archivo dentro de la carpeta __pages__, y una especificacion dentro de la carpeta __specs__, tambien se pueden testear componentes individuales, para esto se usara la carpeta __components__ Que se encuentra dentro de cada una de las páginas.

Para correr las pruebas es necesario correr el web driver de protractor

```
webdriver-manager start
```

Y en otra terminal ejecutar las pruebas con el comando

```
protractor e2e/conf.js
```

#### Recomendaciones de testing

Las pruebas e2e deben ser usadas para probar la funcionalidad general de la aplicación, por ejemplo validar que el formulario de login valide los errores y permita ingresar a la aplicacion.

Las pruebas unitarias deben ser usadas para probar funciones especificas de los controladores, por ejemplo calculos locales, operaciones sobre arreglos, conexiones de sockets etc

### Express
Se usa el framework *express.js* como proxy para las peticiones a la API.

Las rutas de la aplicacion estan declaradas dentro de la carpeta __server__ en el root de la aplicacion.

Son necesarias las variables de entorno para el correcto funcinamiento de la aplicacion, pueden agregarse en un archivo .env, dentro de la configuracion del servidor o al lanzar el comando npm start

```
CLIENT_ID=578e5be772830_frontmu CLIENT_SECRET=7f8b9f769ecc5a4505569e6e7a4804ec8b49b865 NODE_ENV=development npm start
```

#### Entornos
Se usan dos entornos, development y production
### Offline
La aplicacion funciona offline, cachea archivos de html y js. Es una Progressive web app.
### Recomendaciones generales

Cada vez que se crea un nuevo componente es recomendable detener el servidor y correr de nuevo el comando *npm start*. Esto para evitar que el server muestre archivos html
guardados en caché. 

#### Tips
. Al usar la sintaxis **controllerAs** los eventos de $broadcast deben ser llamados por el $rootScope y no por los $scope locales.

La aplicación hace uso del framework [Angular Material](https://material.angularjs.org/latest/) 

Para mas información sobre la arquitectura utilizada leer [Este documento](http://fem-ng6.netlify.com/)

[Protractor](http://www.protractortest.org/#/)

[Mocha](https://mochajs.org/#getting-started)

Si por alguna razon ocurre un error imposible de solucionar, o una duda que no se pueda resolver, me pueden escribir a mi correo personal


Juan Sebastian Polanco Ramos

s.polanco@mensajerosurbanos.com

jspolancor@gmail.com

Mensajeros urbanos

2017


