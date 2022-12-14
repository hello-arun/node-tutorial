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

# to skip prompts
npm init --yes
```

## Installing/uninstalling external packages

Package is a resuable code that can be included in out project. You can download varioud packages on https://www.npmjs.com/ . Just search the package over there. For example to install lodash

```bash
npm i lodash
# or
npm install lodash
# to uninstall
npm uninstall lodash
```
When you install/uninstall a package the dependencies are updated in the package.json and package-lock.json files.

To install dependencies from the package.json as
```bash
cd PROJECT_DIR # You must cd to the same dir where package.json is
npm install 
# This will automatically setup dev env for you
```


## Package version

Package have following version naming scenerio `major.minor.patch` 

* patch : Some bug fixes  
* minor : Minor update, add new functionality and might * depricate some old functionalities
* major : Major update pushed out. Some breakable changes

```node
^major.minor.patch => major.x.x  // Update minor and patch to latest 

~major.minor.patch => major.minor.x  // only update patch

major.minor.patch => major.minor.patch // Strictly use specified version
```





## Ref

* https://youtu.be/RLtyhwFtXQA
