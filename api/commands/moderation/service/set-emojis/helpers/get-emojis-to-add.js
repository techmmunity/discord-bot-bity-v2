"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmojisToAdd = void 0;
const emojis_1 = require("../../../../../../assets/images/emojis");
const getCurrentEmojis = (message) => { var _a; return ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.emojis.cache.map(emoji => emoji.name)) || []; };
const getEmojisToAdd = (message) => {
    const emojisKeys = Object.keys(emojis_1.Emojis.static);
    const currentEmojis = getCurrentEmojis(message);
    const emojisToAdd = emojisKeys.filter(emojiKey => !currentEmojis.includes(emojiKey));
    return emojisToAdd;
};
exports.getEmojisToAdd = getEmojisToAdd;
//# sourceMappingURL=get-emojis-to-add.js.map