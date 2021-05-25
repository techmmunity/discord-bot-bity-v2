"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const common_1 = require("@nestjs/common");
const notFound = (errors = []) => {
    throw new common_1.NotFoundException({ errors });
};
exports.notFound = notFound;
//# sourceMappingURL=not-found.js.map