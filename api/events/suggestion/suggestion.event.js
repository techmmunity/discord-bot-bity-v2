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
exports.SuggestionEvent = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const suggest_1 = require("./service/suggest");
const suggestion_guard_1 = require("./suggestion.guard");
const active_guild_guard_1 = require("../../common/active-guild.guard");
let SuggestionEvent = class SuggestionEvent {
    suggest(message) {
        return suggest_1.suggest(message);
    }
};
__decorate([
    discord_nestjs_1.On({ event: "message" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], SuggestionEvent.prototype, "suggest", null);
SuggestionEvent = __decorate([
    common_1.Injectable(),
    discord_nestjs_1.UseGuards(active_guild_guard_1.ActiveGuildGuard, suggestion_guard_1.SuggestionGuard)
], SuggestionEvent);
exports.SuggestionEvent = SuggestionEvent;
//# sourceMappingURL=suggestion.event.js.map