import { BeltId, BeltLevel } from "src/models/belt.ts";
import { TechniqueCategory } from "src/models/techniqueCategory.ts";

export type Technique = {
    id: string; // for URLs or similar
    name: string;
    alternateNames: [ string ];
    category?: TechniqueCategory;
    beltLevel?: BeltLevel;
}



export type TechniqueOnly = Omit<Technique, 'beltLevel' | 'category'>


/**
 * TechniqueDTO only stores belt ID.
 * Can be 'joined' to full belt information
 */
export type TechniqueDTO = TechniqueOnly & { 
    'beltId': BeltId
    'categoryId': string   // Using generic string since we are not enumerating all categories
}
