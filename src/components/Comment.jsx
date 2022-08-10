import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/davirlima.png" />

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
              <button title="Deletar">
                <Trash size={20} />
              </button>
            </div>
          </header>
          <p>Muito bom, parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
