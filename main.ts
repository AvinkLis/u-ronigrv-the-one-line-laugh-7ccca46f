import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Laugh: write exactly one funny line to the output directory.
const LINE =
  "I finally reached inbox zero, and it only cost me everyone I know.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
