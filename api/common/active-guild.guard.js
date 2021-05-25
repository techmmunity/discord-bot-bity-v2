"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveGuildGuard = void 0;
const guilds_1 = require("../../enums/guilds");
const active_guilds_1 = require("../../config/active-guilds");
class ActiveGuildGuard {
    canActive(_, [context]) {
        var _a;
        const guildId = (_a = context.guild) === null || _a === void 0 ? void 0 : _a.id;
        return active_guilds_1.getActiveGuilds().includes(guildId);
    }
}
exports.ActiveGuildGuard = ActiveGuildGuard;
//# sourceMappingURL=active-guild.guard.js.map