import { SectionTitle } from '../../../../components/SectionTitle';
import styles from './styles.module.scss';

export function Main(){
  return(
    <main className={styles.container}>
      <div className={styles.content}>
        <section className={styles.address}>
          <SectionTitle title="Nossa localização" />
          <h4>JOIN THE BEST GYM IN YOUR TOWN!</h4>

          <div>
            <p>11559 Ventura Boulevard Studio City, CA 91604</p>
            <p>
              <span>Telefone: </span>1-555-644-5566
            </p>
          </div>
        </section>
        <section className={styles.form}>
          <SectionTitle title="CONTACT US TODAY!" />
          <h4>
            TEMOS A CERTEZA DE QUE ESTA DECISÃO AFETARÁ SUA VIDA DE FORMA POSITIVA.
            ASSIM POR QUE ESPERAR? INSCREVA-SE NOS CURSOS HOJE
          </h4>

          <form>
            <label>
              <span>Nome</span>
              <input type="text"/>
            </label>
            <label>
              <span>E-mail</span>
              <input type="email"/>
            </label>
            <label>
              <span>Digite aqui</span>
              <textarea>
              </textarea>
            </label>
            <button>Submit</button>
          </form>
        </section>



      </div>
    </main>
      
  )
}