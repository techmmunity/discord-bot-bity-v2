"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordConfig = void 0;
const active_guilds_1 = require("./active-guilds");
const url_1 = require("./url");
const guilds_1 = require("../enums/guilds");
const config_1 = require("./");
const { DISCORD_TOKEN } = process.env;
exports.DiscordConfig = {
    token: DISCORD_TOKEN,
    commandPrefix: config_1.Config.prefix,
    allowGuilds: [...active_guilds_1.getActiveGuilds(), guilds_1.SpecialGuildEnum.STAFF],
    presence: {
        activity: {
            name: url_1.Urls.LANDING_PAGE_SHORT,
            type: "PLAYING",
        },
    },
};
//# sourceMappingURL=discord.js.map