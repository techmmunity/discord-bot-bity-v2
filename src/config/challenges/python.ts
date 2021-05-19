import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const PythonChallenges: Array<Challenge> = [
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "PY-0001",
		title: "Crie uma função que retorne o clima de uma cidade brasileira!",
		description:
			"Crie uma função que receba 1 parametro, o nome de uma cidade brasileira, e retorne o clima dessa cidade baseado nessa API: `https://www.weatherapi.com/`.",
		level: ChallengeLevelEnum.Junior,
		language: "Python",
	},
];
