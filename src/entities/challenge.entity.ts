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

import { ChallengeLevelEnum } from "enums/challenge-level";

@Entity("challenges")
export class ChallengesEntity extends BaseEntity {
	@ObjectIdColumn({
		name: "_id",
	})
	public id: ObjectID;

	@Column()
	public code: string;

	@Column()
	public title: string;

	@Column()
	public level: ChallengeLevelEnum;

	@Column()
	public language: string;

	@Column()
	public image: string;

	@Column()
	public description: string;

	@Column()
	public count: number;

	@Column()
	public createdBy: string;
}

export type ChallengesRepository = Repository<ChallengesEntity>;

export type ChallengesFindMany = FindManyOptions<ChallengesEntity>;

export type ChallengesFindOne = FindOneOptions<ChallengesEntity>;
