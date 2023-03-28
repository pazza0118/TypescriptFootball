"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("../utils");
const CsvReader_1 = require("./CsvReader");
class MatchReader extends CsvReader_1.CsvReader {
    constructor(fileName) {
        super();
        this.fileName = fileName;
    }
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
// const matchReader = new MatchReader("match.csv")
// const movieReader = new MovieReader("movie.csv")
// matchReader.read()
// movieReader.read()
