<h1 align="center">
🌐 MERN
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

## clone or download
```terminal
$ git clone https://github.com/arjunpola/nasscom-mern-web-app
$ npm i
```

## project structure
```terminal
package.json
controller/
   package.json
   .env (to create .env, check [prepare your secret session])
view/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites
- [Node](https://nodejs.org/en/download/) ^20.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

## Project ROOT usage(PORT: 3000 & PORT: 3001)
```terminal
$ npm i      // installs both frontend and backend dependencies
$ npm start  // concurrently starts frontend and backend in respective ports locally
```

## Client-side usage(PORT: 3000)
```terminal
$ cd view  // go to client folder
$ npm i    // npm install packages
$ npm run  // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 3001)

### Start

```terminal
$ npm i     // npm install packages
$ npm start // runs backend locally
```

## Standard

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Email Me: nagarjun@nasscomfoundation.org

### License
[MIT](https://github.com/arjunpola/nasscom-mern-web-app/blob/master/LICENSE)