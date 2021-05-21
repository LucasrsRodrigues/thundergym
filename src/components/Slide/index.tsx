import { useState } from 'react';
import { Slider } from './Slider';
import styles from './styles.module.scss';


export function Slide(){
  

  return(
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapperSlide}>
          <Slider />
        </div>
      </div>
    </section>
  )
}