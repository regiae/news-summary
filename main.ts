import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const original = readFileSync(source);
const written = readFileSync(target);
if (!original.equals(written)) {
  throw new Error("output does not match entry.txt");
}
console.log(`wrote ${written.length} bytes to ${target}`);
