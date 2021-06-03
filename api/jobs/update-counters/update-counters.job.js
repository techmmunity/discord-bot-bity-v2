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
exports.UpdateCountersJob = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const cron = require("node-cron");
const service_1 = require("./service");
const jobs_schedule_1 = require("../../../config/jobs-schedule");
const guilds_1 = require("../../../enums/guilds");
const active_guilds_1 = require("../../../config/active-guilds");
let UpdateCountersJob = class UpdateCountersJob {
    setCron() {
        const guilds = active_guilds_1.getActiveGuilds();
        guilds.forEach(guildId => {
            cron.schedule(jobs_schedule_1.JOBS_SCHEDULE.UPDATE_COUNTERS, this.setJob(guildId));
        });
    }
    setJob(guildId) {
        return async () => Promise.all(await service_1.updateCounters(this.discordClient, guildId));
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], UpdateCountersJob.prototype, "discordClient", void 0);
__decorate([
    discord_nestjs_1.Once({ event: "ready" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UpdateCountersJob.prototype, "setCron", null);
UpdateCountersJob = __decorate([
    common_1.Injectable()
], UpdateCountersJob);
exports.UpdateCountersJob = UpdateCountersJob;
//# sourceMappingURL=update-counters.job.js.map