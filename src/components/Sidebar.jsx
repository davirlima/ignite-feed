import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=1"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/davirlima.png" />
        <strong>Davi Lima</strong>
        <span>Developer Student</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edite seu perfil
        </a>
      </footer>
    </aside>
  );
}
