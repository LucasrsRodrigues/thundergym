import { GetStaticProps } from 'next';
import { FaComment, FaSearch } from 'react-icons/fa';
import { Post } from '../Post';
import styles from './styles.module.scss';


type Post = {
  image: string;
  title: string;
  date: string;
  owner: string;
  category: string;
  content: string;
}

interface MainProps {
  posts: Post[];
}


export function Main({ posts }: MainProps) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          {posts.map(post => <Post post={post} />)}
        </div>
        <aside className={styles.right}>
          <div className={styles.wrapperInput}>
            <form>
              <label>
                <input type="text" placeholder="Enter Keyword search" />
              </label>
              <button>
                <FaSearch />
              </button>
            </form>
          </div>
          <div className={styles.linksContent}>
            <h4>
              Posts Recentes
            </h4>
            <ul>
              <li>
                <a>
                  Restoring Strength and Getting Back to CrossFit After Pregnancy
                </a>
              </li>
              <li>
                <a>
                  If My Last Day of CrossFit Were Tomorrow…
                </a>
              </li>
              <li>
                <a>
                  Weightlifting Program Plan: Be Flexible With the Prescriptions
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.linksContent}>
            <h4>Recent Comments</h4>
          </div>
          <div className={styles.linksContent}>
            <h4>Archives</h4>

            <ul>
              <li>
                <a href="">July 2019</a>
              </li>
            </ul>
          </div>
          <div className={styles.linksContent}>
            <h4>Categories</h4>

            <ul>
              <li>
                <a href="">
                  COACH
                </a>
              </li>
              <li>
                <a href="">
                  GYM
                </a>
              </li>
              <li>
                <a href="">
                  Uncategorized
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}

