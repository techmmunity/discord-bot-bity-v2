"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JAVA_CHALLENGES = void 0;
const make_description_1 = require("./helpers/make-description");
const challenge_level_1 = require("../../enums/challenge-level");
const challenge_1 = require("../../types/challenge");
exports.JAVA_CHALLENGES = [
    {
        id: "JAVA-1-0001",
        title: "hUeHue!",
        level: challenge_level_1.ChallengeLevelEnum.JUNIOR,
        language: "Java",
        description: make_description_1.makeDescription({
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
//# sourceMappingURL=java.js.map