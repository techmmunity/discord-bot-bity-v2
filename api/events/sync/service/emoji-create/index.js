"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiCreate = void 0;
const node_fetch_1 = require("node-fetch");
const active_guilds_1 = require("../../../../../config/active-guilds");
const filterGuildsThatAlreadyHasEmoji = (emoji) => (guilds) => guilds.filter(guild => {
    const hasEmoji = guild.emojis.cache.find(guildEmoji => guildEmoji.name === emoji.name);
    return Boolean(hasEmoji);
});
const emojiCreate = async ({ client, emoji }) => {
    const guildsIds = active_guilds_1.getActiveGuilds()
        .filter(id => id !== emoji.guild.id)
        .filter(Boolean);
    const guilds = await Promise.all(guildsIds.map(id => client.guilds.fetch(id))).then(filterGuildsThatAlreadyHasEmoji(emoji));
    if (guilds.length < 1)
        return;
    const response = await node_fetch_1.default(emoji.url, {
        method: "GET",
    });
    const imageBuffer = await response.buffer();
    await Promise.all(guilds.map(guild => guild.emojis.create(imageBuffer, emoji.name)));
};
exports.emojiCreate = emojiCreate;
//# sourceMappingURL=index.js.map