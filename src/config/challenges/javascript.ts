import { makeDescription } from "./helpers/make-description";

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
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
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
		id: "JS-0002",
		title: "Crie uma função que converta segundos para minutos!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro numerico, que será a quantidade de segundos, e retornar a quantidade convertida e arredondada dos segundos para minutos.",
			examples: [
				{
					example: "secondsToMinutes(60)",
					returnedValue: "1",
				},
				{
					example: "secondsToMinutes(110)",
					returnedValue: "2",
				},
			],
		}),
	},
	{
		id: "JS-0003",
		title: "Crie uma função que converta minutos para segundos!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro numerico, que será a quantidade de minutos, e retornar a quantidade convertida e arredondada dos minutos para segundos.",
			examples: [
				{
					example: "minutesToSeconds(1)",
					returnedValue: "60",
				},
				{
					example: "minutesToSeconds(2)",
					returnedValue: "120",
				},
			],
		}),
	},
	{
		id: "JS-0004",
		title: "Crie uma função que retorne a area de um triangulo retangulo!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 2 parametros, ambos numeros, que serão o **tamanho da base** e a **altura** do triangulo, e retornar o calculo da area desse triangulo.",
			examples: [
				{
					example: "getTriangleArea(1, 2)",
					returnedValue: "1",
				},
				{
					example: "getTriangleArea(10, 30)",
					returnedValue: "150",
				},
			],
		}),
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
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, um array de strings, e retornar o primeiro item desse array.\n\n**ATENÇÃO:** Você não pode usar magic numbers!",
			examples: [
				{
					example: "getFirst([1, 2, 3])",
					returnedValue: "1",
				},
				{
					example: "getFirst([3, 2, 1])",
					returnedValue: "3",
				},
			],
		}),
	},
	{
		id: "JS-0007",
		title: "Crie uma função que retorne o ultimo item de um array!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, um array de strings, e retornar o ultimo item desse array.\n\n**ATENÇÃO:** Você não pode usar magic numbers!",
			examples: [
				{
					example: "getLast([1, 2, 3])",
					returnedValue: "3",
				},
				{
					example: "getLast([3, 2, 1])",
					returnedValue: "1",
				},
			],
		}),
	},
	{
		id: "JS-0008",
		title: "Crie uma função que verifica se um numero é menor ou igual a zero!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, um number, e retornar um boolean dizendo se o numero é menor ou igual a zero.",
			examples: [
				{
					example: "lessOrEqualThanZero(3)",
					returnedValue: "false",
				},
				{
					example: "lessOrEqualThanZero(0)",
					returnedValue: "true",
				},
				{
					example: "lessOrEqualThanZero(-1)",
					returnedValue: "true",
				},
			],
		}),
	},
	{
		id: "JS-0009",
		title: "Crie uma função que verifica se um numero é menor que 100!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, um number, e retornar um boolean dizendo se o numero é menor que cem.",
			examples: [
				{
					example: "lessThanHundred(99)",
					returnedValue: "true",
				},
				{
					example: "lessThanHundred(100)",
					returnedValue: "false",
				},
				{
					example: "lessThanHundred(101)",
					returnedValue: "false",
				},
			],
		}),
	},
	{
		id: "JS-0010",
		title: "Crie uma função que diga se a soma de 2 numeros é iguala a 10!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 2 parametros, ambos numeros, e deve retornar um boolean que diz se a soma desses 2 numeros é igual a dez.",
			examples: [
				{
					example: "isEqualToTen(1, 9)",
					returnedValue: "true",
				},
				{
					example: "isEqualToTen(2, 9)",
					returnedValue: "false",
				},
				{
					example: "isEqualToTen(5, 5)",
					returnedValue: "true",
				},
			],
		}),
	},
	/**
	 *
	 * Junior
	 *
	 */
	{
		id: "JS-0011",
		title: "Crie uma função que retorne a maior string de um array!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, um array de strings, e retornar a string com mais caracteres desse array.",
			examples: [
				{
					example: 'getSmaller(["foo", "five", "ducks"])',
					returnedValue: '"foo"',
				},
				{
					example: 'getSmaller(["javascript", "python", "php"])',
					returnedValue: '"php"',
				},
				{
					example: 'getSmaller(["a", "b", "c"])',
					returnedValue: "a",
				},
			],
		}),
	},
	{
		id: "JS-0012",
		title: "Crie uma função que retorne a letra mais usada em uma string!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, uma string, e retornar a letra que mais foi usada (repetida) nessa string.",
			examples: [
				{
					example: 'getMoreUsedChar("foo five ducks")',
					returnedValue: '"f"',
				},
				{
					example: 'getMoreUsedChar("javascript python php")',
					returnedValue: '"p"',
				},
				{
					example: 'getMoreUsedChar("a b c")',
					returnedValue: "a",
				},
			],
		}),
	},
	{
		id: "JS-0013",
		title:
			"Crie uma função que verifica se duas strings são anagramas uma da outra!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 2 parametros, ambos strings, e retornar um valor boolean que diz se as strings são anagramas uma da outra.",
			examples: [
				{
					example: 'areAnagrams("banana", "nabana")',
					returnedValue: "true",
				},
				{
					example: 'areAnagrams("truck", "douglas")',
					returnedValue: "false",
				},
				{
					example: 'areAnagrams("luz", "zul")',
					returnedValue: "true",
				},
			],
		}),
	},
	{
		id: "JS-0014",
		title: "Crie uma função que verifica se uma string é palíndroma!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, uma string, e retornar um valor boolean que diz se a string é palindroma (se ela é escrita do mesmo jeito de trás para frente).",
			examples: [
				{
					example: 'isPalindrome("arara")',
					returnedValue: "true",
				},
				{
					example: 'isPalindrome("douglas")',
					returnedValue: "false",
				},
				{
					example: 'isPalindrome("reviver")',
					returnedValue: "true",
				},
			],
		}),
	},
	{
		id: "JS-0015",
		title: "Crie uma função que converta segundos para minutos!",
		level: ChallengeLevelEnum.Starter,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro numerico, que será a quantidade de segundos, e retornar a quantidade convertida dos segundos para minutos. Caso sobrem segundos, eles também devem ser retornados.",
			examples: [
				{
					example: "secondsToMinutes(60)",
					returnedValue: "1min",
				},
				{
					example: "secondsToMinutes(110)",
					returnedValue: "1min 50sec",
				},
				{
					example: "secondsToMinutes(150)",
					returnedValue: "1min 30sec",
				},
			],
		}),
	},
	{
		id: "JS-0016",
		title: "Crie uma função que ordene números de um array! (crescente)",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, um array de numeros, e retornar um novo array com os numeros ordenados em ordem crescente.",
			examples: [
				{
					example: "order([60, 4, 25])",
					returnedValue: "[4, 25, 60]",
				},
				{
					example: "order([100, 2, -1])",
					returnedValue: "[-1, 2, 100]",
				},
				{
					example: "order([1, 11, 2, 22, 3])",
					returnedValue: "[1, 2, 3, 11, 22]",
				},
			],
		}),
	},
	{
		id: "JS-0017",
		title: "Crie uma função que ordene números de um array! (decrescente)",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber 1 parametro, um array de numeros, e retornar um novo array com os numeros ordenados em ordem decrescente.",
			examples: [
				{
					example: "order([60, 4, 25])",
					returnedValue: "[60, 25, 4]",
				},
				{
					example: "order([100, 2, -1])",
					returnedValue: "[100, 2, -1]",
				},
				{
					example: "order([1, 11, 2, 22, 3])",
					returnedValue: "[22, 11, 3, 2, 1]",
				},
			],
		}),
	},
	{
		id: "JS-0018",
		title:
			"Crie uma função que retorne o nro de argumentos que foram passados!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber _n_ parametros, de tipos variados, e retornar um number que diz a quantidade de argumentos que foi passada (Dica: `...`).",
			examples: [
				{
					example: "numArgs(123, 456)",
					returnedValue: "2",
				},
				{
					example: 'numArgs("foo")',
					returnedValue: "1",
				},
				{
					example: 'numArgs([], "foo", 123)',
					returnedValue: "3",
				},
			],
		}),
	},
	{
		id: "JS-0019",
		title: "Crie uma função que converta a idade de uma pessoa para dias!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber um parametro, um number que representa a idade atual da pessoa, e retornar a quantidade de dias que a pessoa viveu, contando com os anos bissextos.",
			examples: [
				{
					example: "[Em 2021] getDaysLived(14)",
					returnedValue: "5114",
				},
				{
					example: "[Em 2021] getDaysLived(30)",
					returnedValue: "10958",
				},
			],
		}),
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
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"A função deve receber um parametro, um array de numbers, e retornar a soma de todos os itens do array.",
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
		id: "JS-0022",
		title: "Use o NPM!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Usando a lib `@techmmunity/easy-check`, crie uma função que receba um numero, eleve esse numero ao quadrado, e retorne se o resultado disso é um numero par (odd).",
			examples: [
				{
					example: "isExponentOdd(5)",
					returnedValue: "false",
				},
				{
					example: "isExponentOdd(2)",
					returnedValue: "true",
				},
			],
		}),
	},
	{
		id: "JS-0023",
		title: "Random Element!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Crie uma função que receba 1 parametro, um array de strings, e retorne um elemento aleatório desse array.",
			examples: [
				{
					example: 'getRandom(["foo", "bar", "seven", "walmart"])',
					returnedValue: '"seven"',
				},
				{
					example: 'getRandom(["foo", "bar", "seven", "walmart"])',
					returnedValue: '"foo"',
				},
				{
					example: 'getRandom(["foo", "bar", "seven", "walmart"])',
					returnedValue: '"walmart"',
				},
			],
		}),
	},
	{
		id: "JS-0023",
		title: "Valid Date!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Crie uma função que receba 1 parametro, uma string, e retorne se essa string é uma data valida ou não.",
			examples: [
				{
					example: 'isValidDate("29/02/2020")',
					returnedValue: "true",
				},
				{
					example: 'isValidDate("32/01/2019")',
					returnedValue: "false",
				},
				{
					example: 'isValidDate("01/01/0000")',
					returnedValue: "true",
				},
			],
		}),
	},
	{
		id: "JS-0024",
		title: "Remove Spaces!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Crie uma função que receba 1 parametro, uma string, e retorne essa mesma string, mas sem os espaços.",
			examples: [
				{
					example: 'removeSpaces("foo bar")',
					returnedValue: '"foobar"',
				},
				{
					example: 'removeSpaces("Techmmunity is the best community!")',
					returnedValue: '"Techmmunityisthebestcommunity!"',
				},
			],
		}),
	},
	{
		id: "JS-0025",
		title: "How many times!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Crie uma função que receba 1 parametro, um array, e retorne um objeto, com a chave sendo um elemento do array, e o valor sendo a quantidade de vezes que ele foi repetido.",
			examples: [
				{
					example:
						'countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"])',
					returnedValue: "{ cow: 3, cat: 2, dog: 1 }",
				},
				{
					example: "countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0])",
					returnedValue: "{ 0: 6, 5: 3, 12: 2, 1: 1 }",
				},
				{
					example:
						'countRepetitions(["Infinity", "null", "Infinity", "null", "null"])',
					returnedValue: "{ null: 3, Infinity: 2}",
				},
			],
		}),
	},
	{
		id: "JS-0026",
		title: "Caesar's Cipher!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Crie uma função que receba 2 parametro, uma string (a frase) e um number (a rotação), e retorne uma string convertendo cada letra da frase para uma letra seguinte do alfabeto. (Ex: Se a rotação for 3, `a -> d`, `b -> e` e `y -> b`).",
			examples: [
				{
					example: 'caesarCipher("Techmmunity is the best community!", 2)',
					returnedValue: '"Vgejoowpkva ku vjg dguv eqoowpkva!"',
				},
				{
					example: 'caesarCipher("Techmmunity is the best community!", 3)',
					returnedValue: '"Whfkppxqlwb lv wkh ehvw frppxqlwb!"',
				},
				{
					example: 'caesarCipher("Techmmunity is the best community!", 4)',
					returnedValue: '"Xiglqqyrmxc mw xli fiwx gsqqyrmxc!"',
				},
				{
					example: 'caesarCipher("Techmmunity is the best community!", 34)',
					returnedValue: '"Bmkpuucvqbg qa bpm jmab kwuucvqbg!"',
				},
			],
		}),
	},
	{
		id: "JS-0027",
		title: "Reverse Caesar's Cipher!",
		level: ChallengeLevelEnum.Junior,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Crie uma função que receba 2 parametro, uma string (a frase) e um number (a rotação), e retorne uma string convertendo cada letra da frase para uma letra anterior do alfabeto. (Ex: Se a rotação for 3, `d -> a`, `e -> b` e `b -> y`).",
			examples: [
				{
					example: 'caesarCipher("Vgejoowpkva ku vjg dguv eqoowpkva!", 2)',
					returnedValue: '"Techmmunity is the best community!"',
				},
				{
					example: 'caesarCipher("Whfkppxqlwb lv wkh ehvw frppxqlwb!", 3)',
					returnedValue: '"Techmmunity is the best community!"',
				},
				{
					example: 'caesarCipher("Xiglqqyrmxc mw xli fiwx gsqqyrmxc!", 4)',
					returnedValue: '"Techmmunity is the best community!"',
				},
				{
					example: 'caesarCipher("Bmkpuucvqbg qa bpm jmab kwuucvqbg!", 34)',
					returnedValue: '"Techmmunity is the best community!"',
				},
			],
		}),
	},
	/**
	 *
	 * Middle
	 *
	 */
	{
		id: "JS-0025",
		title: "Maxie And Minnie!",
		level: ChallengeLevelEnum.Middle,
		language: "JavaScript",
		description: makeDescription({
			language: "js",
			text:
				"Crie uma função que receba 1 parametro, um number, e retorne um array com 2 items:\n\n- O **maior** numero que pode ser obitido ao alterar a posição de 2 digitos desse numero\n-O **menor** numero que pode ser obitido ao alterar a posição de 2 digitos desse numero.\n\n**Obs:** Zeros a esquerda não são permitidos!",
			examples: [
				{
					example: "maxieMinnie(12340)",
					returnedValue: "[42310, 10342]",
				},
				{
					example: "maxieMinnie(98761)",
					returnedValue: "[98761, 18769]",
				},
				{
					example: "maxieMinnie(9000)",
					returnedValue: "[9000, 9000]",
				},
			],
		}),
	},
];
