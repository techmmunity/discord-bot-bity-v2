"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmojisLimit = void 0;
const getEmojisLimit = (message) => {
    var _a;
    const boosts = ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.premiumSubscriptionCount) || 0;
    if (boosts < 2) {
        return {
            regular: 50,
            animated: 50,
        };
    }
    if (boosts < 15) {
        return {
            regular: 100,
            animated: 100,
        };
    }
    if (boosts < 30) {
        return {
            regular: 150,
            animated: 150,
        };
    }
    return {
        regular: 250,
        animated: 250,
    };
};
exports.getEmojisLimit = getEmojisLimit;
//# sourceMappingURL=get-emojis-limit.js.map