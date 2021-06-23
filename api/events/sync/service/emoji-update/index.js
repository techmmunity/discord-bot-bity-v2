"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiUpdate = void 0;
const active_guilds_1 = require("../../../../../config/active-guilds");
const emojiUpdate = async ({ client, oldEmoji, newEmoji, }) => {
    const guildsIds = active_guilds_1.getActiveGuilds()
        .filter(id => id !== oldEmoji.guild.id)
        .filter(Boolean);
    const guilds = await Promise.all(guildsIds.map(id => client.guilds.fetch(id)));
    const emojis = guilds
        .map(guild => guild.emojis.cache.find(emoji => emoji.name === oldEmoji.name))
        .filter(Boolean);
    if (emojis.length < 1)
        return;
    await Promise.all(emojis.map(emoji => emoji === null || emoji === void 0 ? void 0 : emoji.edit({
        name: newEmoji.name,
    })));
};
exports.emojiUpdate = emojiUpdate;
//# sourceMappingURL=index.js.map