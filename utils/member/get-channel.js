"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannel = void 0;
const getChannel = (member, channelId) => member.guild.channels.cache.get(channelId);
exports.getChannel = getChannel;
//# sourceMappingURL=get-channel.js.map