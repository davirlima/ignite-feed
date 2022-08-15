import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment(props) {
  function deleteComment() {
    props.onDeleteComment(props.content);
  }

  const [likeCount, setLikeCount] = useState(0);

  function addLike() {
    //Sempre que a atualização de um estado depender de seu valor anterior, é ideal que se faça dessa forma:
    setLikeCount((oldLikeCount) => {
      return oldLikeCount + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/davirlima.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Davi Lima</strong>
              <time
                title="09 de agosto às 15:00"
                dateTime="2022-08-09 15:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={deleteComment} title="Deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button onClick={addLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
