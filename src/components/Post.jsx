import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar.jsx";
import { Comment } from "./Comment.jsx";
import styles from "./Post.module.css";

export function Post(props) {
  // Formatando Date com a biblioteca date-fns
  const publishedDateFormatted = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        <p>
          {props.content.map((line) => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p>
                  <a href={line.content}>{line.content}</a>
                </p>
              );
            }
          })}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      {/* <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div> */}
    </article>
  );
}
