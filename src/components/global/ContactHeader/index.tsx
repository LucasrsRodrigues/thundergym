import styles from './styles.module.scss';

import {RiPhoneFill, MdLocationOn } from '../Icons';

export function ContactHeader(){
  return(
    <div className={styles.container}>
      <ul>
        <li>
          <RiPhoneFill />
          <span>1-555-644-5566</span>
        </li>
        <li>
          <MdLocationOn />
          <span>Studio City, CA 91604</span>
        </li>
      </ul>
      
    </div>
  )
}