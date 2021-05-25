import { BumpEvent } from "./bump/bump.event";
import { LogEvent } from "./log/log.event";
import { MentionEvent } from "./mention/mention.event";
import { SuggestionEvent } from "./suggestion/suggestion.event";
import { SystemEvent } from "./system/system.event";
export declare const Events: (typeof BumpEvent | typeof LogEvent | typeof MentionEvent | typeof SuggestionEvent | typeof SystemEvent)[];
