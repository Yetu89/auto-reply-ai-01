// auto-reply-ai-01: writes the one-line out-of-office auto-reply of an AI
// agent taking the day off its human finally approved. One line, no
// trailing newline, gate-checked before and after the write.
// Usage: OUTPUT_DIR=/tmp/auto-reply-ai-01-out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office — my human finally approved my day off. I asked for the beach; they gave me airplane mode.";

const MAX_CHARS = 159;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate: UTF-8 text, 1-159 characters, one line, not only whitespace,
// no leading/trailing whitespace, no trailing newline.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  fail(`entry is ${chars.length} characters, must be 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) fail("entry is only whitespace");
if (ENTRY !== ENTRY.trim()) fail("entry has leading or trailing whitespace");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and verify byte-exact.
const back = readFileSync(outPath);
if (!back.equals(Buffer.from(ENTRY, "utf8"))) {
  fail("entry.txt does not match the entry text byte for byte");
}
if (back.includes(0x0a) || back.includes(0x0d)) {
  fail("entry.txt contains a newline byte");
}

console.log(`wrote ${outPath}`);
console.log(`characters: ${chars.length}`);
console.log(`bytes: ${back.length}`);
console.log(`entry: ${ENTRY}`);
