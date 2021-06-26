"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeLevelValues = exports.ChallengeLevelEnum = void 0;
const get_values_1 = require("./helpers/get-values");
var ChallengeLevelEnum;
(function (ChallengeLevelEnum) {
    ChallengeLevelEnum["STARTER"] = "STARTER";
    ChallengeLevelEnum["JUNIOR"] = "JUNIOR";
    ChallengeLevelEnum["MIDDLE"] = "MIDDLE";
    ChallengeLevelEnum["SENIOR"] = "SENIOR";
    ChallengeLevelEnum["SPECIALIST"] = "SPECIALIST";
})(ChallengeLevelEnum = exports.ChallengeLevelEnum || (exports.ChallengeLevelEnum = {}));
const ChallengeLevelValues = () => get_values_1.getValues(ChallengeLevelEnum);
exports.ChallengeLevelValues = ChallengeLevelValues;
//# sourceMappingURL=challenge-level.js.map