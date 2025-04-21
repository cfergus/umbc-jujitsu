import { Technique, TechniqueDTO } from "../models/technique";
import allTechniquesJSON from '../data/techniques.json'
import allBeltsJSON from '../data/belts.json'
import allTechniqueCategoriesJSON from '../data/techniqueCategories.json'
import { BeltLevel } from "../models/belt";
import { TechniqueCategory } from "../models/techniqueCategory";


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
