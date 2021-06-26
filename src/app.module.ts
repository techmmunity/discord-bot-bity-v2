import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiscordModule } from "discord-nestjs";
import { BumpEntity } from "entities/bump.entity";
import { ChallengesEntity } from "entities/challenge.entity";

import { API } from "api";

import { DISCORD_CONFIG } from "config/discord";
import { MONGO_DB_CONNECT } from "config/mongodb";

@Module({
	imports: [
		MONGO_DB_CONNECT,
		TypeOrmModule.forFeature([BumpEntity, ChallengesEntity]),
		DiscordModule.forRoot(DISCORD_CONFIG),
	],
	providers: API,
})
export class AppModule {
	//
}
