"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const add_roles_1 = require("./helpers/add-roles");
const send_welcome_message_1 = require("./helpers/send-welcome-message");
const message_1 = require("../../../../../utils/message");
const guilds_1 = require("../../../../../enums/guilds");
const roles_1 = require("../../../../../enums/roles");
const register = async (message) => {
    var _a;
    const guildId = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.id;
    const member = message.member;
    const registered = member.roles.cache.get(roles_1.RolesEnum[guildId].REGISTERED);
    if (registered) {
        return;
    }
    const flags = message_1.messageUtil.getFlags(message);
    await add_roles_1.addRoles({
        member,
        guildId,
        flags,
    });
    await send_welcome_message_1.sendWelcomeMessage(message, member, guildId);
    await message.delete();
};
exports.register = register;
//# sourceMappingURL=index.js.map