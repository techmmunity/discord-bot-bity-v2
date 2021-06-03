import { NestFactory } from "@nestjs/core";
import {
	initializeTransactionalContext,
	patchTypeORMRepositoryWithBaseRepository,
} from "typeorm-transactional-cls-hooked";

import { AppModule } from "./app.module";

const server = async () => {
	initializeTransactionalContext();
	patchTypeORMRepositoryWithBaseRepository();

	await NestFactory.createApplicationContext(AppModule);
};

server();
