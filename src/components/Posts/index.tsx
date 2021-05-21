
import { SectionTitle } from '../SectionTitle';
import { Post } from './Post';
import styles from './styles.module.scss';

const posts = [
  {
    image: 'post1.jpg',
    title: 'Restoring Strength and Getting Back to CrossFit After Pregnancy',
    date: 'July 31, 2019',
    owner: 'admin'
  },
  {
    
     
    image: 'post2.jpg',
    title: 'If My Last Day of CrossFit Were Tomorrow…',
    date: 'July 31, 2019',
    owner: 'admin'
  },
  {
    image: 'post3.jpg',
    title: 'Weightlifting Program Plan: Be Flexible With the Prescriptions',
    date: 'July 31, 2019',
    owner: 'admin'
  },
]

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