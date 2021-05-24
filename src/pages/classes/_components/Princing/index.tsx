import { FaCircle } from 'react-icons/fa';
import styles from './styles.module.scss';


export function Princing(){
  return(
    <div className={styles.wrapperPricing}>
      <img src="/posts/post3.jpg" alt="" />
      <div className={styles.pricing}>
        <h4>PRICING</h4>

        <ul>
          <li>
            <span>
              <FaCircle />
            </span>
            <span>1 – 5 sessions per month &nbsp; &nbsp; <strong> $69.00</strong></span>
          </li>
          <li>
            <span>
              <FaCircle />
            </span>
            <span>5 – 15 sessions per month &nbsp; &nbsp; <strong>$59.00</strong></span>
          </li>
          <li>
            <span>
              <FaCircle />
            </span>
            <span>15 – 30 sessions per month &nbsp; &nbsp; <strong>$49.00</strong></span>
          </li>
        </ul>
      </div>
    </div>
  )
}