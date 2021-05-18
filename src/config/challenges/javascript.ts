import { MarkdownUtil } from "utils/markdown";

import { ChallengeLevelEnum } from "enums/challenge-level";

import { Challenge } from "types/challenge";

export const JavascriptChallenges: Array<Challenge> = [
	/**
	 *
	 * Starter
	 *
	 */
	{
		id: "JS-0001",
		title: "Crie uma função que retorne a soma de 2 numeros!",
		description:
			"A função deve receber 2 parametros, ambos numeros, e retornar a soma desses numeros.",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0002",
		title: "Crie uma função que converta seguntos para minutos!",
		description:
			"A função deve receber 1 parametro numerico, que será a quantidade de segundos, e retornar a quantidade convertida e arredondada dos segundos para minutos.",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0003",
		title: "Crie uma função que converta minutos para segundos!",
		description:
			"A função deve receber 1 parametro numerico, que será a quantidade de minutos, e retornar a quantidade convertida e arredondada dos minutos para segundos.",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0004",
		title: "Crie uma função que retorne a area de um triangulo retangulo!",
		description:
			"A função deve receber 2 parametros, ambos numeros, que serão o **tamanho da base** e a **altura** do triangulo, e retornar o calculo da area desse triangulo.",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0005",
		title: "Corrija o bug! #1",
		description: MarkdownUtil.codeBlock(
			"function cubes(a) {\n	retunr a ** 3\n}",
		),
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0006",
		title: "Crie uma função que retorne o primeiro item de um array!",
		description:
			"A função deve receber 1 parametro, um array de strings, e retornar o primeiro item desse array.\n\n**ATENÇÃO:** Você não pode usar magic numbers!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0007",
		title: "Crie uma função que retorne o ultimo item de um array!",
		description:
			"A função deve receber 1 parametro, um array de strings, e retornar o ultimo item desse array.\n\n**ATENÇÃO:** Você não pode usar magic numbers!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0008",
		title: "Crie uma função que verifica se um numero é menor ou igual a zero!",
		description:
			"A função deve receber 1 parametro, um number, e retornar um boolean dizendo se o numero é menor ou igual a zero.",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0009",
		title: "Crie uma função que verifica se um numero é menor que 100!",
		description:
			"A função deve receber 1 parametro, um number, e retornar um boolean dizendo se o numero é menor que cem.",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	{
		id: "JS-0010",
		title: "Crie uma função que diga se a soma de 2 numeros é iguala a 10!",
		description:
			"A função deve receber 2 parametros, ambos numeros, e deve retornar um boolean que diz se a soma desses 2 numeros é igual a dez.",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
	},
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "JS-0011",
		title: "Crie uma função que retorne a maior string de um array!",
		description:
			"A função deve receber 1 parametro, um array de strings, e retornar a string com mais caracteres desse array.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0012",
		title: "Crie uma função que retorne a letra mais usada em uma string!",
		description:
			"A função deve receber 1 parametro, uma string, e retornar a letra que mais foi usada (repetida) nessa string.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0013",
		title:
			"Crie uma função que verifica se duas strings são anagramas uma da outra!",
		description:
			"A função deve receber 2 parametros, ambos strings, e retornar um valor boolean que diz se as strings são anagramas uma da outra.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0014",
		title: "Crie uma função que verifica se uma string é palíndroma!",
		description:
			"A função deve receber 1 parametro, uma string, e retornar um valor boolean que diz se a string é palindroma (se ela é escrita do mesmo jeito de trás para frente).",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0015",
		title: "Crie uma função que verifica se uma string é palíndroma!",
		description:
			"A função deve receber 1 parametro, uma string, e retornar um valor boolean que diz se a string é palindroma (se ela é escrita do mesmo jeito de trás para frente).",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0016",
		title: "Crie uma função que ordene números de um array! (crescente)",
		description:
			"A função deve receber 1 parametro, um array de numeros, e retornar um novo array com os numeros ordenados em ordem crescente.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0017",
		title: "Crie uma função que ordene números de um array! (decrescente)",
		description:
			"A função deve receber 1 parametro, um array de numeros, e retornar um novo array com os numeros ordenados em ordem decrescente.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0018",
		title: "Crie uma função que ordene números de um array! (decrescente)",
		description:
			"A função deve receber 1 parametro, um array de numeros, e retornar um novo array com os numeros ordenados em ordem decrescente.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0019",
		title: "Crie uma função que converta a idade de uma pessoa para dias!",
		description:
			"A função deve receber um parametro, um number que representa a idade atual da pessoa, e retornar a quatidade de dias que a pessoa viveu, contando com os anos bisextos.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0020",
		title: "Corrija o bug! #2",
		description:
			"Nesse trecho existe um loop infinito, faça as alterações necessarias para corrigir o bug:\n" +
			MarkdownUtil.codeBlock(
				"function printArray(number) {\n  var newArray = [];\n\n  for(var i = 1; i <= number;) {\n    newArray.push(i);\n  }\n\n  return newArray;\n}",
			),
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0021",
		title:
			"Crie uma função que retorne a soma de todos os numeros de um array!",
		description:
			"A função deve receber um parametro, um array de numbers, e retornar a soma de todos os itens do array.",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0022",
		title: "Use o NPM!",
		description:
			"Usando a lib `@techmmunity/easy-check`, crie uma função que receba um numero, eleve esse numero ao quadrado, e retorne se o resultado disso é um numero par (odd).",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
	{
		id: "JS-0023",
		title:
			"Crie uma função que retorne o nro de argumentos que foram passados!",
		description:
			"A função deve receber _n_ parametros, de tipos variados, e retornar um number que diz a quantidade de argumentos que foi passada (Dica: `...`).\n\n" +
			MarkdownUtil.codeBlock(
				'numArgs(123, 456) // 2\nnumArgs("foo") // 1\nnumArgs([], "foo", 123) // 3',
			),
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
	},
];
