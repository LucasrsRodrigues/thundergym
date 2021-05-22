
import { FaInstagram } from 'react-icons/fa';
import styles from './styles.module.scss';

const images = [
  {
    name: '/gallery/gallery1.jpg'
  },
  {
    name: '/gallery/gallery2.jpg'
  },
  {
    name: '/gallery/gallery3.jpg'
  },
  {
    name: '/coaches/coaches1.webp'
  },
];

export function Gallery() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {images.map(image => (
          <div className={styles.photo}>
            <a href="#">
              <div className="img">
                <img src={image.name} alt="" />
              </div>
              <div className={styles.overlay}>
                <div>
                  <FaInstagram />
                </div>
              </div>
            </a>
          </div>
        ))}
        
      </div>
    </div>
  )
}