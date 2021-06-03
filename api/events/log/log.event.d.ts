import { ClientProvider } from "discord-nestjs";
import { GuildMember, Invite, Message } from "discord.js";
export declare class LogEvent {
    discordClient: ClientProvider;
    inviteCreate(guildInvite: Invite): Promise<Message>;
    inviteDelete(guildInvite: Invite): Promise<Message>;
    memberAdd(guildMember: GuildMember): Promise<Message>;
    memberRemove(guildMember: GuildMember): Promise<Message>;
    messageDelete(message: Message): Promise<Message> | undefined;
    messageEdit(oldMessageLog: Message, newMessageLog: Message): Promise<Message> | undefined;
}
