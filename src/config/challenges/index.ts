import { CssChallenges } from "./css";
import { JavaChallenges } from "./java";
import { JavascriptChallenges } from "./javascript";
import { PythonChallenges } from "./python";
import { ReactChallenges } from "./react";
import { TypeScriptChallenges } from "./typescript";

import { Challenge } from "types/challenge";

export const Challenges: Array<Challenge> = [
	CssChallenges,
	JavaChallenges,
	JavascriptChallenges,
	PythonChallenges,
	ReactChallenges,
	TypeScriptChallenges,
].flat();
