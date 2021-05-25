export interface FormatConfig {
    userId?: string;
    userName?: string;
    userCreation?: string;
    userDiscriminator?: string;
    userNickname?: string;
    serverName?: string;
    memberCount?: number;
    guildName?: string;
}
export declare const formatMessage: (text: string, { userId, userName, userCreation, userDiscriminator, userNickname, serverName, memberCount, guildName, }: FormatConfig) => string;
