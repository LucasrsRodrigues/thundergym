
import { SectionTitle } from '../../../global';
import posts from '../../../../utils/data/posts';
import styles from './styles.module.scss';

import { Post } from './Post';


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