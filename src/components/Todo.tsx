import { Trash } from 'phosphor-react'
import { ToDo as ToDoType } from './ToDoForm'

import styles from './Todo.module.css'
import { ChangeEvent } from 'react'

interface ToDoProps {
  toDo: ToDoType
  onUpdateStatus: (toDo: ToDoType) => void
  onDeleteToDo: (toDo: ToDoType) => void
}

export function ToDo({ toDo, onUpdateStatus, onDeleteToDo }: ToDoProps) {
  function handleDeleteToDo() {
    onDeleteToDo(toDo)
  }

  function handleUpdateTodo(event: ChangeEvent<HTMLInputElement>) {
    const updatedTodo = {
      ...toDo,
      completed: event.target.checked,
    }

    onUpdateStatus(updatedTodo)
  }

  return (
    <div className={styles.task} key={toDo.text}>
      <div>
        <input
          type="checkbox"
          name="completed"
          id="complete"
          onChange={handleUpdateTodo}
          checked={toDo.completed}
        />
        <p className={toDo.completed ? `${styles.taskCompleted}` : ''}>
          {toDo.text}
        </p>
      </div>
      <button onClick={handleDeleteToDo}>
        <Trash size={24} />
      </button>
    </div>
  )
}
