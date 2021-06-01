import { SectionTitle } from "../SectionTitle";

import styles from './styles.module.scss';

import { Coache } from "./Coache";

import coaches from "../../utils/data/coaches";

interface CoachesProps{
  showTitle?: boolean; 
}


export function Coaches({ showTitle = true }: CoachesProps) {
  return (
    <section className={styles.container}>
      {showTitle && <SectionTitle title="Treinadores" /> }
      
      <div className={styles.content}>
        {coaches.map(coache => (
          <Coache coache={coache} />
        ))}
        
      </div>
    </section>
  )
}