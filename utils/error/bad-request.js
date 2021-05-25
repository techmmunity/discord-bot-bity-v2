"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequest = void 0;
const common_1 = require("@nestjs/common");
const badRequest = (errors = []) => {
    throw new common_1.BadRequestException({ errors });
};
exports.badRequest = badRequest;
//# sourceMappingURL=bad-request.js.map