import { MatchResult } from "./MatchResult";

// MatchData is [date, homeTeam, awayTeam, homeScore, awayScore, teamWon, referree]
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
