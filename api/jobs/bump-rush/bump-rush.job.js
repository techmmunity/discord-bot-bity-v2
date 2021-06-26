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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BumpRushJob = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const bump_entity_1 = require("../../../entities/bump.entity");
const cron = require("node-cron");
const jobs_schedule_1 = require("../../../config/jobs-schedule");
const channels_1 = require("../../../enums/channels");
const guilds_1 = require("../../../enums/guilds");
const colors_1 = require("../../../assets/colors");
let BumpRushJob = class BumpRushJob {
    constructor(bumpRepository) {
        this.bumpRepository = bumpRepository;
    }
    setCron() {
        cron.schedule(jobs_schedule_1.JOBS_SCHEDULE.BUMP_RANK, () => this.setup(guilds_1.GuildEnum.DEV));
    }
    async getChannel(guildId) {
        const guild = await this.discordClient.getClient().guilds.fetch(guildId);
        if (!guild)
            return;
        const channelId = channels_1.ChannelEnum[guildId].BUMP_RUSH;
        const channel = guild.channels.cache.get(channelId);
        return channel;
    }
    formatBumps(bumps, guildId) {
        const ranks = bumps.map(({ bumps: bumpsCount, discordUserId }, index) => {
            const rank = String(index + 1).padStart(2, "0");
            return `**#${rank} |** <@${discordUserId}> --- **${bumpsCount}**`;
        });
        return new discord_js_1.MessageEmbed()
            .setTitle("Bump Rush Rank!")
            .setColor(colors_1.getMainColor(guildId))
            .setDescription(ranks.join("\n"));
    }
    async setup(guildId) {
        const channel = await this.getChannel(guildId);
        if (!channel)
            return;
        const bumps = await this.bumpRepository.find({
            order: {
                bumps: "DESC",
            },
            take: 10,
        });
        const bumpsFormatted = this.formatBumps(bumps, guildId);
        await channel.send(bumpsFormatted);
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], BumpRushJob.prototype, "discordClient", void 0);
__decorate([
    discord_nestjs_1.Once({ event: "ready" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BumpRushJob.prototype, "setCron", null);
BumpRushJob = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bump_entity_1.BumpEntity)),
    __metadata("design:paramtypes", [Object])
], BumpRushJob);
exports.BumpRushJob = BumpRushJob;
//# sourceMappingURL=bump-rush.job.js.map