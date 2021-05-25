import { TypeOrmModule } from "@nestjs/typeorm";

const { NODE_ENV, MONGODB_URL } = process.env;

export const MongoDbConnect = TypeOrmModule.forRoot({
	type: "mongodb",
	url: MONGODB_URL,
	synchronize: false,
	logging: NODE_ENV !== "production",
	entities: ["dist/entities/*.entity.js"],
});
