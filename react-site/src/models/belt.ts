export type BeltId = 'rokyu' | 'gokyu' | 'yonkyu' | 'sankyu' | 'nikyu' | 'ikkyu' | 'shodan';

export type BeltLevel = {
    id: BeltId;  // ex: rokyu
    name: string; // ex: Rokyu
    ordinalName: string;  // ex: 6th Kyu
    colorName: string;  // ex: Yellow, 1st Brown
    color: string;  // A CSS capable color. ex: #ffff00, brown
}