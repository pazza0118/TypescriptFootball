import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const reportContent = `<div>
    <h1>Match Report</h1>
    <p>${report}</p> 
    </div>`;
    fs.writeFileSync("report.html", reportContent);
  }
}
