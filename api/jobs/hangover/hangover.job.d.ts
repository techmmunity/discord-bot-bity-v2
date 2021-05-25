import { ClientProvider } from "discord-nestjs";
export declare class HangoverJob {
    DiscordClient: ClientProvider;
    setCron(): void;
    private set;
    private setup;
}
