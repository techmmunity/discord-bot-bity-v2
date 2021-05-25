"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
const discord_js_1 = require("discord.js");
const message_1 = require("../../../../../utils/message");
const colors_1 = require("../../../../../assets/colors");
const filterMessages = (messages) => messages.filter(message => !message.pinned);
const sendEmbedMessage = async (message, qtd) => {
    const embed = new discord_js_1.MessageEmbed()
        .setColor(colors_1.Colors.blue)
        .setTitle(`${qtd} messages have been successfully deleted!`);
    await message_1.MessageUtil.sendAndDelete(message, embed, 2.5);
};
const clear = async (message) => {
    const args = message_1.MessageUtil.getArgs(message);
    const qtdToDelete = Number(args.shift());
    if (isNaN(qtdToDelete) || qtdToDelete > 99) {
        throw new Error("INVALID_LIMIT");
    }
    const messagesToDelete = await message.channel.messages.fetch({
        limit: qtdToDelete + 1,
    });
    const filteredMessages = filterMessages(messagesToDelete);
    if (filteredMessages.size > 0) {
        await message.channel.bulkDelete(filteredMessages);
    }
    await sendEmbedMessage(message, messagesToDelete.size - 1);
};
exports.clear = clear;
//# sourceMappingURL=index.js.map