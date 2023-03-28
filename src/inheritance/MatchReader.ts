import fs from "fs";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";
import { CsvReader } from "./CsvReader";

// MatchData is [date, homeTeam, awayTeam, homeScore, awayScore, teamWon, referree]
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvReader<MatchData> {
  constructor(public fileName: string) {
    super();
  }
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

// const matchReader = new MatchReader("match.csv")
// const movieReader = new MovieReader("movie.csv")
// matchReader.read()
// movieReader.read()
