"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannel = void 0;
const get_channel_to_log_1 = require("../../helpers/get-channel-to-log");
const guilds_1 = require("../../../../../../enums/guilds");
const getChannel = ({ DiscordClient, message, newMessage, }) => {
    var _a, _b;
    const guildId = (((_a = message === null || message === void 0 ? void 0 : message.guild) === null || _a === void 0 ? void 0 : _a.id) || ((_b = newMessage === null || newMessage === void 0 ? void 0 : newMessage.guild) === null || _b === void 0 ? void 0 : _b.id));
    return get_channel_to_log_1.getChannelToLog({
        DiscordClient,
        guildId,
        type: "message",
    });
};
exports.getChannel = getChannel;
//# sourceMappingURL=get-channel.js.map