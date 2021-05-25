"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendServerExplanationMessage = void 0;
const channels_1 = require("../../../../../../enums/channels");
const guilds_1 = require("../../../../../../enums/guilds");
const getMessages = ({ message, unlockChannelsId, challenglesId, }) => {
    if (message.mentions.users.size > 1) {
        return [
            "Falem jovens, sejam bem vindos(as)!",
            `Depois deem uma passada no <#${unlockChannelsId}>`,
            "Lá vcs podem desbloquear canais pra postar suas duvidas / conteudos",
            `Nós tbm temos desafios diarios, ao meio dia, no <#${challenglesId}>`,
        ];
    }
    return [
        "Fala jovem, seja bem vindo(a)!",
        `Depois dá uma passada no <#${unlockChannelsId}>`,
        "Lá vc pode desbloquear canais pra postar suas duvidas / conteudos",
        `Nós tbm temos desafios diarios, ao meio dia, no <#${challenglesId}>`,
    ];
};
const sendServerExplanationMessage = async (message) => {
    var _a, _b;
    const guildId = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.id;
    const unlockChannelsId = channels_1.ChannelEnum[guildId].UNLOCK_CHANNELS;
    const challenglesId = channels_1.ChannelEnum[guildId].CHALLENGES;
    const welcomeMessageChannel = (_b = message.guild) === null || _b === void 0 ? void 0 : _b.channels.cache.get(channels_1.ChannelEnum[guildId].WELCOME_MESSAGE);
    const messages = getMessages({
        message,
        unlockChannelsId,
        challenglesId,
    });
    await (welcomeMessageChannel === null || welcomeMessageChannel === void 0 ? void 0 : welcomeMessageChannel.send(messages.join("\n")));
};
exports.sendServerExplanationMessage = sendServerExplanationMessage;
//# sourceMappingURL=send-server-explanation-message.js.map