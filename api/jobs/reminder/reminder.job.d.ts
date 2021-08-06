import { ClientProvider } from "discord-nestjs";
export declare class ReminderJob {
    discordClient: ClientProvider;
    setCron(): void;
    sendReviewReminder(): void;
    sendSocioReminder(): void;
}
