
import { FaFacebookF, FaTwitter, FaInstagram } from '../Icons';
import styles from './styles.module.scss';

type Coache = {
  name: string;
  photo: string;
  responsability: string;
  bio: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

interface CoacheProps{
  coache: Coache;
}

export function Coache({ coache }: CoacheProps){
  return(
    <div className={styles.coache}>
      <div 
        style={{ backgroundImage: `url(/coaches/${coache.photo})` }} 
        className={styles.img} 
      >
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.info}>
        <h4>{coache.name}</h4>
        <span>{coache.responsability}</span>
        <p>{coache.bio}</p>
        <div className={styles.social}>
          <a href={`https://www.facebook.com/${coache.facebook}`}>
            <FaFacebookF />
          </a>
          <a href={`https://mobile.twitter.com/${coache.twitter}`}>
            <FaTwitter />
          </a>
          <a href={`https://www.instagram.com/${coache.instagram}`}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}