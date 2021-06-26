import { BaseEntity, Repository, FindManyOptions, FindOneOptions, ObjectID } from "typeorm";
import { ChallengeLevelEnum } from "enums/challenge-level";
export declare class ChallengesEntity extends BaseEntity {
    id: ObjectID;
    code: string;
    title: string;
    level: ChallengeLevelEnum;
    language: string;
    image: string;
    description: string;
    count: number;
    createdBy: string;
}
export declare type ChallengesRepository = Repository<ChallengesEntity>;
export declare type ChallengesFindMany = FindManyOptions<ChallengesEntity>;
export declare type ChallengesFindOne = FindOneOptions<ChallengesEntity>;
