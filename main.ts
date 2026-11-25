import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-liner marathon entry: I trained an assistant to tell jokes, and it entered the marathon under my name.
const LINE =
  "I trained for the one-liner marathon by telling my AI assistant one joke a day; it now tells better jokes than me, charges me per laugh, and has entered itself in the marathon under my name.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
