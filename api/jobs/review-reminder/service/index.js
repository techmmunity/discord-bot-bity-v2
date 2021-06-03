"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReminder = void 0;
const discord_js_1 = require("discord.js");
const channels_1 = require("../../../../enums/channels");
const guilds_1 = require("../../../../enums/guilds");
const colors_1 = require("../../../../assets/colors");
const images_1 = require("../../../../assets/images");
const getReviewUrl = {
    [guilds_1.GuildEnum.PROGRAMMING]: "https://disboard.org/review/create/784050272263471145",
    [guilds_1.GuildEnum.GRAPHIC]: "",
    [guilds_1.GuildEnum.SOUND]: "",
    [guilds_1.GuildEnum.ROBOTIC]: "",
    [guilds_1.GuildEnum.MANAGEMENT]: "",
};
const makeEmbed = (guildId) => new discord_js_1.MessageEmbed()
    .setTitle("Click here, please!")
    .setColor(colors_1.COLORS.turquoise)
    .setDescription("Guys, please, give a feedback to the server, it help us a lot! ❤️")
    .setImage(images_1.IMAGES.apesTogetherStrong)
    .setURL(getReviewUrl[guildId]);
const sendReminder = async (discordClient, guildId) => {
    const guild = discordClient.getClient().guilds.cache.get(guildId);
    const channel = guild.channels.cache.get(channels_1.ChannelEnum[guildId].GENERAL);
    const embed = makeEmbed(guildId);
    await channel.send(embed);
};
exports.sendReminder = sendReminder;
//# sourceMappingURL=index.js.map