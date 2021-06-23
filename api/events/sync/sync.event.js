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
exports.SyncEvent = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const ban_1 = require("./service/ban");
const emoji_create_1 = require("./service/emoji-create");
const emoji_update_1 = require("./service/emoji-update");
let SyncEvent = class SyncEvent {
    ban(guildId, userId) {
        return ban_1.ban({
            client: this.discordClient.getClient(),
            guildId,
            userId,
        });
    }
    emojiCreate(emoji) {
        return emoji_create_1.emojiCreate({
            client: this.discordClient.getClient(),
            emoji,
        });
    }
    emojiUpdate(oldEmoji, newEmoji) {
        return emoji_update_1.emojiUpdate({
            client: this.discordClient.getClient(),
            oldEmoji,
            newEmoji,
        });
    }
};
__decorate([
    discord_nestjs_1.Client(),
    __metadata("design:type", Object)
], SyncEvent.prototype, "discordClient", void 0);
__decorate([
    discord_nestjs_1.On({ event: "guildBanAdd" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SyncEvent.prototype, "ban", null);
__decorate([
    discord_nestjs_1.On({ event: "emojiCreate" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.GuildEmoji]),
    __metadata("design:returntype", void 0)
], SyncEvent.prototype, "emojiCreate", null);
__decorate([
    discord_nestjs_1.On({ event: "emojiUpdate" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.GuildEmoji, discord_js_1.GuildEmoji]),
    __metadata("design:returntype", void 0)
], SyncEvent.prototype, "emojiUpdate", null);
SyncEvent = __decorate([
    common_1.Injectable()
], SyncEvent);
exports.SyncEvent = SyncEvent;
//# sourceMappingURL=sync.event.js.map