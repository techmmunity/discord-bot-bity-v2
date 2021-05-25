"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorized = void 0;
const common_1 = require("@nestjs/common");
const unauthorized = (errors) => {
    throw new common_1.UnauthorizedException({ errors });
};
exports.unauthorized = unauthorized;
//# sourceMappingURL=unauthorized.js.map