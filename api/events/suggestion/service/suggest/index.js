"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggest = void 0;
const suggest = (message) => {
    return Promise.all([message.react("👍"), message.react("👎")]);
};
exports.suggest = suggest;
//# sourceMappingURL=index.js.map