
import { SectionTitle } from '../SectionTitle';
import styles from './styles.module.scss';
import { FaQuoteLeft } from '../Icons';
export function Testimonials(){
  return(
    <section className={styles.container}>
      <SectionTitle title="Testemunhos" />
      <div className={styles.content}>
        <div>
          <FaQuoteLeft />
          <p>
            IronMass CrossFit Studio had me at a first fitness workout. It’s a 
            truly inspiring team of fitness professionals. 
            They are able to spread the love for what they teach to everyone. 
            Their abilities & enthusiasm are just overwhelming!
          </p>
          <span>SARAH O'MALLEY</span>
        </div>
      </div>
    </section>
  )
}