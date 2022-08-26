import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CommentProps {
  id: string;
  content: string;
  datePublished: Date;
  onDeleteComment: (comment: string) => void;
}

export function Comment(props: CommentProps) {
  function deleteComment() {
    props.onDeleteComment(props.id);
  }

  const publishedDateFormatted = format(
    props.datePublished,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.datePublished, {
    locale: ptBR,
    addSuffix: true,
  });

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
                title={publishedDateFormatted}
                dateTime={props.datePublished.toISOString()}
              >
                {publishedDateRelativeToNow}
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
