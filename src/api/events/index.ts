import { BumpEvent } from "./bump/bump.event";
import { LogEvent } from "./log/log.event";
import { MentionEvent } from "./mention/mention.event";
import { SuggestionEvent } from "./suggestion/suggestion.event";
import { SystemEvent } from "./system/system.event";

export const Events = [
	BumpEvent,
	LogEvent,
	MentionEvent,
	SuggestionEvent,
	SystemEvent,
];
