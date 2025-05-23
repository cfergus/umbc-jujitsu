import { Technique, TechniqueDTO } from "src/models/technique.ts";
import allTechniquesJSON from '../data/techniques.json' with {type: 'json'}
import allBeltsJSON from '../data/belts.json' with {type: 'json'}
import allTechniqueCategoriesJSON from '../data/techniqueCategories.json' with {type: 'json'}
import { BeltLevel } from "src/models/belt.ts";
import { TechniqueCategory } from "src/models/techniqueCategory.ts";


/**
 * Generic 'API' for our use
 */

export function allTechniques(): TechniqueDTO[] {

    return allTechniquesJSON as TechniqueDTO[];

    // TODO : Join with belts data

}

export function allBelts(): BeltLevel[] {
    return allBeltsJSON as BeltLevel[];
}

export function allTechniqueCategories(): TechniqueCategory[] {
    return allTechniqueCategoriesJSON as TechniqueCategory[];
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
