import styles from './styles.module.scss';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from '../Icons';

export function Menu(){
  return(
    <section className={styles.container}>
      <div className={styles.logo}>
        <strong>
          ThunderGym
        </strong>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li className={styles.active}>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">
                Aulas
              </a>
            </li>
            <li>
              <a href="#">
                Treinadores
              </a>
            </li>
            <li>
              <a href="#">
                Blog
              </a>
            </li>
            <li>
              <a href="#">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.social}>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <FaPinterest />
        </a>
      </div>
    </section>
  )
}