import { Module } from "@nestjs/common";
import { DiscordModule } from "discord-nestjs";

import { Api } from "api";

import { DiscordConfig } from "config/discord";

@Module({
	imports: [DiscordModule.forRoot(DiscordConfig)],
	providers: Api,
})
export class AppModule {
	//
}
