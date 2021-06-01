import { FaCircle } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Describe(){
  return(
    <div className={styles.container}>
      
      <img src="/crossfit_classes_img_1.jpg" alt="" />

      <div className={styles.wrapperContent}>
        <h4>WHAT IS CROSSFIT?</h4>

        <p>CrossFit is a principal strength and conditioning program. it’s used by many serious, law enforcement and military institutions. Oftentimes it’s used at the police academies and in military special operations units. As well as by hundreds of other amateur and professional athletes worldwide.</p>
        <p>CrossFit is a universal fitness program. It includes everything to help you achieve the top of your shape.</p>
        <p>People  we train will not necessarily be using their strengths on a regular basis. Still it provides a universal and a well-rounded course of training for anyone. CrossFit will be useful regardless of anyone’s station in life.</p>
        <p>Once again, the CrossFit program is designed for universal scalability.</p>

        <h5>
          PEOPLE WHOM WE WOULD RECOMMEND TAKING OUR CROSSFIT CLASSES:
            </h5>

        <ul>
          <li>
            <span>
              <FaCircle />
            </span>
            <span>
              Professional athletes, preparing for competitions
                </span>
          </li>
          <li>
            <span>
              <FaCircle />
            </span>
            <span>
              Law enforcement officers, participating in an active duty
                  </span>
          </li>
          <li>
            <span>
              <FaCircle />
            </span>
            <span>Amateur athletes with a mid to long experience in fitness</span>
          </li>
        </ul>
      </div>
    </div>
  )
}