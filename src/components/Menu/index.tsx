import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from '../Icons';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Menu() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <section className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/">
            <div className={styles.logo}>
              <strong>ThunderGym</strong>
            </div>
          </Link>

          <ul className={`${styles.navMenu} ${isOpen && styles.active}`}>
            <li className={`${router.asPath === '/' && styles.active} ${styles.navItem}`}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={`${router.asPath === '/classes' && styles.active} ${styles.navItem}`}>
              <Link href="/classes">
                <a>Aulas</a>
              </Link>
            </li>
            <li className={`${router.asPath === '/coaches' && styles.active} ${styles.navItem}`}>
              <Link href="/coaches">
                <a>Treinadores</a>
              </Link>
            </li>
            <li className={`${router.asPath === '/blog' && styles.active} ${styles.navItem}`}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>

            </li>
            <li className={`${router.asPath === '/contacts' && styles.active} ${styles.navItem}`}>
              <Link href="/contacts">
                <a>Contato</a>
              </Link>
            </li>
            <li className={styles.social}>
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
            </li>
          </ul>
          <div className={styles.navIcon}>
            <button onClick={handleMenu}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>
    </section>

  )
}