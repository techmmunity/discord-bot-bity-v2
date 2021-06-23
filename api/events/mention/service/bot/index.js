"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const send_embed_1 = require("./helpers/send-embed");
const bots_1 = require("../../../../../enums/bots");
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === "production";
const getBotId = () => (isProduction ? bots_1.BotsEnum.BITY : bots_1.BotsEnum.BITY_TEST);
const bot = (message) => {
    var _a;
    if (message.reference)
        return;
    const botId = getBotId();
    const user = (_a = message.mentions.users) === null || _a === void 0 ? void 0 : _a.get(botId);
    if (!user)
        return;
    return send_embed_1.sendEmbed({
        message,
        user,
    });
};
exports.bot = bot;
//# sourceMappingURL=index.js.map