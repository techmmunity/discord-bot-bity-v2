"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementBumps = void 0;
const bump_entity_1 = require("../../../../../../entities/bump.entity");
const incrementBumps = async (BumpRepository, message) => {
    var _a;
    const userId = (_a = message.mentions.users.first()) === null || _a === void 0 ? void 0 : _a.id;
    if (!userId)
        return 0;
    const userBump = await BumpRepository.findOne({
        discordUserId: userId,
    });
    if (userBump) {
        await BumpRepository.update({
            discordUserId: userId,
        }, {
            bumps: userBump.bumps + 1,
        });
        return userBump.bumps + 1;
    }
    await BumpRepository.save({
        discordUserId: userId,
        bumps: 1,
    });
    return 1;
};
exports.incrementBumps = incrementBumps;
//# sourceMappingURL=increment-bumps.js.map