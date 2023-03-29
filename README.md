# Typescript Football Data Analysis

This TS app analyzes football match data from a csv file and reports the wins of a team in html or console format.

## Table of Contents

- [Packages Used](#packages-used)
- [Executing App](#executing-app)
- [Code Explanation](#code-explanation)
  - [Starter File](#starter-file)
  - [Class Files](#class-files)
  - [Helper Files](#helper-files)
  - [Old Files](#old-files)

- [Challenge and Solution](#challenge-and-solution)

## Packages Used

- fs // npm i @types/node
- concurrently
- nodemon

## Executing App

1. npm install -g typescript ts-node 
   1. tsc -v // to check if TS is already installed
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
   1. npm start // runs every npm start:pattern scripts

## Code Explanation 
The app has several classes which are used to extract, convert, analyze, and generate reports based on csv file and the name of team
that is being analyzed.

All these classes are instantiated (via static methods) on index.ts 

### Starter File
- index.ts : Calls MatchReader's & Summary's static methods to start the app

### Class Files
- CsvReader.ts : Extracts data from csv file
- MatchReader.ts : Converts extracted data to data types outlined in MatchData.ts
- Summary.ts : A parent class referencing any class meeting the interface Analyzer and OutputTarget (so WinsAnalysis.ts, ConsoleReport.ts, HtmlReport.ts). This is the class where user chooses the analysis and report format.
- WinsAnalysis.ts : Takes converted data & team name, analyze the number of wins
- ConsoleReport.ts : Gives console report given report content
- HtmlReport.ts : Gives html report given report content

### Helper Files
- MatchData.ts : Defines tuple data type MatchData, used for checking the data extracted is appropriate
- MatchResult.ts : Enum defining the relationship elements within the data
- utils.ts : Contains methods for data conversion
  
### Old Files
There are old files under inheritance directory which were there when the code used inheritance (abstract class) based approach instead of Composition (interface) approach the app currently uses. Functionally, they give the same result as their Composition counterpart files.

- CsvReader.ts : No longer used, previously used as parent abstract class supplying method to convert the data into usable format given csv file 
- MatchReader.ts : No longer used, previously used as child class for converting the data into usable format given csv file 

### Functions
- fs.readFileSync("football.csv", { encoding: "utf8" });	
  - returns string of data given file path; tells fs to expect text content encoded w/ // utf8. If no encoding is given, then it returns buffer (raw data)
- fs.writeFileSync("report.html", reportContent);
  - Creates a file w/ given name and content


## Challenge and Solution
Challenge: Abundance of duplicate or similar looking code
Solution: Implementation of composition based approach (interface) with classes

- Instead of hard coded methods, created classes for data extraction & conversion & analysis so we can easily add/remove class instantiation instead of whole chunks of code.
- Made Summary class to reference analysis & report classes, so if we have more than one analysis or reporting methods, we can always use the Summary class to delegate the task to those Analysis & Report classes. 

The previous approach with abstract classes would have required creating additional parent classes to handle WinAnalysis,averageScoreAnalysis, ConsoleReport, and HtmlReport classes. 


