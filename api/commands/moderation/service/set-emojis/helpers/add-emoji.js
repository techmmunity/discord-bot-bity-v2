"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEmoji = void 0;
const node_fetch_1 = require("node-fetch");
const addEmoji = async ({ message, name, url }) => {
    var _a;
    const response = await node_fetch_1.default(url, {
        method: "GET",
    });
    const imageBuffer = await response.buffer();
    return (_a = message.guild) === null || _a === void 0 ? void 0 : _a.emojis.create(imageBuffer, name);
};
exports.addEmoji = addEmoji;
//# sourceMappingURL=add-emoji.js.map