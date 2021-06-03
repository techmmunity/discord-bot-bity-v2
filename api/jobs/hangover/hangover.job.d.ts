import { ClientProvider } from "discord-nestjs";
export declare class HangoverJob {
    discordClient: ClientProvider;
    setCron(): void;
    private set;
    private setup;
}
