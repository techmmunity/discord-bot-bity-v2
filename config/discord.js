"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISCORD_CONFIG = void 0;
const active_guilds_1 = require("./active-guilds");
const url_1 = require("./url");
const guilds_1 = require("../enums/guilds");
const config_1 = require("./");
const { DISCORD_TOKEN } = process.env;
exports.DISCORD_CONFIG = {
    token: DISCORD_TOKEN,
    commandPrefix: config_1.CONFIG.prefix,
    allowGuilds: [...active_guilds_1.getActiveGuilds(), guilds_1.SpecialGuildEnum.STAFF],
    presence: {
        activity: {
            name: url_1.URLS.LANDING_PAGE_SHORT,
            type: "PLAYING",
        },
    },
};
//# sourceMappingURL=discord.js.map