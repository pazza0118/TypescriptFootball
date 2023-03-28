"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvReader {
    constructor() {
        this.data = [];
    }
    // converts csv data into usable form
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: "utf8" })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map(this.mapRow);
    }
}
exports.CsvReader = CsvReader;
