"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainColor = exports.COLORS = void 0;
const guilds_1 = require("../enums/guilds");
exports.COLORS = {
    dev: "#01d2ce",
    graphic: "#fe0077",
    sound: "#6500ea",
    robotic: "#007deb",
    management: "#ff9901",
    marketing: "#f40428",
    turquoise: "#2BA097",
    green: "#07ed1e",
    yellow: "#ffc800",
    red: "#e30e0e",
    blue: "#4287f5",
    twitch: "#9146FF",
};
const getMainColor = (guildId) => {
    switch (guildId) {
        case guilds_1.GuildEnum.DEV:
            return exports.COLORS.dev;
        case guilds_1.GuildEnum.GRAPHIC:
            return exports.COLORS.graphic;
        case guilds_1.GuildEnum.SOUND:
            return exports.COLORS.sound;
        case guilds_1.GuildEnum.ROBOTIC:
            return exports.COLORS.robotic;
        case guilds_1.GuildEnum.MANAGEMENT:
            return exports.COLORS.management;
        case guilds_1.GuildEnum.MARKETING:
            return exports.COLORS.marketing;
        default:
            return "";
    }
};
exports.getMainColor = getMainColor;
//# sourceMappingURL=colors.js.map