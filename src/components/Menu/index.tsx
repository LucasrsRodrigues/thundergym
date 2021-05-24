import styles from './styles.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from '../Icons';

export function Menu() {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <strong>
          ThunderGym
        </strong>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li className={router.asPath === '/' && styles.active}>
              <Link href="/">
                <a>
                  Home
                </a>
              </Link>
            </li>
            <li className={router.asPath === '/classes' && styles.active}>
              <Link href="/classes">
                <a>
                  Aulas
                </a>
              </Link>
            </li>
            <li className={router.asPath === '/coaches' && styles.active}>
              <Link href="/coaches">
                <a>
                    Treinadores
                </a>
              </Link>
            </li>
            <li className={router.asPath === '/blog' && styles.active}>
              <Link href="/blog">
                <a>
                  Blog
              </a>
              </Link>
             
            </li>
            <li className={router.asPath === '/contacts' && styles.active}>
              <Link href="/contacts">
                <a>
                  Contato
              </a>
              </Link>
              
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