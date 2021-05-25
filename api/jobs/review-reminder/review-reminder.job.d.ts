import { ClientProvider } from "discord-nestjs";
export declare class ReviewReminderJob {
    DiscordClient: ClientProvider;
    setCron(): void;
    sendReminder(): () => Promise<void[]>;
}
