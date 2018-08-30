# Cursó de graphql

_Repositorio del curso sobre **graphql**, el repositorio consta de tags que permite identificar puntos clave sobre el curos._

## Comenzando 🚀

_Estas son intrucciones que nos permitirán obtener una copia del proyecto y su funcionamiento en tu máquina local para própositos de desarrollo y pruebas._

Sigue los pasos que a continuación se indican para poder desplegar el proyecto.

### Pre-requisitos 📋

Para poder iniciar el proyecto necesitamos contar con una instalación.

- [NodeJS](https://nodejs.org/en/download/): es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación ECMAScript,

- [Yarn](https://yarnpkg.com/en/docs/install#debian-stable): Yarn es un nuevo tipo de instalador de paquetes JavaScript y gestor de dependencias lanzado por Facebook.

- [SqlLite](https://www.sqlite.org/download.html): SQLite es un sistema de gestión de bases de datos relacional compatible con ACID, contenida en una relativamente pequeña ​ biblioteca escrita en C

> 📝 Nota: Se recomienda usar las verciones **LTS** de **nodejs**.

Al contar con los requisitos solicitados se procederá a la instalación del proyecto realizado durante el cursó.

### Instalación 🔧

#### Paso 1

Clonar el repositorio.

```bash
    $ git clone git@github.com:OrcaPracticas/GQL.git
```
Al terminar de clonar el repositorio tendremos una carpeta llamada **GQL**.

#### Paso 2

Colocarnos en la carpeta que nos genero la clonación del repositorio.

```bash
    $ cd ./GQL
```

#### Paso 3

Al estar en el directorio procederemos a ejecutar la instalación de las dependencias.

```
    $ yarn install
```
también podemos utilizar el comando 

```
    $ npm i
```

> 📝 Nota: Realmente **yarn** puede ser opcional, pero seria bueno que lo revisaras en el caso de que no lo conoscas.

al terminar la instalción de las dependencias procederemos a correr la aplicación.

#### Paso 4

Antes de poder correr la aplicación es necesario generar la base de datos para esto ejecutaremos le comando siguiente.

```bash
    $ yarn db:migrate
```
o 
```bash
    $ npm run db:migrate
```

el comando anterior nos permite crear las tablas para la Base de Datos.

#### Paso 5

Llenar las tablas con data **Falsa** para esto ejecutaremos el comando siguiente.

```bash
    $ yarn db:seed
```
o 
```bash
    $ npm run db:seed
```

Hasta este punto contamos con nuestra base de datos y sus correspondientes **Tablas** cargadas con data **Falsa**

#### Paso 6

Procederemos a levantar nuestro servidor de **graphql** para esto ejecutaremos el comando siguiente.

```bash
    $ yarn start:gql
```
o

```bash
    $ npm start:gql
``` 

> 📝 Nota: El servidor se ejecuta en la url http://localhost:8080/graphql.

podremos ejecutar una pureba en nuestro servidor para verificar que todo corre de manera correcta podemos colocar el siguiente comando.

```JavaScript
{
    cursos {
        id
        titulo
        descripcion
        profesor {
            id
            nombre
        }
        comentarios {
            nombre
            cuerpo
        }
    }
}
```
pulsamo el boton **play** esto ya nos tiene que estar lanzando resultados.

#### Paso 7

Procederemos a levanta al **App** que se conectara al servidor de **GQL**, para esto ejecutaremos el comando siguiente.


```bash
    $ yarn start:app
```
o

```bash
    $ npm run start:app
```
> 📝 Nota: El servidor se ejecuta en la url http://localhost:3000,

Al termino de los pasos anteriores tendremos el proyecto en ejecución.

## Deployment 📦

Es importante mencionar que el proyecto cuenta con **tags** que facilita el movimiento entre las etapas del desarrollo realizado durante el curso.

* **[Configuración inicial](https://github.com/OrcaPracticas/GQL/tree/Inicial)**
* **[Creacion del Schema](https://github.com/OrcaPracticas/GQL/tree/Schema)**
* **[Creacion de Resolvers](https://github.com/OrcaPracticas/GQL/tree/Resolvers)**
* **[Creacion de Mocks Dimanicos](https://github.com/OrcaPracticas/GQL/tree/Mocks)**
* **[Integracion de base de datos](https://github.com/OrcaPracticas/GQL/tree/BD)**
* **[Modularización](https://github.com/OrcaPracticas/GQL/tree/Modularizacion)**
* **[Busqueda y manejo de errores](https://github.com/OrcaPracticas/GQL/tree/Busqueda)**
* **[Integración con React](https://github.com/OrcaPracticas/GQL/tree/React)**
* **[Integración con apollo](https://github.com/OrcaPracticas/GQL/tree/Apollo)**

Cada una de las faces correspondientes al desarrollo generado durante el cursó, cada fase cuenta con su **Release** el cual tiene realción con un **PullRequest** que a su vez tiene relación con un **Milestones** el cuales tienen realación con **issues** y estos tienen relacionados los **commits** generados.



## Construido con 🛠️

Esta practica se construyo utilizando las siguientes tecnologias.

[![Body-parser](https://img.shields.io/badge/dependencies-Body--parser-8000ff.svg)](https://www.npmjs.com/package/body-parser)
[![Casual](https://img.shields.io/badge/dependencies-Casual-8000ff.svg)](https://www.npmjs.com/package/casual)
[![Knex](https://img.shields.io/badge/dependencies-Knex-8000ff.svg)](https://www.npmjs.com/package/knex)
[![Objection](https://img.shields.io/badge/dependencies-Objection-8000ff.svg)](https://www.npmjs.com/package/objection)
[![Sqlite3](https://img.shields.io/badge/dependencies-Sqlite3-8000ff.svg)](https://www.npmjs.com/package/sqlite3)
[![Apollo-Boost](https://img.shields.io/badge/dependencies-Apollo--Boost-blue.svg)](https://www.npmjs.com/package/apollo-boost)
[![Apollo-Server-Express](https://img.shields.io/badge/dependencies-Apollo--Server--Express-blue.svg)](https://www.npmjs.com/package/apollo-server-express)
[![React-Apollo](https://img.shields.io/badge/dependencies-React--Apollo-blue.svg)](https://www.npmjs.com/package/react-apollo)
[![React](https://img.shields.io/badge/dependencies-React-blue.svg)](https://www.npmjs.com/package/react)
[![Graphql](https://img.shields.io/badge/dependencies-Graphql-ff69b4.svg)](https://www.npmjs.com/package/graphql)
[![Express](https://img.shields.io/badge/dependencies-Express-009933.svg)](https://www.npmjs.com/package/express)

## Autores ✒️

* **[Jorge Mendez Ortega](https://github.com/OrcaPracticas)**

## Licencia 📄

Este proyecto está bajo la Licencia MIT mira el archivo [LICENSE.md](LICENSE.md) para detalles.

⌨️ con ❤️ por [Konami12](https://github.com/konami12) 😊








