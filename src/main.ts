import { NestFactory } from "@nestjs/core";
import { config } from "dotenv";

import { AppModule } from "./app.module";

config();

async function server() {
	await NestFactory.createApplicationContext(AppModule);
}

server();
