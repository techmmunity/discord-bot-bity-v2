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
exports.ChallengesEntity = void 0;
const typeorm_1 = require("typeorm");
const challenge_level_1 = require("../enums/challenge-level");
let ChallengesEntity = class ChallengesEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn({
        name: "_id",
    }),
    __metadata("design:type", typeorm_1.ObjectID)
], ChallengesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengesEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengesEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengesEntity.prototype, "level", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengesEntity.prototype, "language", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengesEntity.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengesEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ChallengesEntity.prototype, "count", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ChallengesEntity.prototype, "createdBy", void 0);
ChallengesEntity = __decorate([
    typeorm_1.Entity("challenges")
], ChallengesEntity);
exports.ChallengesEntity = ChallengesEntity;
//# sourceMappingURL=challenge.entity.js.map