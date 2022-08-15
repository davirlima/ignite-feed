import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
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

  //Criando um novo comentário com use State
  const [newCommentText, setNewCommentText] = useState("");
  function commentTextChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  const [comment, setComment] = useState([]);
  function createNewComment() {
    event.preventDefault();
    setComment([...comment, newCommentText]);
    setNewCommentText("");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comment.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComment(commentsWithoutDeletedOne);
  }

  function createNewCommentInvalid() {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  const isNewCommentEmpty = newCommentText.length == 0;

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
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === "link") {
              return (
                <p key={line.content}>
                  <a href={line.content}>{line.content}</a>
                </p>
              );
            }
          })}
        </p>
      </div>
      <form onSubmit={createNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={commentTextChange}
          //Validação do form:
          onInvalid={createNewCommentInvalid}
          required={true}
        ></textarea>
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comment.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
