import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import styles from './styles.module.scss';

import { FaArrowRight, FaArrowLeft } from '../Icons';

export function Slider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  }
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src="/slide/slide1.jpg"
          custom={direction}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            x: {
              type: 'spring',
              stiffness: 300,
              damping: 300,

            },
            opacity: {
              duration: 1
            }
          }}

          drag="x"
          dragConstraints={{
            left: 0,
            right: 0
          }}
          dragElastic={1}
          className={styles.image}

        >
        </motion.img>
      </AnimatePresence>
      <motion.button

        className={styles.next}
        onClick={() => paginate(1)}
      >
        <FaArrowRight />
      </motion.button>
      <motion.button

        whileTap={{ scale: 0.9 }}
        className={styles.prev}
        onClick={() => paginate(-1)}
      >
        <FaArrowLeft />
      </motion.button>

    </>
  )
}