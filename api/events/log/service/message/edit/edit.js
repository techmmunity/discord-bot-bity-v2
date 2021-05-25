"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logEdit = void 0;
const get_embed_edit_1 = require("./get-embed-edit");
const logEdit = ({ channel, oldMessage, newMessage, color, title, }) => {
    const embed = get_embed_edit_1.getEmbedEdit({
        title,
        color,
        newMessage,
        oldMessage,
    });
    return channel.send(embed);
};
exports.logEdit = logEdit;
//# sourceMappingURL=edit.js.map