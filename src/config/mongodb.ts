import { TypeOrmModule } from "@nestjs/typeorm";

const { NODE_ENV, MONGODB_URL } = process.env;

const notIsPrd = NODE_ENV !== "production";

export const MongoDbConnect = TypeOrmModule.forRoot({
	type: "mongodb",
	url: MONGODB_URL,
	synchronize: false,
	logging: notIsPrd,
	entities: [notIsPrd ? "dist/entities/*.entity.js" : "entities/*.entity.js"],
});
