import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";

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
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit esse, sed diam nonumy eirmod",
      },
      { type: "link", content: "https://www.lipsum.com" },
    ],
    publishedAt: new Date("2022-08-10 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://www.github.com/rocketseat.png",
      name: "Rocketseat",
      role: "Education Institute",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal!" },
      {
        type: "paragraph",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit esse, sed diam nonumy eirmod",
      },
      { type: "link", content: "https://www.lipsum.com" },
    ],
    publishedAt: new Date("2022-08-11 15:00:00"),
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
