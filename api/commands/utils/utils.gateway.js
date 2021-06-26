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
exports.UtilsGateway = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const register_1 = require("./service/register");
const suggest_1 = require("./service/suggest");
const dev_guard_1 = require("../../common/dev.guard");
let UtilsGateway = class UtilsGateway {
    suggest(message) {
        return suggest_1.suggest(message);
    }
    register(message) {
        return register_1.register(message);
    }
};
__decorate([
    discord_nestjs_1.OnCommand({ name: "suggest" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], UtilsGateway.prototype, "suggest", null);
__decorate([
    discord_nestjs_1.OnCommand({ name: "register" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], UtilsGateway.prototype, "register", null);
UtilsGateway = __decorate([
    common_1.Injectable(),
    discord_nestjs_1.UseGuards(dev_guard_1.DevGuard)
], UtilsGateway);
exports.UtilsGateway = UtilsGateway;
//# sourceMappingURL=utils.gateway.js.map