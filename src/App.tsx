import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/BrunodaSilvaLeite.png",
      name: "Bruno da Silva",
      role: "Desenvolvedor FullStack",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/leonardo-jesus.png",
      name: "Leonardo Jesus",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Eae Galera " },
      {
        type: "paragraph",
        content:
          "Da uma olhada no meu projeto novo, fiz uma integração com api do pokemon",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
