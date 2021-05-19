import { MarkdownUtil } from "utils/markdown";

import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const JavaChallenges: Array<Challenge> = [
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "JAVA-0001",
		title: "hUeHue!",
		description:
			'Dada uma String como "o rato roeu a roupa do rei de roma", transformar essa String para hUeHuE.\nConsiderar que somente entradas contendo texto devam ser aceitas. Exemplos:\n\n' +
			MarkdownUtil.codeBlock(
				'huehueGenerator("o rato roeu") -> "o RaTo RoEu"\nhuehueGenerator("o r4to r0eu") -> "entrada inválida"',
			),
		level: ChallengeLevelEnum.Junior,
		language: "Java",
	},
];
