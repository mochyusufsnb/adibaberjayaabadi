import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { cultivationArea, totalCultivationArea, totalOutsideMalang } from "@/data/company";

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return name === "test" ? [] : sourceFiles(p);
    return /\.(tsx?|css|json)$/.test(name) ? [p] : [];
  });
}

describe("company data", () => {
  it("Malang Regency cultivation area is 360 ha", () => {
    expect(cultivationArea.malangRegency).toBe(360);
  });

  it("cultivation area outside Malang totals 250 ha and overall 610 ha", () => {
    expect(totalOutsideMalang).toBe(250);
    expect(totalCultivationArea).toBe(610);
  });

  it("never includes the incorrect website or contact details from the profile", () => {
    const banned = [/niagaglobal/i, /812-3746-8797/, /896-7882-1412/, /sumber niaga/i];
    for (const file of sourceFiles(join(process.cwd(), "src"))) {
      const text = readFileSync(file, "utf8");
      for (const re of banned) expect(text, `${file} contains ${re}`).not.toMatch(re);
    }
  });
});
