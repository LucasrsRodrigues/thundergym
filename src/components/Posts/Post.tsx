
import styles from './styles.module.scss';


type Post = {
  image: string;
  title: string;
  date: string;
  owner: string;
}
interface PostProps {
  post: Post;
}

export function Post({ post }: PostProps) {
  const { date, image, owner, title }  = post;
  
  return (
    <div style={{backgroundImage: `url(/posts/${image})`}} className={styles.post}>
      <div className={styles.overlay}>
        <h4>
          {title}
        </h4>
        <div>
          <span>
            Publicado por {owner}
          </span>
          <span>
            {date}
          </span>
        </div>
        <button>
          Read More
      </button>
      </div>
      
    </div>
  );
}