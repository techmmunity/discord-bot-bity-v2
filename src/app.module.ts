import { Module } from "@nestjs/common";
import { DiscordModule } from "discord-nestjs";

import { Api } from "api";

import { Jobs } from "jobs";

import { DiscordConfig } from "config/discord";

@Module({
	imports: [DiscordModule.forRoot(DiscordConfig)],
	providers: [...Api, ...Jobs],
})
export class AppModule {
	//
}
