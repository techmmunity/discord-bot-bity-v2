import { makeDescription } from "./helpers/make-description";

import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const TypeScriptChallenges: Array<Challenge> = [
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "TS-1-0001",
		title: "Crie uma função que retorne a soma de 2 numeros!",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
		description: makeDescription({
			language: "ts",
			text:
				"A função deve receber 2 parametros, ambos numeros, e retornar a soma desses numeros.",
			examples: [
				{
					example: "sum(1, 2)",
					returnedValue: "3",
				},
				{
					example: "sum(5, 10)",
					returnedValue: "15",
				},
			],
		}),
	},
	{
		id: "TS-1-0002",
		title:
			"Crie uma função que retorne a soma de todos os números de um array!",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
		description: makeDescription({
			language: "ts",
			text:
				"Crie uma função que receba 1 parametro, um array de numeros, e retorne a soma de todos os numeros desse array.",
			examples: [
				{
					example: "sumArray([1, 2, 3])",
					returnedValue: "6",
				},
				{
					example: "sumArray([30, 30, 40])",
					returnedValue: "100",
				},
			],
		}),
	},
	{
		id: "TS-1-0003",
		title: "Crie uma função que retorne a soma das idades!",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
		description: makeDescription({
			language: "ts",
			text:
				"Crie uma função que receba 1 parametro, um obejto com as chaves sendo o nomes de pessoas, e o valor sendo a idade desssas pessoas, e retorne a soma da idade de todas as pessoas.",
			examples: [
				{
					example: "sumAges({ jose: 30, cleiton: 12})",
					returnedValue: "42",
				},
				{
					example: "sumAges({ maria: 70, simone: 99 })",
					returnedValue: "169",
				},
			],
		}),
	},
	{
		id: "TS-1-0004",
		title:
			"Crie uma função que retorne o idioma falado em um país da america latina!",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
		description: makeDescription({
			language: "ts",
			text:
				"Crie uma função que receba 1 parametro, um enum de todos os paises da america latina, retorne o idioma falado nesse país.",
			examples: [
				{
					example: "getLanguage(CountriesEnum.Brazil)",
					returnedValue: "Português",
				},
				{
					example: "getLanguage(ContriesEnum.Argentina)",
					returnedValue: "Español",
				},
			],
		}),
	},
	{
		id: "TS-1-0005",
		title: "Crie uma função que tenha uma tipagem dinamica!",
		description:
			"Crie uma função que receba 1 parametro, do tipo especificado ao chamar a função, e retorne esse mesmo valor, sem nenhuma alteração.",
		level: ChallengeLevelEnum.Junior,
		language: "TypeScript",
	},
];
