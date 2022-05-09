# Lista de Regalos para Hack Job Barcelona

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Solución para  el componente lista de regalos 

Esta es una solución para el componente usando Angular.

## Vista General

### El reto

Task 1 -> Crear un componente con un título, una descripción y un grupo de regalos que contenga la siguiente información: Título, Descripción, Tags del grupo

Task 2 -> Asegurarse que el componente sea responsive: Adopta un modo de scroll horizontal para PC, Adopta modo lista para Móvil y Tablet

#### Subtareas

Al clicar en cada grupo de regalos permite ejecutar una acción (por ahora indefinida).

Utilizar un sistema lo más atómico posible

Comentar el desarrollo de este componente

### Capturas de pantalla

![Desktop](./screenshot/ScreenshotDesktopListaRegalos.png)
![Tablet](./screenshot/ScreenshotTabletListaRegalos.png)
![Mobile](./screenshot/ScreenshotMobileListaRegalos.png)

### Enlaces

- Solution URL: [GitHub](https://github.com/ManuelFernandezEsteban/lista-regalos-job.git)

## El Proceso

Partiendo de no conocer la librería StoryBook para documentar el componente, lo primero ha sido hacer parte del tutorial disponible en https://storybook.js.org/tutorials/. 
Para tener un diseño lo mas atómico posible dividi el componente en piezas de la siguiente manera, de abajo hacia arriba, de esta forma tambien seguía
la metodología CDD (Component-Driven-Development):

#### Componente título

Se encarga de mostrar una cadena de texto en el componente que recibe como parametro, en este caso el título mediante una etiqueta H1

#### Componente descripción

Se encarga de mostrar una cadena de texto en el componente que recibe como parametro, en este caso la descripción mediante una etiqueta p

#### Componente tag

Se encarga de mostrar un tag individual del grupo, mediante un div y un span, la cadena a mostrar se pasa como parametro.

#### Tag List

Este componente se encarga de agrupar los components tag en 



### Built with

- Angular
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

## Author

- linkedIn - [LinkedIn](www.linkedin.com/in/manuel-fernandez-esteban)
