import fs from "fs";

export class CsvReader {
  data: string[][] = [];
  constructor(public fileName: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
