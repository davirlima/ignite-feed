import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface PostProps {
  publishedAt: Date;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  content: {
    type: string;
    content: string;
  }[];
}

export function Post(props: PostProps) {
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
  function commentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  const [comment, setComment] = useState([
    {
      id: String(new Date("2022-08-10 20:00:00").getMilliseconds()),
      content: "Legal demais!",
      datePublished: new Date("2022-08-23 20:00:00"),
    },
  ]);
  function createNewComment(event: FormEvent) {
    event.preventDefault();
    setComment([
      ...comment,
      {
        id: String(new Date().getMilliseconds()),
        content: newCommentText,
        datePublished: new Date(),
      },
    ]);
    setNewCommentText("");
  }

  function deleteComment(idOfCommentToDelete: string) {
    console.log(comment, idOfCommentToDelete);
    const commentsWithoutDeletedOne = comment.filter((comment) => {
      return comment.id !== idOfCommentToDelete;
    });

    setComment(commentsWithoutDeletedOne);
  }

  function createNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
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
              key={comment.id}
              id={comment.id}
              content={comment.content}
              datePublished={comment.datePublished}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
