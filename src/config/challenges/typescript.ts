import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const TypeScriptChallenges: Array<Challenge> = [
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "TS-0001",
		title: "Crie uma função que some 2 numeros!",
		description:
			"Crie uma função que receba 2 parametros, ambos numeros, e retorne a soma desses dois numeros.",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
	},
	{
		id: "TS-0002",
		title:
			"Crie uma função que retorne a soma de todos os números de um array!",
		description:
			"Crie uma função que receba 1 parametro, um array de numeros, e retorne a soma de todos os numeros desse array.",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
	},
	{
		id: "TS-0003",
		title: "Crie uma função que retorne a soma das idades!",
		description:
			"Crie uma função que receba 1 parametro, um obejto com as chaves sendo o nomes de pessoas, e o valor sendo a idade desssas pessoas, e retorne a soma da idade de todas as pessoas.",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
	},
	{
		id: "TS-0004",
		title:
			"Crie uma função que retorne o idioma falado em um país da america latina!",
		description:
			"Crie uma função que receba 1 parametro, um enum de todos os paises da america latina, retorne o idioma falado nesse país.",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
	},
	{
		id: "TS-0005",
		title: "Crie uma função que tenha uma tipagem dinamica!",
		description:
			"Crie uma função que receba 1 parametro, do tipo especificado ao chamar a função, e retorne esse mesmo valor, sem nenhuma alteração.",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
	},
];
