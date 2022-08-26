import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/davirlima.png",
      name: "Davi Rodrigues de Lima",
      role: "Developer Student",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal!" },
      {
        type: "paragraph",
        content:
          "Esse é o Ignite Feed, um protótipo de feed de redes sociais. Com as funções de adicionar, remover e dar likes em um comentário de um post. Testa aí! 😉",
      },
      { type: "link", content: "https://github.com/davirlima/ignite-feed" },
    ],
    publishedAt: new Date("2022-08-10 10:00:00"),
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
