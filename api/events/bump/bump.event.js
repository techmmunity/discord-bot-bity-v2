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
exports.BumpEvent = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const bump_entity_1 = require("../../../entities/bump.entity");
const bump_guard_1 = require("./bump.guard");
const sucess_1 = require("./service/sucess");
const active_guild_guard_1 = require("../../common/active-guild.guard");
let BumpEvent = class BumpEvent {
    constructor(BumpRepository) {
        this.BumpRepository = BumpRepository;
    }
    sucess(message) {
        return sucess_1.success(this.BumpRepository, message);
    }
};
__decorate([
    discord_nestjs_1.On({ event: "message" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], BumpEvent.prototype, "sucess", null);
BumpEvent = __decorate([
    common_1.Injectable(),
    discord_nestjs_1.UseGuards(active_guild_guard_1.ActiveGuildGuard, bump_guard_1.BumpGuard),
    __param(0, typeorm_1.InjectRepository(bump_entity_1.BumpEntity)),
    __metadata("design:paramtypes", [Object])
], BumpEvent);
exports.BumpEvent = BumpEvent;
//# sourceMappingURL=bump.event.js.map