"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emoji = void 0;
const getEmoji = (messageContent) => { var _a; return (_a = /<:.+:(\d+)>/.exec(messageContent)) === null || _a === void 0 ? void 0 : _a.pop(); };
const getAnimatedEmoji = (messageContent) => { var _a; return (_a = /<a:.+:(\d+)>/.exec(messageContent)) === null || _a === void 0 ? void 0 : _a.pop(); };
const getEmojiUrl = (emoji) => `https://cdn.discordapp.com/emojis/${emoji}.png?v=1`;
const getAnimatedEmojiUrl = (emoji) => `https://cdn.discordapp.com/emojis/${emoji}.gif?v=1`;
const emoji = async (message) => {
    const emoji = getEmoji(message.content);
    if (emoji) {
        const emojiUrl = getEmojiUrl(emoji);
        return message.channel.send(emojiUrl);
    }
    const animatedEmoji = getAnimatedEmoji(message.content);
    if (animatedEmoji) {
        const animatedEmojiUrl = getAnimatedEmojiUrl(animatedEmoji);
        return message.channel.send(animatedEmojiUrl);
    }
    throw new Error("MISSING_ARGUMENT");
};
exports.emoji = emoji;
//# sourceMappingURL=index.js.map