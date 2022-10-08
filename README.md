# Node.js

## How to download

Go to https://nodejs.org/en/download/ and download appropriate version based on your platform

### Windows
https://nodejs.org/dist/v16.17.1/node-v16.17.1-x64.msi

### Linux
https://nodejs.org/dist/v16.17.1/node-v16.17.1-linux-x64.tar.xz


## How to run

After installing node you can run any file via

```powershell
node filename.js
```

## Package.json

A file that hold metadata for project. To create this file use 

```
npm init

# it will ask for various promt, just answer those.
```

## Installing external packages

Package is a resuable code that can be included in out project. You can download varioud packages on https://www.npmjs.com/ . Just search the package over there. For example to install lodash

```bash
npm i lodash
# or
npm install lodash
```

When you install a package the dependency is appended to the package.json file.
