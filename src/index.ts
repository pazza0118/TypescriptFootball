// import { MatchReader } from "./inheritance/MatchReader";
import { MatchReader } from "./MatchReader";
import { CsvReader } from "./CsvReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reporters/ConsoleReport";
import { HtmlReport } from "./reporters/HtmlReport";

// const csvReader = new CsvReader("football.csv");
// const matchReader = new MatchReader(csvReader);
const matchReader = MatchReader.dataFromCsvReader("football.csv")
matchReader.load();

// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary = Summary.winReportConsoleFormat("Man United")
summary.buildAndPrintReport(matchReader.matches);
