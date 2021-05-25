"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmojisByType = void 0;
const getEmojisByType = (message) => {
    var _a;
    const qtd = {
        regular: 0,
        animated: 0,
    };
    (_a = message.guild) === null || _a === void 0 ? void 0 : _a.emojis.cache.forEach(emoji => emoji.animated ? qtd.animated++ : qtd.regular++);
    return qtd;
};
exports.getEmojisByType = getEmojisByType;
//# sourceMappingURL=get-emojis-by-type.js.map