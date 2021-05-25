"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forbidden = void 0;
const common_1 = require("@nestjs/common");
const forbidden = (errors = []) => {
    throw new common_1.ForbiddenException({ errors });
};
exports.forbidden = forbidden;
//# sourceMappingURL=forbidden.js.map