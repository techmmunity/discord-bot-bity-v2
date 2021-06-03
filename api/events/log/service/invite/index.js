"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteLog = void 0;
const get_channel_to_log_1 = require("../helpers/get-channel-to-log");
const get_embed_1 = require("./get-embed");
const guilds_1 = require("../../../../../enums/guilds");
const inviteLog = ({ discordClient, invite, title, color, }) => {
    var _a;
    const guildId = (_a = invite.guild) === null || _a === void 0 ? void 0 : _a.id;
    const channel = get_channel_to_log_1.getChannelToLog({
        discordClient,
        guildId,
        type: "invite",
    });
    const embed = get_embed_1.getEmbed({
        invite,
        title,
        color,
    });
    return channel.send(embed);
};
exports.inviteLog = inviteLog;
//# sourceMappingURL=index.js.map