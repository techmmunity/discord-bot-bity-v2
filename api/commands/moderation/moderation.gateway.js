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
exports.ModerationGateway = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const clear_1 = require("./service/clear");
const get_challenge_1 = require("./service/get-challenge");
const register_1 = require("./service/register");
const set_emojis_1 = require("./service/set-emojis");
const tech_team_guard_1 = require("../../common/tech-team.guard");
let ModerationGateway = class ModerationGateway {
    clear(message) {
        return clear_1.clear(message);
    }
    register(message) {
        return register_1.register(message);
    }
    setEmojis(message) {
        return set_emojis_1.setEmojis(message);
    }
    getChallenge(message) {
        return get_challenge_1.getChallenge(message);
    }
};
__decorate([
    discord_nestjs_1.OnCommand({ name: "clear" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], ModerationGateway.prototype, "clear", null);
__decorate([
    discord_nestjs_1.OnCommand({ name: "register" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], ModerationGateway.prototype, "register", null);
__decorate([
    discord_nestjs_1.OnCommand({ name: "set-emojis" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], ModerationGateway.prototype, "setEmojis", null);
__decorate([
    discord_nestjs_1.OnCommand({ name: "get-challenge" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], ModerationGateway.prototype, "getChallenge", null);
ModerationGateway = __decorate([
    common_1.Injectable(),
    discord_nestjs_1.UseGuards(tech_team_guard_1.TechTeamGuard)
], ModerationGateway);
exports.ModerationGateway = ModerationGateway;
//# sourceMappingURL=moderation.gateway.js.map