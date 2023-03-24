# Typescript Football Data Analysis

This TS app

## Table of Contents

- [Packages Used](#packages-used)
- [Executing App](#executing-app)
- [Folder Structure](#folder-structure)
- [Challenge and Solution](#challenge-and-solution)
- [Functions](#functions)
- [Deployment](#deployment)

## Packages Used

## Executing App

1. npm install -g typescript ts-node // When installed, TS does not show up on package.json
   1. tsc -v // to check if TS is installed
2. npm init -y // Creates node.js project
3. Create build folder, src folder, add index.ts file inside src folder
4. On git bash, enter:
   1. npm nodemon concurrently // nodemon for automatically running node
      // concurrently for running TSC and node at the same time
   2. tsc --init // creates tsconfig.json file (this should be in root dir)
5. On tsconfig.json file, add (or uncomment) the lines
<!-- "rootDir": "./src",         // tells TSC this is the root (source code) dir
"outDir": "./build",        // tells TSC this is the compiled code dir -->
6. Package.json Scripts - write the following script
<!-- "scripts": {
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:*"
}, -->
7. On git bash:
   1. npm run start:build // or “tsc -w”
      1. You need to build js app first before running npm start; node js tries to run “start:run” before index.js is finished being created
   1. npm start // runs every npm start:<pattern> scripts

## Folder Structure

Sort (Root Directory)

- build
  - the compiled js files
- ## src

## Challenge and Solution

## Functions
