import Header from "./components/Header/Header";
import styles from "./app.module.css";

import Sidebar from "./components/Sidebar/Sidebar";
import "./global.css";
import { Post, PostType} from "./components/Posts/Post";
import {  } from './components/Posts/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/igormtt.png",
      name: "igor Motta",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},        
    ],
    publishedAt: new Date('2025-02-03 14:29')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador da Rockeseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},        
    ],
    publishedAt: new Date('2022-05-10 20:00')
  },
]

export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
            <Post  
              key={post.id}
              post={post}
            />
          )
          })}
        </main>
      </div>
    </div>
  );
}
