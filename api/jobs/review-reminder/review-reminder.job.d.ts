import { ClientProvider } from "discord-nestjs";
export declare class ReviewReminderJob {
    discordClient: ClientProvider;
    setCron(): void;
    sendReminder(): () => Promise<void[]>;
}
