"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = void 0;
const bump_entity_1 = require("../../../../../entities/bump.entity");
const increment_bumps_1 = require("./helpers/increment-bumps");
const send_sucess_embed_1 = require("./helpers/send-sucess-embed");
const success = async (bumpRepository, message) => {
    var _a;
    const member = (_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first();
    if (!member)
        return;
    const promises = [];
    const deleteBotMessagePromise = message.delete();
    promises.push(deleteBotMessagePromise);
    const userBumpsTotal = await increment_bumps_1.incrementBumps(bumpRepository, message);
    const successMessagePromise = send_sucess_embed_1.sendSuccessEmbed({
        message,
        member,
        userBumpsTotal,
    });
    promises.push(successMessagePromise);
    return Promise.all(promises);
};
exports.success = success;
//# sourceMappingURL=index.js.map