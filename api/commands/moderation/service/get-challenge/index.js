"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChallenge = void 0;
const make_embed_1 = require("./helpers/make-embed");
const message_1 = require("../../../../../utils/message");
const challenges_1 = require("../../../../../config/challenges");
const getChallenge = async (message) => {
    const challengeId = message_1.messageUtil.getArgs(message).shift();
    const challenge = challenges_1.CHALLENGES.find(challengeData => challengeData.id === challengeId);
    if (challenge) {
        const embed = make_embed_1.makeEmbed(challenge);
        await message.channel.send(embed);
        return;
    }
    await message.channel.send("Challenge not found!");
};
exports.getChallenge = getChallenge;
//# sourceMappingURL=index.js.map