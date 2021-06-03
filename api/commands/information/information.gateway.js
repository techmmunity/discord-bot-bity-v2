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
exports.InformationGateway = void 0;
const common_1 = require("@nestjs/common");
const discord_nestjs_1 = require("discord-nestjs");
const discord_js_1 = require("discord.js");
const counters_1 = require("./service/counters");
const ping_1 = require("./service/ping");
const qtd_1 = require("./service/qtd");
const ram_1 = require("./service/ram");
const dev_guard_1 = require("../../common/dev.guard");
const tech_team_guard_1 = require("../../common/tech-team.guard");
let InformationGateway = class InformationGateway {
    counters(message) {
        return counters_1.counters(message);
    }
    ping(message) {
        return ping_1.ping(message);
    }
    qtd(message) {
        return qtd_1.qtd(message);
    }
    ram(message) {
        return ram_1.ram(message);
    }
};
__decorate([
    discord_nestjs_1.OnCommand({ name: "counters" }),
    discord_nestjs_1.UseGuards(tech_team_guard_1.TechTeamGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], InformationGateway.prototype, "counters", null);
__decorate([
    discord_nestjs_1.OnCommand({ name: "ping" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], InformationGateway.prototype, "ping", null);
__decorate([
    discord_nestjs_1.OnCommand({ name: "qtd" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], InformationGateway.prototype, "qtd", null);
__decorate([
    discord_nestjs_1.OnCommand({ name: "ram" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [discord_js_1.Message]),
    __metadata("design:returntype", void 0)
], InformationGateway.prototype, "ram", null);
InformationGateway = __decorate([
    common_1.Injectable(),
    discord_nestjs_1.UseGuards(dev_guard_1.DevGuard)
], InformationGateway);
exports.InformationGateway = InformationGateway;
//# sourceMappingURL=information.gateway.js.map