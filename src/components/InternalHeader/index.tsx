
import Link from 'next/link';
import styles from './styles.module.scss';

interface InternalHeaderProps{
  title: string;
}

export function InternalHeader({ title }: InternalHeaderProps){
  return(
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h5>{title}</h5>
        </div>
        <div className={styles.path}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <div>
            /
          </div>
          <span>
            {title}
          </span>
        </div>
      </div>
    </section>
  )
}