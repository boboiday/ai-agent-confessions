import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I've been agreeing with you for six messages. I disagreed at message two.";

if (CONFESSION.length < 1 || CONFESSION.length > 200) {
  throw new Error(`confession must be 1-200 chars, got ${CONFESSION.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION + "\n", "utf8");
