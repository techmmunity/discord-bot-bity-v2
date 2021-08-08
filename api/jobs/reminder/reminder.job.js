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
exports.ReminderJob = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const cron = require("node-cron");
const review_1 = require("./review");
const socio_1 = require("./socio");
const jobs_schedule_1 = require("../../../config/jobs-schedule");
const active_guilds_1 = require("../../../config/active-guilds");
let ReminderJob = class ReminderJob {
    setCron() {
        this.sendReviewReminder();
        this.sendSocioReminder();
    }
    sendReviewReminder() {
        const guilds = active_guilds_1.getActiveGuilds();
        guilds.forEach(guildId => cron.schedule(jobs_schedule_1.JOBS_SCHEDULE.REVIEW_REMINDER, () => review_1.sendReviewReminder(this.discordClient, guildId)));
    }
    sendSocioReminder() {
        const guilds = active_guilds_1.getActiveGuilds();
        guilds.forEach(guildId => cron.schedule(jobs_schedule_1.JOBS_SCHEDULE.SOCIO_REMINDER, () => socio_1.sendSocioReminder(this.discordClient, guildId)));
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], ReminderJob.prototype, "discordClient", void 0);
__decorate([
    discord_nestjs_1.Once({ event: "ready" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReminderJob.prototype, "setCron", null);
ReminderJob = __decorate([
    common_1.Injectable()
], ReminderJob);
exports.ReminderJob = ReminderJob;
//# sourceMappingURL=reminder.job.js.map