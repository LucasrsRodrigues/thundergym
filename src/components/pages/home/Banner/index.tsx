
import Link from 'next/link';
import styles from './styles.module.scss';

export function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span />
        <h2>Bem-vindo</h2>
        <h1>
          <span>Thunder</span>Gym
        </h1>
        <h2>
          Crossfit Studio
        </h2>

        <p>
          Desde o nosso primeiro dia em 2013, nossas aulas de ginástica proporcionaram uma recepção inspiradora para todos! Isso faz com que todos os participantes se sintam parte de uma grande e apaixonada comunidade! Pensando nisso, você sempre pode contatar nossos instrutores de fitness para qualquer tipo de assistência. Seu objetivo final é torná-lo o mais apto e forte possível.
        </p>

        <Link href="/clases">
          <button>
            Comece hoje mesmo!
        </button>
        </Link>
      </div>
    </section>
  )
}