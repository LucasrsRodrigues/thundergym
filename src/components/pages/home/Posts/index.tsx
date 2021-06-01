
import { SectionTitle } from '../../../components/SectionTitle';
import posts from '../../../utils/data/posts';
import { Post } from './Post';
import styles from './styles.module.scss';



export function Posts() {
  return (
    <section className={styles.container}>
      <SectionTitle title="Posts Recentes" />
      <div className={styles.content}>
        {posts.map(post => (
          <Post post={post} />
        ))}
      </div>
    </section>
  );
}