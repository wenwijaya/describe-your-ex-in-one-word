// Describe Your Ex in One Word — entry: "Ghosted"
//
// One word. No explanation, no apology, no closure —
// just like the ex it describes.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate: entry.txt must be UTF-8, 1-111 chars, not only whitespace.
// "Ghosted" is 7 chars, a single word, no trailing newline needed.
const WORD = "Ghosted";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(`Wrote one-word verdict to /output/entry.txt: ${WORD}`);
