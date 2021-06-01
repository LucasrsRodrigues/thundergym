import styles from './styles.module.scss';

export function Coach(){
  return(
    <div className={styles.container}>
      <img src="/crossfit_classes_img_2.jpg" alt="" />

      <div className={styles.wrapperContent}>
        <h4>CROSSFIT CLASS COACH</h4>
        <span>STEVEN AYOKEE – OWNER/HEAD COACH</span>

        <p>
          12 Years ago I lost 80lbs with the help of a personal coach and it completely changed my way of life. Since then, it’s been my mission to influence other people to start taking CrossFit classes. To begin improving their health and strength the performance!
            </p>
        <p>
          My belief is that if the workout is easy, it’s not a good workout then. A real workout should always be challenging and exhausting. I’ve always been known as one of the toughest coaches. With my end goal in mind, such severity is aimed to help you! Because this tough love will get you accomplishing something you thought you could never do.
            </p>
        <p>
          That’s where the value of the CrossFit comes to.
            </p>
        <p>
          The process of getting closer to that goal is actually the least enjoyable experience…
            </p>
        <p>
          So keep in mind, that since the moment you walk into my GYM you become my client, whether you decide to join or not.
            </p>
      </div>
    </div>
  )
}