/// <reference types="discord.js" />
export declare const memberUtil: {
    formatMessage: (member: import("discord.js").GuildMember | import("discord.js").PartialGuildMember, text: string) => string;
    getChannel: (member: import("discord.js").GuildMember | import("discord.js").PartialGuildMember, channelId: string) => import("discord.js").TextChannel;
    getGuildInvitesUrls: (member: import("discord.js").GuildMember) => Promise<string[]>;
    getGuildMemberCount: (member: import("discord.js").GuildMember) => number;
    getGuildRolesByRolesIds: (member: import("discord.js").GuildMember, roles: string[]) => import("discord.js").Role[];
    getGuildRolesByRolesNames: (member: import("discord.js").GuildMember, roles: string[]) => import("discord.js").Role[];
    isBot: (member: import("discord.js").GuildMember | import("discord.js").PartialGuildMember) => Promise<boolean>;
};
