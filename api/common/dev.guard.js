"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevGuard = void 0;
const guilds_1 = require("../../enums/guilds");
const roles_1 = require("../../enums/roles");
const { NODE_ENV } = process.env;
class DevGuard {
    canActive(event, [context]) {
        var _a, _b;
        const notDevEnv = NODE_ENV !== "dev";
        if (notDevEnv)
            return true;
        const notMessage = event !== "message";
        if (notMessage)
            return true;
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
exports.DevGuard = DevGuard;
//# sourceMappingURL=dev.guard.js.map