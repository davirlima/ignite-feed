import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="http://github.com/davirlima.png"
          />
          <div>
            <strong>Davi Lima</strong>
            <span>Developer Student</span>
          </div>
        </div>
        <time title="09 de agosto às 15:00" dateTime="2022-08-09 15:00:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          veritatis! Ipsum assumenda tempora, eius iure ipsam aliquam fugiat
          officia repudiandae eum ut ea provident similique cumque magni illo
          veritatis debitis.
        </p>
        <p>
          👉
          <a href="https://www.lipsum.com">https://www.lipsum.com</a>
        </p>
        <p>
          <a href="#">#loremIpsum</a>
          <a href="#">#loremipsumgenerator</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
