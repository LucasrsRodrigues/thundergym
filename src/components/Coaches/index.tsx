import { SectionTitle } from "../SectionTitle";

import styles from './styles.module.scss';

import { Coache } from "./Coache";


const coaches = [
  {
    name: 'Steven Ayokee',
    photo: 'coaches1.webp',
    responsability: 'Owner/Head Coach',
    bio: '12 Years ago I lost 80lbs with the help of a personal coach and it completely changed my way of life. Since then, it’s been my mission to sway other people to do CrossFit.',
    facebook: 'steven.ayokee',
    instagram: 'stevenAyokee',
    twitter: 'steven_ayokee'
  },
  {
    name: 'Julie Collins',
    photo: 'coaches2.webp',
    responsability: 'Coach',
    bio: 'I initially took on CrossFit trainings after a spending a lifetime in professional athletics. The fact that I loved sports so much contributed a lot to my decision.',
    facebook: 'jullie.collins',
    instagram: 'jullieCollins',
    twitter: 'jullie_collins'
  },
  {
    name: 'Dominic Snyder',
    photo: 'coaches3.webp',
    responsability: 'Coach',
    bio: 'Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury will serving in Iraq.',
    facebook: 'dominic.snyder',
    instagram: 'dominicSnyder',
    twitter: 'dominic_snyder'
  },
  {
    name: 'Virgil Cook',
    photo: 'coaches4.webp',
    responsability: 'Coach',
    bio: 'Virgil has been training amateur and professional combat athletes since 1995. His skill-set expands to the following combat styles: MMA fighting, Brazilian…',
    facebook: 'virgil.cook',
    instagram: 'virgilCook',
    twitter: 'virgil_cook'
  },
];

export function Coaches() {
  return (
    <section className={styles.container}>
      <SectionTitle title="Treinadores" />
      <div className={styles.content}>
        {coaches.map(coache => (
          <Coache coache={coache} />
        ))}
        
      </div>
    </section>
  )
}