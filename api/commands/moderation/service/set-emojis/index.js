"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEmojis = void 0;
const add_emoji_1 = require("./helpers/add-emoji");
const get_emojis_to_add_1 = require("./helpers/get-emojis-to-add");
const send_end_embed_1 = require("./helpers/send-end-embed");
const send_start_embed_1 = require("./helpers/send-start-embed");
const emojis_1 = require("../../../../../assets/images/emojis");
const setEmojis = async (message) => {
    const emojisToAdd = get_emojis_to_add_1.getEmojisToAdd(message);
    await send_start_embed_1.sendStartEmbed(message);
    for (const emojiName of emojisToAdd) {
        await add_emoji_1.addEmoji({
            message,
            name: emojiName,
            url: emojis_1.Emojis.static[emojiName],
        });
    }
    await send_end_embed_1.sendEndEmbed({
        message,
        emojisCreatedQtd: emojisToAdd.length,
    });
};
exports.setEmojis = setEmojis;
//# sourceMappingURL=index.js.map