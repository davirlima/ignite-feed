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
      role: "Web Developer",
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
    publishedAt: new Date("2022-08-10 20:00:00"),
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
    publishedAt: new Date("2022-08-11 20:00:00"),
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
