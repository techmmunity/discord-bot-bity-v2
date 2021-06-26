"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReviewReminder = void 0;
const discord_js_1 = require("discord.js");
const join_1 = require("../../../../utils/join");
const channels_1 = require("../../../../enums/channels");
const guilds_1 = require("../../../../enums/guilds");
const colors_1 = require("../../../../assets/colors");
const images_1 = require("../../../../assets/images");
const getReviewUrl = {
    [guilds_1.GuildEnum.DEV]: "https://disboard.org/review/create/784050272263471145",
    [guilds_1.GuildEnum.GRAPHIC]: "",
    [guilds_1.GuildEnum.SOUND]: "",
    [guilds_1.GuildEnum.ROBOTIC]: "",
    [guilds_1.GuildEnum.MANAGEMENT]: "",
    [guilds_1.GuildEnum.MARKETING]: "",
};
const makeEmbed = (guildId) => new discord_js_1.MessageEmbed()
    .setTitle(join_1.join(":flag_us: Click here, please!", ":flag_br: Clique aqui, por favor!"))
    .setColor(colors_1.getMainColor(guildId))
    .setDescription(join_1.join(":flag_us: Guys, please, give a feedback to the server, it help us a lot! ❤️", ":flag_br: Pessoal, por favor, avaliem o servidor, isso ajuda de mais! ❤️"))
    .setImage(images_1.IMAGES.apesTogetherStrong)
    .setURL(getReviewUrl[guildId]);
const sendReviewReminder = async (discordClient, guildId) => {
    const guild = discordClient.getClient().guilds.cache.get(guildId);
    const channel = guild.channels.cache.get(channels_1.ChannelEnum[guildId].GENERAL);
    const embed = makeEmbed(guildId);
    await channel.send(embed);
};
exports.sendReviewReminder = sendReviewReminder;
//# sourceMappingURL=index.js.map