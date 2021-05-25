import {
	BaseEntity,
	Column,
	Entity,
	Repository,
	FindManyOptions,
	FindOneOptions,
	ObjectIdColumn,
	ObjectID,
} from "typeorm";

@Entity("bump")
export class BumpEntity extends BaseEntity {
	@ObjectIdColumn()
	public id: ObjectID;

	@Column()
	public discordUserId: string;

	@Column()
	public bumps: number;
}

export type BumpRepository = Repository<BumpEntity>;

export type BumpFindMany = FindManyOptions<BumpEntity>;

export type BumpFindOne = FindOneOptions<BumpEntity>;
