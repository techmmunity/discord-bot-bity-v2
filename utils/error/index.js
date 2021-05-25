"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUtil = void 0;
const bad_request_1 = require("./bad-request");
const conflict_1 = require("./conflict");
const forbidden_1 = require("./forbidden");
const internal_1 = require("./internal");
const not_found_1 = require("./not-found");
const unauthorized_1 = require("./unauthorized");
exports.ErrorUtil = {
    badRequest: bad_request_1.badRequest,
    conflict: conflict_1.conflict,
    forbidden: forbidden_1.forbidden,
    internal: internal_1.internal,
    unauthorized: unauthorized_1.unauthorized,
    notFound: not_found_1.notFound,
};
//# sourceMappingURL=index.js.map