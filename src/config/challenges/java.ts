import { makeDescription } from "./helpers/make-description";

import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const JAVA_CHALLENGES: Array<Challenge> = [
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "JAVA-1-0001",
		title: "hUeHue!",
		level: ChallengeLevelEnum.JUNIOR,
		language: "Java",
		description: makeDescription({
			language: "java",
			text: 'Dada uma String como "o rato roeu a roupa do rei de roma", transformar essa String para hUeHuE.\nConsiderar que somente entradas contendo texto devam ser aceitas.',
			examples: [
				{
					example: 'huehueGenerator("o rato roeu")',
					returnedValue: '"o RaTo RoEu"',
				},
				{
					example: 'huehueGenerator("o r4to r0eu")',
					returnedValue: '"entrada inválida"',
				},
			],
		}),
	},
];
