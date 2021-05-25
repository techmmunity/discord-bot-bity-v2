"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbConnect = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const { NODE_ENV, MONGODB_URL } = process.env;
const notIsPrd = NODE_ENV !== "production";
exports.MongoDbConnect = typeorm_1.TypeOrmModule.forRoot({
    type: "mongodb",
    url: MONGODB_URL,
    synchronize: false,
    logging: notIsPrd,
    entities: [notIsPrd ? "dist/entities/*.entity.js" : "entities/*.entity.js"],
});
//# sourceMappingURL=mongodb.js.map