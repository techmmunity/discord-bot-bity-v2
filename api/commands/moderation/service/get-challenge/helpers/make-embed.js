"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEmbed = void 0;
const discord_js_1 = require("discord.js");
const url_1 = require("../../../../../../config/url");
const colors_1 = require("../../../../../../assets/colors");
const images_1 = require("../../../../../../assets/images");
const challenge_1 = require("../../../../../../types/challenge");
const makeEmbed = (challenge) => {
    const embed = new discord_js_1.MessageEmbed()
        .setTitle(challenge.title)
        .setColor(colors_1.COLORS.turquoise)
        .setDescription(challenge.description)
        .setAuthor("Techmmunity", images_1.IMAGES.techmmunityLogo, url_1.URLS.LANDING_PAGE_COMPLETE)
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