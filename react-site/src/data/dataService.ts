import { Technique, TechniqueDTO } from "src/models/technique.ts";
import allTechniquesJSON from './techniques.json' with {type: 'json'}
import allBeltsJSON from './belts.json' with {type: 'json'}
import allTechniqueCategoriesJSON from './techniqueCategories.json' with {type: 'json'}
import allBeltRequirementsJSON from './beltRequirements.json' with {type: 'json'}
import { BeltId, BeltLevel } from "src/models/belt.ts";
import { TechniqueCategory } from "src/models/techniqueCategory.ts";
import { BeltRequirement, BeltRequirementsByCategory } from "../models/beltRequirement.ts";


/**
 * Generic 'API' for our use
 */

export function allTechniques(): TechniqueDTO[] {
    return allTechniquesJSON as TechniqueDTO[];
}


export function allBelts(): BeltLevel[] {
    return allBeltsJSON as BeltLevel[];
}

export function allTechniqueCategories(): TechniqueCategory[] {
    return allTechniqueCategoriesJSON as TechniqueCategory[];
}

export function allBeltRequirements(): BeltRequirement[] {
    return allBeltRequirementsJSON as BeltRequirement[];
}


/**
 * Get belt requirement categories containing all requirements, filtered by belt.
 */
export function beltRequirementsForSyllabus(beltId: BeltId): BeltRequirementsByCategory[] {
// export function beltRequirementsForSyllabus(beltId: BeltId): any {    
    // Messy ways to convert flat structure to a 'groupBy' structure
    const allReqs = allBeltRequirements();
    const beltReqs = allReqs.filter( r => r.beltId === beltId );

    // Get unique categories
    const categories = [...new Set( beltReqs.map( r => r.category ) )].sort();

    return categories.map( c => {
        const reqsInCategory = beltReqs.filter( r => r.category === c );
        return { 
            category: c,
            requirements: reqsInCategory 
        }
        
    } )
}

/**
 * Techniques joined to other related information
 */
export function allTechniquesJoined(): Technique[] {

    const techniques = allTechniques();
    const belts = allBelts();
    const categories = allTechniqueCategories();

    return techniques.map( t => {
        const belt = belts.find( b => b.id === t.beltId )
        const category = categories.find( c => c.id === t.categoryId )
        return { ...t, beltLevel: belt, category: category }
    })
}
