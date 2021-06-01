import { Coaches, SectionTitle } from '../../../global';
import styles from './styles.module.scss';

export function Main() {
  return (
    <div className={styles.container}>
      <SectionTitle title="Nossos Treinadores" />
      <div className={styles.content}>
        <section>
          <div className={styles.banner} />
        </section>
        <section className={styles.team}>
          <SectionTitle title="NOSSA EQUIPE" />

          <div className={styles.wrapperContent}>
            <p>
              Na ThunderGym, estamos crescendo como vocês, nossos participantes, crescem. Ou seja, nossos treinadores vão temperando ao seu lado, enquanto você vai fazendo o treinamento. Porque, independentemente de quantos anos de experiência um coach possa ter, sempre há espaço para crescimento. Ou seja, levar cada novo participante específico à sua melhor forma adiciona alguns “pontos de conquista” às próprias habilidades do treinador.
            </p>
            <p>
              Nossos treinadores e atletas são pessoas que levam o fitness e o CrossFit a sério. Queremos que você faça progressos tangíveis no GYM! Sempre pressionamos até mesmo nossos próprios treinadores para maximizar seus conhecimentos, habilidades e força.
            </p>
            <p>
              Conseguimos isso atualizando constantemente nossos critérios de avaliação física, desenho de programas e nutrição. Vemos o CrossFit como uma jornada em evolução do corpo e da mente! Em nossa opinião, os exercícios CrossFit ajudam a conectar mente, corpo e espírito.
            </p>
            <p>
              <strong>
                Esta jornada de fitness leva à descoberta de um propósito na vida, de um estilo de vida melhor ...
              </strong>
            </p>
          </div>
        
          <Coaches showTitle={false} />
        </section>
      </div>
    </div>
  )
}