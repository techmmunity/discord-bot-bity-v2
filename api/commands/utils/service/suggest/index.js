"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggest = void 0;
const discord_js_1 = require("discord.js");
const channels_1 = require("../../../../../enums/channels");
const guilds_1 = require("../../../../../enums/guilds");
const config_1 = require("../../../../../config");
const colors_1 = require("../../../../../assets/colors");
const getSuggestChannel = (message) => {
    const guild = message.guild;
    return guild.channels.cache.get(channels_1.ChannelEnum[guild.id].SUGGESTIONS);
};
const getNickname = (message) => { var _a; return ((_a = message.member) === null || _a === void 0 ? void 0 : _a.nickname) || message.author.username; };
const getSuggestion = (message) => {
    const command = `${config_1.CONFIG.prefix}suggest`;
    return message.content.replace(command, "");
};
const suggest = async (message) => {
    var _a;
    const suggestionsChannel = getSuggestChannel(message);
    const embed = new discord_js_1.MessageEmbed()
        .setColor(colors_1.getMainColor((_a = message.guild) === null || _a === void 0 ? void 0 : _a.id))
        .setAuthor(getNickname(message), message.author.avatarURL())
        .setDescription(getSuggestion(message));
    const suggestion = await suggestionsChannel.send(embed);
    await Promise.all([suggestion.react("👍"), suggestion.react("👎")]);
};
exports.suggest = suggest;
//# sourceMappingURL=index.js.map