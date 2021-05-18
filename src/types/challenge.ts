import { ChallengeLevelEnum } from "enums/challenge-level";

export interface Challenge {
	id: string;
	title: string;
	description: string;
	level: ChallengeLevelEnum;
	language: string;
}
