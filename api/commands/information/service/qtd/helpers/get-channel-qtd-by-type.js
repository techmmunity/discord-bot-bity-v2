"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelQtdByType = void 0;
const getChannelQtdByType = (message) => {
    var _a;
    const qtd = {
        text: 0,
        voice: 0,
        news: 0,
        category: 0,
        store: 0,
    };
    (_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels.cache.forEach(channel => qtd[channel.type]++);
    return qtd;
};
exports.getChannelQtdByType = getChannelQtdByType;
//# sourceMappingURL=get-channel-qtd-by-type.js.map