"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChannel = void 0;
const get_guild_1 = require("../helpers/get-guild");
const guilds_1 = require("../../../../../enums/guilds");
const roles_1 = require("../../../../../enums/roles");
const createChannel = async ({ discordClient, guildId, categoryName, channelName, }) => {
    const guild = get_guild_1.getGuild(discordClient, guildId);
    const registredRole = guild.roles.cache.get(roles_1.RolesEnum[guildId].REGISTRED);
    const everyoneRole = guild.roles.cache.find(role => role.name === "@everyone");
    const hangoverFridayCategory = await guild.channels.create(categoryName, {
        type: "category",
        position: 0,
        permissionOverwrites: [
            {
                id: registredRole,
                allow: ["VIEW_CHANNEL"],
            },
            {
                id: everyoneRole,
                deny: ["VIEW_CHANNEL"],
            },
        ],
    });
    const [textChannel] = await Promise.all([
        guild.channels.create(channelName, {
            type: "text",
            parent: hangoverFridayCategory,
        }),
        guild.channels.create(channelName, {
            type: "voice",
            parent: hangoverFridayCategory,
        }),
    ]);
    return textChannel;
};
exports.createChannel = createChannel;
//# sourceMappingURL=index.js.map