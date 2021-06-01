import styles from './styles.module.scss';

interface SectionTitleProps{
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps){
  return(
    <div className={styles.container}>
      <h2>{title}</h2>
      <span/>
    </div>
  )
}