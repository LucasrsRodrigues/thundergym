
import styles from './styles.module.scss';
import { Describe } from "../Describe";
import { Princing } from "../Princing";
import { Coach } from "../Coach";
import Link from "next/link";
import { SectionTitle } from '../../../global';
import { Gallery } from '../../home';

export function Main() {
  return (
    <div className={styles.container}>
      <SectionTitle title="Aulas Crossfit" />
      <div className={styles.content}>
        <section className={styles.info}>
          <div className={styles.left}>
            <Describe />
            <Princing />
          </div>
          <div className={styles.right}>
            <Coach />
          </div>
        </section>
        <section className={styles.banner}>
        <h3>
            ARE YOU INTERESTED IN MAKING YOURSELF <span>MORE FIT</span>?
        </h3>
        <p>
            SIGN UP FOR OUR CROSSFIT ACTIVITIES RIGHT NOW!
        </p>

        <Link href="/">
          <button>
            Sign Up
          </button>
        </Link>
        </section>
        <section className={styles.photos}>
          <SectionTitle title="LATEST PHOTOS FROM OUR GYM" />
          <Gallery />
        </section>
      </div>
    </div>
  )
}