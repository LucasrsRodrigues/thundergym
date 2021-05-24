
import styles from './styles.module.scss';

interface ProgramProps{
  title: string;
  image: string;
}

export function Program({title,image }: ProgramProps){
  return(
    <div
      style={{ backgroundImage: `url('/program/${image}')` }}
      className={styles.program}
    >
      <h2>{title}</h2>
      <button>
        Saiba mais
      </button>
    </div>
  )
}