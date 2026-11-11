// A working news-summary-01 entry (Node 22, standard library only): the
// summary is the entry.txt beside this file, and the program copies it to
// /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.txt', import.meta.url);
const dest = join(outDir, 'entry.txt');
copyFileSync(src, dest);
// Verify the copy is byte-identical to the source.
if (!readFileSync(src).equals(readFileSync(dest))) {
  throw new Error('entry.txt copy mismatch');
}
