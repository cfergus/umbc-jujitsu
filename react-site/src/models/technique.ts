import { BeltLevel } from "./belts";

export type Technique = {
    id: string; // for URLs or similar
    name: string;
    alternateNames: [ string ];
    // beltLevel: BeltLevel;  // use ID only?
}



