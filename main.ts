// One Line, One Laugh: Roast Your Fridge
// Entry for https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
// Writes a single original roast line to /output/entry.txt.
//
// The roast targets one specific, recognisable detail: the "smart" fridge
// touchscreen — its recipes nobody cooks, its calendar nobody checks, and
// its camera that sees everything. The twist lands in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My fridge has a touchscreen full of recipes I'll never cook, a calendar I'll never check, and a camera that films me eating ice cream at 2 a.m. — it's not smart, it's a witness.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
