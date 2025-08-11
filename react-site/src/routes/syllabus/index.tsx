import { Fragment } from "react";
import { createFileRoute } from '@tanstack/react-router'
import { allBelts, allTechniqueCategories, allTechniquesJoined, beltRequirementsForSyllabus } from '../../data/dataService.ts';
import { BeltLevel } from "../../models/belt.ts";
import { TechniqueCategory } from "../../models/techniqueCategory.ts";
import { Technique } from "../../models/technique.ts";
import { BeltRequirementsByCategory } from "../../models/beltRequirement.ts";

// Use same styles as static syllabus for now
import '../../../public/main.css';
import '../../../public/print.css';

export const Route = createFileRoute('/syllabus/')({
  component: SyllabusComponent,
})

const belts = allBelts();
const techniqueCategories = allTechniqueCategories();
const techniques = allTechniquesJoined();

function SyllabusComponent() {
  return <div>
    {/* <section>
      <h2>Terms</h2>

    </section> */}

    <hr />

    { belts.map( belt => {
      return <Fragment key={belt.id}>
        {BeltSyllabusComponent( belt )}
        <hr />
      </Fragment>
    })}
    
  </div>
}

function BeltSyllabusComponent( belt: BeltLevel) {
  return <section id={belt.id} className="belt-rank">
    <h2>{belt.name} - {belt.colorName} Belt - {belt.ordinalName}</h2>

    {
      techniqueCategories.map( category => {
        // TODO: Service for accessing category techniques? 
        const categoryTechniques = techniques.filter( t => 
            t.category?.id === category.id 
            && t.beltLevel?.id === belt.id 
          );
        // If there are no techniques of this category, skip it entirely
        if( categoryTechniques.length > 0 ) {
          return <Fragment key={category.id}>
            {TechniqueCategorySyllabusComponent( category, categoryTechniques )}
          </Fragment>
        }
      })
    }

    {
      beltRequirementsForSyllabus(belt.id).map( category => {
        return <Fragment key={category.category}>
          {BeltRequirementSyllabusComponent(category)}
        </Fragment>
      })
    }
    
  </section>
}

function TechniqueCategorySyllabusComponent( category: TechniqueCategory, techniques: Technique[] ) {
  return <section className="technique-category">
    <h3>{category.name} <span className="translation-en">{category.alternateNames[0]}</span></h3>
    <ul>
      {
        techniques.map( t => {
          return <li key={t.id}>
            <span className="technique">{t.name}</span>
            { t.alternateNames?.length > 0 ? <span className="translation-en">{t.alternateNames[0]}</span> : null }
          </li>
        })
      }
    </ul>
  </section>
}

function BeltRequirementSyllabusComponent( category: BeltRequirementsByCategory ) {

  return <section className="technique-category">
    {/* TODO : distinct class for requirements vs techniques?  Same for the span below*/}
    <h3>{category.category}</h3>
    <ul>
      {
        category.requirements.map( requirement => {
          return <li key={requirement.category}>
            <span className="technique">{requirement.description}</span>
          </li>
        })
      }
    </ul>
  </section>
}