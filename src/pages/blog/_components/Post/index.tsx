import { FaComment } from 'react-icons/fa';
import styles from './styles.module.scss';

type Post = {
  image: string;
  title: string;
  date: string;
  owner: string;
  category: string;
  content: string;
}

interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  const {
    image,
    title,
    date,
    owner,
    category,
    content
  } = post;

  return (
    <article
      style={{ backgroundImage: `url(/posts/${image})` }}
      className={styles.container}
    >
      <header className={styles.entryHeader}>
        <button>{category}</button>

        <div className={styles.entryMeta} >
          <span>
            {owner}
          </span>

          <span>
            <time dateTime="2019-07-31T06:42:27+00:00">
              {date}
            </time>
          </span>
        </div>
        <div className={styles.entryTitle}>
          <h3>
            <a>{title}</a>
          </h3>
        </div>
      </header>
      <div className={styles.entryContent}>
        <p>{content}</p>
      </div>
      <div className={styles.entryFooter}>
        <button>More</button>
        <button className={styles.comments}>
          <FaComment />
          0
        </button>
      </div>
    </article>
  )
}