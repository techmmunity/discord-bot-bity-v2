import { ClientProvider } from "discord-nestjs";
export declare type RolesIds = Array<string>;
export declare class UpdateCountersJob {
    discordClient: ClientProvider;
    setCron(): void;
    private setJob;
}