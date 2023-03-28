import fs from "fs";

export abstract class CsvReader<T> {
  data: T[] = [];

  abstract fileName: string;
  abstract mapRow(row: string[]): T;

  // converts csv data into usable form
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
