"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const information_gateway_1 = require("./information/information.gateway");
const message_gateway_1 = require("./message/message.gateway");
const moderation_gateway_1 = require("./moderation/moderation.gateway");
exports.Commands = [information_gateway_1.InformationGateway, message_gateway_1.MessageGateway, moderation_gateway_1.ModerationGateway];
//# sourceMappingURL=index.js.map