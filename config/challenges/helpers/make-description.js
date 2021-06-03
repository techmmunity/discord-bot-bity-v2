"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDescription = void 0;
const markdown_1 = require("../../../utils/markdown");
const makeDescription = ({ language, text, examples, }) => {
    const examplesFormatted = examples
        .map(({ example, returnedValue }) => `${example} -> ${returnedValue}`)
        .join("\n\n");
    return `${text}\n\n**Exemplos:**\n${markdown_1.markdownUtil.codeBlock(examplesFormatted, language)}`;
};
exports.makeDescription = makeDescription;
//# sourceMappingURL=make-description.js.map