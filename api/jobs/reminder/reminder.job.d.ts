import { ClientProvider } from "discord-nestjs";
export declare class ReminderJob {
    discordClient: ClientProvider;
    setCron(): void;
    sendReviewReminder(): Promise<void[]>;
    sendSocioReminder(): Promise<void[]>;
}
