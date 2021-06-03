"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const discord_js_1 = require("discord.js");
const get_guild_1 = require("../helpers/get-guild");
const channels_1 = require("../../../../../enums/channels");
const guilds_1 = require("../../../../../enums/guilds");
const url_1 = require("../../../../../config/url");
const colors_1 = require("../../../../../assets/colors");
const images_1 = require("../../../../../assets/images");
const sendMessage = async ({ discordClient, guildId, hangoverChannel, }) => {
    const guild = get_guild_1.getGuild(discordClient, guildId);
    const channel = guild.channels.cache.get(channels_1.ChannelEnum[guildId].EVENTS);
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Hey guys, guess what day it is?")
        .setDescription("That's right, chatting day!")
        .setColor(colors_1.COLORS.blue)
        .setThumbnail(images_1.IMAGES.bityGif)
        .addField("Join us on twitch!", url_1.URLS.TWITCH)
        .addField("Or at the discord", `<#${hangoverChannel.id}>`);
    const message = await channel.send(embed);
    await message.crosspost();
};
exports.sendMessage = sendMessage;
//# sourceMappingURL=index.js.map