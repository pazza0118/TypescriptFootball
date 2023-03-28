"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { MatchReader } from "./inheritance/MatchReader";
const MatchReader_1 = require("./MatchReader");
const CsvReader_1 = require("./CsvReader");
const MatchResult_1 = require("./MatchResult");
// const matchReader = new MatchReader("football.csv");
// matchReader.read();
const csvReader = new CsvReader_1.CsvReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
// console.log(matchReader.data);
console.log(`Man United won ${manUnitedWins} times`);
///////////////////////////////////////////////////////////
// class FootBallStats {
//   wins: number = 0;
//   calculateWins(): number {
//     for (let match of matches) {
//       if (match[1] === this.teamName && match[5] === "H") {
//         this.wins++;
//       } else if (match[2] === this.teamName && match[5] === "A") {
//         this.wins++;
//       }
//     }
//     return this.wins;
//   }
//   reportWins(): void {
//     return console.log(`${this.teamName} won ${this.wins} times`);
//   }
// }
// const stat = new FootBallStats("Man United");
// const stat2 = new FootBallStats("Liverpool");
// stat.calculateWins();
// stat2.calculateWins();
// stat.reportWins();
// stat2.reportWins();
