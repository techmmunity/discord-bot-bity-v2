"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qtd = void 0;
const discord_js_1 = require("discord.js");
const get_channel_qtd_by_type_1 = require("./helpers/get-channel-qtd-by-type");
const get_emojis_by_type_1 = require("./helpers/get-emojis-by-type");
const get_emojis_limit_1 = require("./helpers/get-emojis-limit");
const markdown_1 = require("../../../../../utils/markdown");
const colors_1 = require("../../../../../assets/colors");
const LINE_LENGTH = 28;
const formatNameAndValue = ({ name, value }) => {
    const limit = LINE_LENGTH - String(value).length;
    return `${name.padEnd(limit, " ")}${value}`;
};
const getDescription = (message) => {
    var _a;
    const { text, voice, news, category, store } = get_channel_qtd_by_type_1.getChannelQtdByType(message);
    const { regular, animated } = get_emojis_by_type_1.getEmojisByType(message);
    const emojisLimit = get_emojis_limit_1.getEmojisLimit(message);
    const rolesLimit = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.roles.cache.size;
    const fields = [
        {
            name: "Categories",
            value: category,
        },
        "",
        {
            name: "Text Channels",
            value: text,
        },
        {
            name: "Voice Channels",
            value: voice,
        },
        {
            name: "News Channels",
            value: news,
        },
        {
            name: "Store Channels",
            value: store,
        },
        "",
        {
            name: "Regular Emojis",
            value: `${regular} / ${emojisLimit.regular}`,
        },
        {
            name: "Animated Emojis",
            value: `${animated} / ${emojisLimit.animated}`,
        },
        "",
        {
            name: "Total Roles",
            value: `${rolesLimit} / 250`,
        },
        {
            name: "Total Channels",
            value: `${text + voice + news + category + store} / 500`,
        },
    ]
        .map(value => typeof value === "string" ? value : formatNameAndValue(value))
        .join("\n");
    return markdown_1.markdownUtil.codeBlock(fields);
};
const qtd = async (message) => {
    const embed = new discord_js_1.MessageEmbed()
        .setTitle("Guild Quantities")
        .setColor(colors_1.COLORS.blue)
        .setDescription(getDescription(message));
    await message.channel.send(embed);
};
exports.qtd = qtd;
//# sourceMappingURL=index.js.map