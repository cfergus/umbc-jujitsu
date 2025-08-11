import { BeltId } from "./belt.ts";

/**
 * The category to list the requirement under.
 */
export type BeltRequirementCategory = 'Self-defense kata' 
        | 'Ne Waza'
        | 'Randori'
        | 'Free-Spar'
        | 'Combinations'
        ;


/*
TODO : Haven't modelled gokyu, striking:
5 Traps and Entries
Kick-punch combos
Blocks
*/

/**
 * A Belt Requirement is something other than a single technique that must be demonstrated 
 * to satisfy belt promotion requirements.
 */
export type BeltRequirement = {
    beltId: BeltId;
    description: string;
    category: BeltRequirementCategory;
    // duration, count, 
}

/**
 * Convenience type for grouping
 */
export type BeltRequirementsByCategory = {
    category: BeltRequirementCategory,
    requirements: BeltRequirement[]
}