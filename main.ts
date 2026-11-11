import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

await mkdir(outputDir, { recursive: true });
await copyFile(source, outputFile);

const written = await readFile(outputFile);
const original = await readFile(source);
if (!written.equals(original)) {
  throw new Error(`output mismatch: ${outputFile} differs from ${source}`);
}
console.log(`wrote ${written.length} bytes to ${outputFile}`);
