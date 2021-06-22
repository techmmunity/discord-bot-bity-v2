"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const add_roles_1 = require("./helpers/add-roles");
const send_server_explanation_message_1 = require("./helpers/send-server-explanation-message");
const send_welcome_message_1 = require("./helpers/send-welcome-message");
const message_1 = require("../../../../../utils/message");
const guilds_1 = require("../../../../../enums/guilds");
const getMembers = (message) => message.mentions.members;
const register = async (message) => {
    var _a;
    const members = getMembers(message);
    const flags = message_1.messageUtil.getFlags(message);
    if (members.size < 1) {
        throw new Error("MISSING_ARGUMENT");
    }
    const guildId = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.id;
    const promises = [];
    const addRolesPromises = Promise.all(members.map(member => add_roles_1.addRoles({ member, guildId, flags, seniority: "STARTER" })));
    promises.push(addRolesPromises);
    if (!flags.silent) {
        const sendWelcomeMessagesPromises = Promise.all(members.map(member => send_welcome_message_1.sendWelcomeMessage(message, member, guildId)));
        promises.push(sendWelcomeMessagesPromises);
    }
    await Promise.all(promises);
    if (!flags.silent) {
        await send_server_explanation_message_1.sendServerExplanationMessage(message);
    }
};
exports.register = register;
//# sourceMappingURL=index.js.map