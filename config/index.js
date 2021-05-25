"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const { NODE_ENV } = process.env;
exports.Config = {
    version: "v1",
    prefix: NODE_ENV === "production" ? "bty " : "btt ",
    flagPrefix: "--",
    flagDelimiter: "'",
};
//# sourceMappingURL=index.js.map