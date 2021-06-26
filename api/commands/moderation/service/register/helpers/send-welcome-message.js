"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeMessage = void 0;
const discord_js_1 = require("discord.js");
const member_1 = require("../../../../../../utils/member");
const channels_1 = require("../../../../../../enums/channels");
const guilds_1 = require("../../../../../../enums/guilds");
const colors_1 = require("../../../../../../assets/colors");
const sendWelcomeMessage = (message, member, guildId) => {
    var _a;
    const TITLE = "Welcome to Techmmunity!";
    const DESCRIPTION = "{userMention} ({userTag}), say hi to everyone!";
    const titleFormatted = member_1.memberUtil.formatMessage(member, TITLE);
    const descriptionFormatted = member_1.memberUtil.formatMessage(member, DESCRIPTION);
    const memberCount = member_1.memberUtil.getGuildMemberCount(member);
    const embed = new discord_js_1.MessageEmbed()
        .setColor(colors_1.getMainColor(guildId))
        .setTitle(titleFormatted)
        .setDescription(descriptionFormatted)
        .addFields([
        {
            name: "Member Nr:",
            value: `#${memberCount}`,
            inline: true,
        },
    ])
        .setThumbnail(member.user.avatarURL({ dynamic: true }));
    const welcomeMessageChannel = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels.cache.get(channels_1.ChannelEnum[guildId].WELCOME_MESSAGE);
    return welcomeMessageChannel.send({
        content: `<@${member.user.id}>`,
        embed,
    });
};
exports.sendWelcomeMessage = sendWelcomeMessage;
//# sourceMappingURL=send-welcome-message.js.map