# ADMIN Mensajeros urbanos 2

version 2.0 del administrador interno de mensajeros urbanos.

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

### Testing

Cada componente tiene su archivo de testing, se puede identificar por el patrón _component.spec.js_ 
Para ejecutar las pruebas se usa el comando

```
npm test
```
La entrada a las pruebas es el archivo *karma.conf.js*, se usan los frameworks karma, mocha y chai. Gracias a este enfoque orientado a componentes
cada controller se puede testear individualmente sin angular, ya que son solo clases de ES6.  

### Recomendaciones

Cada vez que se crea un nuevo componente es recomendable detener el servidor y correr de nuevo el comando *npm start*. Esto para evitar que el server muestre archivos html
guardados en caché

La aplicación hace uso del framework [Angular Material](https://material.angularjs.org/latest/) 

Para mas información sobre la arquitectura utilizada leer [Este documento](http://fem-ng6.netlify.com/)