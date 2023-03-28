// import { MatchReader } from "./inheritance/MatchReader";
import { MatchReader } from "./MatchReader";
import { CsvReader } from "./CsvReader";
import { MatchResult } from "./MatchResult";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const csvReader = new CsvReader("football.csv");
const matchReader = new MatchReader(csvReader);
matchReader.load();

const winsAnalysis = new WinsAnalysis("Man United");
winsAnalysis.run(matchReader.matches);
// const summary = new Summary(winsAnalysis);

// console.log(`Man United won ${manUnitedWins} times`);

///////////////////////////////////////////////////////////
