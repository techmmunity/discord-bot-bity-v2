export type RolesIds = Array<string>;

export interface CounterConfig {
	channelId: string;
	channelName: string;
	hasAllRoles?: Array<string>;
	doesntHasAnyOfRoles?: Array<string>;
}
