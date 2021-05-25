"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflict = void 0;
const common_1 = require("@nestjs/common");
const conflict = (errors = []) => {
    throw new common_1.ConflictException({ errors });
};
exports.conflict = conflict;
//# sourceMappingURL=conflict.js.map