"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internal = void 0;
const common_1 = require("@nestjs/common");
const internal = (errors) => {
    throw new common_1.InternalServerErrorException({ errors });
};
exports.internal = internal;
//# sourceMappingURL=internal.js.map