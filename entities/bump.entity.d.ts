import { BaseEntity, Repository, FindManyOptions, FindOneOptions, ObjectID } from "typeorm";
export declare class BumpEntity extends BaseEntity {
    id: ObjectID;
    discordUserId: string;
    bumps: number;
}
export declare type BumpRepository = Repository<BumpEntity>;
export declare type BumpFindMany = FindManyOptions<BumpEntity>;
export declare type BumpFindOne = FindOneOptions<BumpEntity>;
