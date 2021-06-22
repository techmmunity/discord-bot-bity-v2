"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const discord_js_1 = require("discord.js");
const get_guild_1 = require("../helpers/get-guild");
const join_1 = require("../../../../../utils/join");
const channels_1 = require("../../../../../enums/channels");
const guilds_1 = require("../../../../../enums/guilds");
const colors_1 = require("../../../../../assets/colors");
const images_1 = require("../../../../../assets/images");
const sendMessage = async ({ discordClient, guildId, hangoverChannel, }) => {
    const guild = get_guild_1.getGuild(discordClient, guildId);
    const channel = guild.channels.cache.get(channels_1.ChannelEnum[guildId].EVENTS);
    const embed = new discord_js_1.MessageEmbed()
        .setTitle(join_1.join(":flag_us: Hey guys, guess what day it is?", ":flag_br: Ei pessoal, adivinhem que dia é hoje?"))
        .setDescription(join_1.join(":flag_us: That's right, chatting day!", ":flag_br: É isso ai, dia de conversar!"))
        .setColor(colors_1.COLORS.blue)
        .setThumbnail(images_1.IMAGES.bityGif)
        .addField(":flag_us: Join us at:", `<#${hangoverChannel.id}>`)
        .addField(":flag_br: Chegae no:", `<#${hangoverChannel.id}>`);
    const message = await channel.send(embed);
    await message.crosspost();
};
exports.sendMessage = sendMessage;
//# sourceMappingURL=index.js.map