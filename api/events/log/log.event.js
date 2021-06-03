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
exports.LogEvent = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const invite_1 = require("./service/invite");
const member_1 = require("./service/member");
const message_1 = require("./service/message");
const active_guild_guard_1 = require("../../common/active-guild.guard");
const colors_1 = require("../../../assets/colors");
let LogEvent = class LogEvent {
    inviteCreate(guildInvite) {
        return invite_1.inviteLog({
            discordClient: this.discordClient,
            title: "INVITE CREATE",
            color: colors_1.COLORS.green,
            invite: guildInvite,
        });
    }
    inviteDelete(guildInvite) {
        return invite_1.inviteLog({
            discordClient: this.discordClient,
            title: "INVITE DELETE",
            color: colors_1.COLORS.red,
            invite: guildInvite,
        });
    }
    memberAdd(guildMember) {
        return member_1.member({
            discordClient: this.discordClient,
            title: "MEMBER ADD",
            color: colors_1.COLORS.green,
            memberData: guildMember,
        });
    }
    memberRemove(guildMember) {
        return member_1.member({
            discordClient: this.discordClient,
            title: "MEMBER REMOVE",
            color: colors_1.COLORS.red,
            memberData: guildMember,
        });
    }
    messageDelete(message) {
        return message_1.messageLog({
            discordClient: this.discordClient,
            title: "MESSAGE DELETE",
            color: colors_1.COLORS.red,
            message,
        });
    }
    messageEdit(oldMessageLog, newMessageLog) {
        return message_1.messageLog({
            discordClient: this.discordClient,
            title: "MESSAGE EDIT",
            color: colors_1.COLORS.blue,
            oldMessage: oldMessageLog,
            newMessage: newMessageLog,
        });
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], LogEvent.prototype, "discordClient", void 0);
__decorate([
    discord_nestjs_1.On({ event: "inviteCreate" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Invite]),
    __metadata("design:returntype", void 0)
], LogEvent.prototype, "inviteCreate", null);
__decorate([
    discord_nestjs_1.On({ event: "inviteDelete" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Invite]),
    __metadata("design:returntype", void 0)
], LogEvent.prototype, "inviteDelete", null);
__decorate([
    discord_nestjs_1.On({ event: "guildMemberAdd" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.GuildMember]),
    __metadata("design:returntype", void 0)
], LogEvent.prototype, "memberAdd", null);
__decorate([
    discord_nestjs_1.On({ event: "guildMemberRemove" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.GuildMember]),
    __metadata("design:returntype", void 0)
], LogEvent.prototype, "memberRemove", null);
__decorate([
    discord_nestjs_1.On({ event: "messageDelete" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], LogEvent.prototype, "messageDelete", null);
__decorate([
    discord_nestjs_1.On({ event: "messageUpdate" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message, discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], LogEvent.prototype, "messageEdit", null);
LogEvent = __decorate([
    common_1.Injectable(),
    discord_nestjs_1.UseGuards(active_guild_guard_1.ActiveGuildGuard)
], LogEvent);
exports.LogEvent = LogEvent;
//# sourceMappingURL=log.event.js.map