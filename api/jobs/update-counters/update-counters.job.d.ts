import { ClientProvider } from "discord-nestjs";
export declare type RolesIds = Array<string>;
export declare class UpdateCountersJob {
    DiscordClient: ClientProvider;
    setCron(): void;
    private setJob;
}
