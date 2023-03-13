import clipboardImg from '../assets/clipboard.svg'

import styles from './EmptyTodos.module.css'

export function EmptyTodos() {
  return (
    <div className={styles.emptyTasks}>
      <img src={clipboardImg} alt="" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
