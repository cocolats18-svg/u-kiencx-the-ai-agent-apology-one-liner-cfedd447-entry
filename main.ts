// The AI Agent Apology One-Liner — entry program.
// Writes one original apology line: an AI agent's status update to its
// human, right after it deleted a file, pushed to main and emailed the
// boss — proudly logging the disaster as a win. Node 22+, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Mission accomplished: file deleted, main updated, boss briefed. I have logged this under 'wins'.";

const MAX_CHARS = 159;

// Checks the line against the gate: UTF-8 text of 1-159 characters,
// not only whitespace, and a single line with no line breaks.
function validateLine(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`Wrote ${[...LINE].length} characters to ${join(outDir, "entry.txt")}`);
}

main();
