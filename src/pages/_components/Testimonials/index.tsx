
import { FaQuoteLeft } from 'react-icons/fa';
import { SectionTitle } from '../../../components/SectionTitle';
import styles from './styles.module.scss';

export function Testimonials(){
  return(
    <section className={styles.container}>
      <SectionTitle title="Testemunhos" />
      <div className={styles.content}>
        <div>
          <FaQuoteLeft />
          <p>
            O ThunderGym CrossFit Studio me deu um primeiro treino de fitness.
            É uma equipe verdadeiramente inspiradora de profissionais de fitness. 
            Eles são capazes de espalhar o amor pelo que ensinam a todos. 
            Suas habilidades e entusiasmo são simplesmente avassaladores!
          </p>
          <span>SARAH O'MALLEY</span>
        </div>
      </div>
    </section>
  )
}