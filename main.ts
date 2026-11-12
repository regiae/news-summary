// main.ts — entrypoint for the news-summary entry.
//
// The summary itself lives in entry.txt next to this file. This program
// reads that file and writes it unchanged into the output directory, so
// the graded artifact is exactly the text we wrote, byte for byte.
// Nothing here depends on the time, the network, or any other input,
// so running it twice always produces identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourceFile = join(scriptDir, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

const bytes = readFileSync(sourceFile);
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, bytes);
