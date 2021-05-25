"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewReminderJob = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const cron = require("node-cron");
const service_1 = require("./service");
const jobs_schedule_1 = require("../../../config/jobs-schedule");
const active_guilds_1 = require("../../../config/active-guilds");
let ReviewReminderJob = class ReviewReminderJob {
    setCron() {
        cron.schedule(jobs_schedule_1.JobsSchedule.REVIEW_REMINDER, this.sendReminder);
    }
    sendReminder() {
        const guilds = active_guilds_1.getActiveGuilds();
        return () => Promise.all(guilds.map(guildId => service_1.sendReminder(this.DiscordClient, guildId)));
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], ReviewReminderJob.prototype, "DiscordClient", void 0);
__decorate([
    discord_nestjs_1.Once({ event: "ready" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewReminderJob.prototype, "setCron", null);
ReviewReminderJob = __decorate([
    common_1.Injectable()
], ReviewReminderJob);
exports.ReviewReminderJob = ReviewReminderJob;
//# sourceMappingURL=review-reminder.job.js.map