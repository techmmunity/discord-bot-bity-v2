"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logDelete = void 0;
const get_embed_delete_1 = require("./get-embed-delete");
const logDelete = ({ channel, message, color, title, }) => {
    const embed = get_embed_delete_1.getEmbedDelete({
        title,
        color,
        message,
    });
    return channel.send(embed);
};
exports.logDelete = logDelete;
//# sourceMappingURL=delete.js.map