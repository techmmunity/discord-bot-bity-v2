"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = void 0;
const bump_entity_1 = require("../../../../../entities/bump.entity");
const increment_bumps_1 = require("./helpers/increment-bumps");
const send_doest_have_role_embed_1 = require("./helpers/send-doest-have-role-embed");
const send_sucess_embed_1 = require("./helpers/send-sucess-embed");
const guilds_1 = require("../../../../../enums/guilds");
const roles_1 = require("../../../../../enums/roles");
const getBumpRole = (member) => {
    const guildId = member.guild.id;
    const bumpRole = member.roles.cache.get(roles_1.RolesEnum[guildId].BUMP);
    return bumpRole;
};
const success = async (BumpRepository, message) => {
    var _a;
    const member = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
    if (!member)
        return;
    const bumpRole = getBumpRole(member);
    const promises = [];
    const deleteBotMessagePromise = message.delete();
    promises.push(deleteBotMessagePromise);
    if (bumpRole) {
        const userBumpsTotal = await increment_bumps_1.incrementBumps(BumpRepository, message);
        const succesMessagePromise = send_sucess_embed_1.sendSuccessEmbed({
            message,
            member,
            userBumpsTotal,
        });
        promises.push(succesMessagePromise);
    }
    else {
        const doesntHasRolePromise = send_doest_have_role_embed_1.sendDoesntHasRoleEmbed({
            message,
        });
        promises.push(doesntHasRolePromise);
    }
    return Promise.all(promises);
};
exports.success = success;
//# sourceMappingURL=index.js.map