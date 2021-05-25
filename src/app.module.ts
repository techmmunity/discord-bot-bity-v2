import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiscordModule } from "discord-nestjs";
import { BumpEntity } from "entities/bump.entity";

import { Api } from "api";

import { DiscordConfig } from "config/discord";
import { MongoDbConnect } from "config/mongodb";

@Module({
	imports: [
		MongoDbConnect,
		TypeOrmModule.forFeature([BumpEntity]),
		DiscordModule.forRoot(DiscordConfig),
	],
	providers: Api,
})
export class AppModule {
	//
}
