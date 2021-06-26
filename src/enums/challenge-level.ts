import { getValues } from "./helpers/get-values";

export enum ChallengeLevelEnum {
	STARTER = "STARTER",
	JUNIOR = "JUNIOR",
	MIDDLE = "MIDDLE",
	SENIOR = "SENIOR",
	SPECIALIST = "SPECIALIST",
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ChallengeLevelValues = () =>
	getValues<ChallengeLevelEnum>(ChallengeLevelEnum);
