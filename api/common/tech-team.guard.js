"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechTeamGuard = void 0;
const guilds_1 = require("../../enums/guilds");
const roles_1 = require("../../enums/roles");
const users_1 = require("../../enums/users");
class TechTeamGuard {
    async canActive(event, [context]) {
        const notMessage = event !== "message";
        if (notMessage)
            return true;
        return this.isSpecialGuild(context)
            ? this.isTechTeamSpecialMember(context)
            : this.isTechTeamMember(context);
    }
    isSpecialGuild(context) {
        var _a;
        const guildId = (_a = context.guild) === null || _a === void 0 ? void 0 : _a.id;
        if (!guildId)
            return false;
        return [guilds_1.SpecialGuildEnum.STAFF, guilds_1.SpecialGuildEnum.LOGS].includes(guildId);
    }
    isTechTeamSpecialMember(context) {
        return context.author.id === users_1.UsersEnum.RAZAL;
    }
    isTechTeamMember(context) {
        var _a, _b;
        const guildId = (_a = context.guild) === null || _a === void 0 ? void 0 : _a.id;
        if (!guildId)
            return false;
        const roleId = roles_1.RolesEnum[guildId].STAFF;
        if (!roleId)
            return false;
        const hasStaffRole = ((_b = context.member) === null || _b === void 0 ? void 0 : _b.roles.cache.has(roleId)) || false;
        return hasStaffRole;
    }
}
exports.TechTeamGuard = TechTeamGuard;
//# sourceMappingURL=tech-team.guard.js.map