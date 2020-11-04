# TS-Server

Building a Typescript Server with Express

### Project Configuration

Create file:

```
mkdir ts-server && cd ts-server
```

Init package.json

```
npm init -y
```

Init tsconfig.json

```
tsc --init
```

Create src & build folder

```
mkdir src
mkdir build
```

Create index.ts

```
touch src/index.ts
```

Install dependencies

```
npm i nodemon concurrently
```

```
npm i express @types/express
```

Setup rootDir & outDir in tsconfig.json

```
  "outDir": "./build",
  "rootDir": "./src",
```

Configure scripts in package.json

```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

#### TIP

First time you will run npm start it may crash.. Just hit ` control + c` and run `npm start` again.

