import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const CssChallenges: Array<Challenge> = [
	/**
	 *
	 * Starter
	 *
	 */
	{
		id: "CSS-0-0001",
		title: "Black And White!",
		level: ChallengeLevelEnum.Starter,
		language: "CSS",
		image:
			"https://css-challenges.com/wp-content/uploads/2020/05/Black-or-White.png",
		description:
			"Divida a tela em 2, a parte da esquerda deve ser branca com o texto preto, e a parte da direita preta com o texto branco.",
	},
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "CSS-1-0001",
		title: "Social buttons!",
		level: ChallengeLevelEnum.Junior,
		language: "CSS",
		image:
			"https://www.peengler.com/wp-content/uploads/2020/04/Stylish-Social-Buttons-min.jpg",
		description:
			"Crie botões de login social, os de cima são exemplos dos botões em estado normal, e os de baixo são como eles devem ficar quando o usuario passa o mouse em cima.",
	},
	/**
	 *
	 * Middle
	 *
	 */
	{
		id: "CSS-2-0001",
		title: "Colorful Word!",
		level: ChallengeLevelEnum.Middle,
		language: "CSS",
		image:
			"https://css-challenges.com/wp-content/uploads/2018/09/A-colorful-world.png",
		description: "Faça com que cada letra de um texto tenha uma cor diferente!",
	},
];
