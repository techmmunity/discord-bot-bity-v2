"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEmbed = void 0;
const discord_js_1 = require("discord.js");
const challenge_entity_1 = require("../../../../entities/challenge.entity");
const guilds_1 = require("../../../../enums/guilds");
const url_1 = require("../../../../config/url");
const colors_1 = require("../../../../assets/colors");
const images_1 = require("../../../../assets/images");
const makeEmbed = (challenge, guildId) => {
    const embed = new discord_js_1.MessageEmbed()
        .setTitle(challenge.title)
        .setColor(colors_1.getMainColor(guildId))
        .setDescription(challenge.description)
        .setAuthor("Techmmunity", images_1.IMAGES.techmmunityLogo, url_1.URLS.SITE_COMPLETE)
        .addFields([
        {
            name: "Como funcionam os desafios?",
            value: "Veja a mensagem pinada nesse canal :wink:",
        },
        {
            name: "Linguagem",
            value: challenge.language,
            inline: true,
        },
        {
            name: "Nivel",
            value: challenge.level,
            inline: true,
        },
        {
            name: "ID",
            value: challenge.id,
            inline: true,
        },
    ]);
    if (challenge.image) {
        embed.setImage(challenge.image);
    }
    return embed;
};
exports.makeEmbed = makeEmbed;
//# sourceMappingURL=make-embed.js.map