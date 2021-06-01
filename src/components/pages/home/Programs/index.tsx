
import { SectionTitle } from '../../../global';
import { Program } from './Program';
import styles from './styles.module.scss';


const programs = [
  {
    title: 'Basic Crossfit',
    image: 'program1.webp'
  },
  {
    title: 'Fitness Studio',
    image: 'program2.webp'
  },
  {
    title: 'Yoga Classes',
    image: 'program3.webp'
  },
  {
    title: 'Personal Training',
    image: 'program4.webp'
  },
];


export function Programs() {
  return (
    <section className={styles.container}>
      <SectionTitle title="Aulas" />
      <div className={styles.content}>
        {programs.map(program => (
          <Program title={program.title} image={program.image} />
        ))}
      </div>
    </section>
  );
}