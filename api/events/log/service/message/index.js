"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageLog = void 0;
const delete_1 = require("./delete/delete");
const edit_1 = require("./edit/edit");
const get_channel_1 = require("./helpers/get-channel");
const messageLog = (params) => {
    const { message, newMessage, oldMessage } = params;
    const channel = get_channel_1.getChannel(params);
    if (message) {
        return delete_1.logDelete(Object.assign({ channel }, params));
    }
    if (oldMessage && newMessage) {
        return edit_1.logEdit(Object.assign({ channel }, params));
    }
};
exports.messageLog = messageLog;
//# sourceMappingURL=index.js.map