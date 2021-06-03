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
exports.HangoverJob = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const cron = require("node-cron");
const create_channel_1 = require("./service/create-channel");
const delete_channel_1 = require("./service/delete-channel");
const get_clear_hangover_schedule_1 = require("./service/helpers/get-clear-hangover-schedule");
const get_hangover_schedule_by_guild_1 = require("./service/helpers/get-hangover-schedule-by-guild");
const get_name_1 = require("./service/helpers/get-name");
const send_message_1 = require("./service/send-message");
const guilds_1 = require("../../../enums/guilds");
const active_guilds_1 = require("../../../config/active-guilds");
const hangover_1 = require("../../../config/hangover");
let HangoverJob = class HangoverJob {
    setCron() {
        const guilds = active_guilds_1.getActiveGuilds();
        guilds.forEach(guildId => this.set(guildId));
    }
    set(guildId) {
        const hangoverShedule = get_hangover_schedule_by_guild_1.getHangoverScheduleByGuild(guildId);
        const clearHangoutSchedule = get_clear_hangover_schedule_1.getClearHangoverSchedule(guildId);
        const categoryName = get_name_1.getCategoryName(hangover_1.HANGOVER.day[guildId]);
        const channelName = get_name_1.getChannelName(hangover_1.HANGOVER.day[guildId]);
        const params = {
            discordClient: this.discordClient,
            guildId,
            categoryName,
            channelName,
        };
        cron.schedule(hangoverShedule, () => this.setup(params));
        cron.schedule(clearHangoutSchedule, delete_channel_1.deleteChannel(params));
    }
    async setup(params) {
        const channel = await create_channel_1.createChannel(params);
        await send_message_1.sendMessage(Object.assign(Object.assign({}, params), { hangoverChannel: channel }));
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], HangoverJob.prototype, "discordClient", void 0);
__decorate([
    discord_nestjs_1.Once({ event: "ready" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HangoverJob.prototype, "setCron", null);
HangoverJob = __decorate([
    common_1.Injectable()
], HangoverJob);
exports.HangoverJob = HangoverJob;
//# sourceMappingURL=hangover.job.js.map