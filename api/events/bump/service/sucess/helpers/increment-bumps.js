"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementBumps = void 0;
const bump_entity_1 = require("../../../../../../entities/bump.entity");
const incrementBumps = async (BumpRepository, message) => {
    const userBump = await BumpRepository.findOne({
        discordUserId: message.author.id,
    });
    if (userBump) {
        await BumpRepository.update({
            discordUserId: message.author.id,
        }, {
            bumps: userBump.bumps + 1,
        });
        return userBump.bumps + 1;
    }
    await BumpRepository.save({
        discordUserId: message.author.id,
        bumps: 1,
    });
    return 1;
};
exports.incrementBumps = incrementBumps;
//# sourceMappingURL=increment-bumps.js.map