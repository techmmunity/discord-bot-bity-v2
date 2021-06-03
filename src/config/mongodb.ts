import { TypeOrmModule } from "@nestjs/typeorm";

const { NODE_ENV, MONGODB_URL } = process.env;

// eslint-disable-next-line @typescript-eslint/naming-convention
const notIsPrd = NODE_ENV !== "production";

export const MONGO_DB_CONNECT = TypeOrmModule.forRoot({
	type: "mongodb",
	url: MONGODB_URL,
	synchronize: false,
	logging: notIsPrd,
	entities: [notIsPrd ? "dist/entities/*.entity.js" : "entities/*.entity.js"],
});
