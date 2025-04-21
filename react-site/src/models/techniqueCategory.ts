export type TechniqueCategory = {
    id: string;
    parentCategory?: TechniqueCategory;
    name: string;
    alternateNames: [ string ];
    
}