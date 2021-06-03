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
exports.ChallengeJob = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const cron = require("node-cron");
const make_embed_1 = require("../../commands/moderation/service/get-challenge/helpers/make-embed");
const jobs_schedule_1 = require("../../../config/jobs-schedule");
const channels_1 = require("../../../enums/channels");
const guilds_1 = require("../../../enums/guilds");
const roles_1 = require("../../../enums/roles");
const challenges_1 = require("../../../config/challenges");
const { NODE_ENV } = process.env;
let ChallengeJob = class ChallengeJob {
    setCron() {
        cron.schedule(jobs_schedule_1.JOBS_SCHEDULE.CHALLENGE, () => this.setup(guilds_1.GuildEnum.PROGRAMMING));
    }
    getChallenge() {
        const randomIndex = Math.floor(Math.random() * challenges_1.CHALLENGES.length);
        return challenges_1.CHALLENGES[randomIndex];
    }
    async getChannel(guildId) {
        const client = this.discordClient.getClient();
        const guild = await client.guilds.fetch(guildId);
        if (NODE_ENV === "production") {
            return guild.channels.cache.get(channels_1.ChannelEnum[guildId].CHALLENGES);
        }
        return guild.channels.cache.get(channels_1.ChannelEnum[guildId].TESTS);
    }
    async setup(guildId) {
        const challenge = this.getChallenge();
        const embed = make_embed_1.makeEmbed(challenge);
        const channel = await this.getChannel(guildId);
        const message = await channel.send({
            content: `<@&${roles_1.RolesEnum[guildId].CHALLENGES}>`,
            embed,
        });
        if (NODE_ENV === "production") {
            await message.crosspost();
        }
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], ChallengeJob.prototype, "discordClient", void 0);
__decorate([
    discord_nestjs_1.Once({ event: "ready" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChallengeJob.prototype, "setCron", null);
ChallengeJob = __decorate([
    common_1.Injectable()
], ChallengeJob);
exports.ChallengeJob = ChallengeJob;
//# sourceMappingURL=challenge.job.js.map