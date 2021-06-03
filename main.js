"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const typeorm_transactional_cls_hooked_1 = require("typeorm-transactional-cls-hooked");
const app_module_1 = require("./app.module");
const server = async () => {
    typeorm_transactional_cls_hooked_1.initializeTransactionalContext();
    typeorm_transactional_cls_hooked_1.patchTypeORMRepositoryWithBaseRepository();
    await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
};
server();
//# sourceMappingURL=main.js.map