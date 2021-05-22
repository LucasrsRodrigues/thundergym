import { SectionTitle } from "../SectionTitle";

import styles from './styles.module.scss';

import { Coache } from "./Coache";

import coaches from "../../utils/data/coaches";




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