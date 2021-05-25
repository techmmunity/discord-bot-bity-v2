"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownUtil = void 0;
const bold_1 = require("./bold");
const bold_italic_1 = require("./bold-italic");
const code_1 = require("./code");
const code_block_1 = require("./code-block");
const commentary_1 = require("./commentary");
const commentary_block_1 = require("./commentary-block");
const italic_1 = require("./italic");
const strikethrough_1 = require("./strikethrough");
const underline_1 = require("./underline");
const underline_bold_1 = require("./underline-bold");
const underline_italic_1 = require("./underline-italic");
exports.MarkdownUtil = {
    boldItalic: bold_italic_1.boldItalic,
    bold: bold_1.bold,
    codeBlock: code_block_1.codeBlock,
    code: code_1.code,
    commentaryBlock: commentary_block_1.commentaryBlock,
    commentary: commentary_1.commentary,
    italic: italic_1.italic,
    strikethrough: strikethrough_1.strikethrough,
    underlineBold: underline_bold_1.underlineBold,
    underlineItalic: underline_italic_1.underlineItalic,
    underline: underline_1.underline,
};
//# sourceMappingURL=index.js.map