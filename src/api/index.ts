import { Commands } from "./commands";
import { Events } from "./events";

import { Jobs } from "./jobs";

export const Api = [...Commands, ...Events, ...Jobs];
