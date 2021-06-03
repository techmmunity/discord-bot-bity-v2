import { CSS_CHALLENGES } from "./css";
import { JAVA_CHALLENGES } from "./java";
import { JAVASCRIPT_CHALLENGES } from "./javascript";
import { PYTHON_CHALLENGES } from "./python";
import { REACT_CHALLENGES } from "./react";
import { TYPESCRIPT_CHALLENGES } from "./typescript";

import { Challenge } from "types/challenge";

export const CHALLENGES: Array<Challenge> = [
	CSS_CHALLENGES,
	JAVA_CHALLENGES,
	JAVASCRIPT_CHALLENGES,
	PYTHON_CHALLENGES,
	REACT_CHALLENGES,
	TYPESCRIPT_CHALLENGES,
].flat();
