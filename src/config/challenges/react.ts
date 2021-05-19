import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const ReactChallenges: Array<Challenge> = [
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "RT-0001",
		title: "Use um state para exibir dados na tela!",
		description:
			"Crie uma UI que tenha um input de texto, e quando o usuário digitar algo, o valor deve ser exibido em UpperCase logo abaixo do input, em tempo real.",
		level: ChallengeLevelEnum.Junior,
		language: "React",
	},
	{
		id: "RT-0002",
		title: "Crie uma lista de afazeres!",
		description:
			"Crie uma UI que tenha um input de texto, e quando o usuário digitar algo e apertar ENTER, o texto do input deve aparecer abaixo do input, e conforme o usuário for digitando e apertando ENTER, os textos devem ser exibidos embaixo do texto anterior.",
		level: ChallengeLevelEnum.Junior,
		language: "React",
	},
	{
		id: "RT-0003",
		title: "Exiba os dados de uma api!",
		description:
			"Quando a pagina for carregada, busque os dados dessa API: `http://fakeapi.jsonparseronline.com/posts` e os exiba na tela. (Lembre-se de fazer uma interface bem bonita! :wink:)",
		level: ChallengeLevelEnum.Junior,
		language: "React",
	},
];
