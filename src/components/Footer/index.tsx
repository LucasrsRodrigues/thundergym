import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from '../Icons';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.contact}>
        <h2>RECEBA NOSSAS PROMOÇÕES ESPECIAIS</h2>
        <h5>e as últimas dicas e truques de CrossFit!</h5>

        <form>
          <input type="email" placeholder="Digite seu e-mail" />
          <button>Cadastrar</button>
        </form>

        <h2>VAMOS FICAR CONECTADOS!</h2>

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
    </footer>
  )
}