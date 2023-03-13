import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import styles from './ToDoForm.module.css'

export interface ToDo {
  text: string
  completed: boolean
  createdAt: Date
}

interface ToDoFormProps {
  onCreateToDo: (toDo: ToDo) => void
}

export function ToDoForm({ onCreateToDo }: ToDoFormProps) {
  const [newToDo, setNewToDo] = useState('')

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault()

    if (newToDo === '') {
      console.log('Insira um texto para a nova tarefa')
      return
    }

    const toDo = {
      completed: false,
      text: newToDo,
      createdAt: new Date(),
    }

    console.log(toDo)

    onCreateToDo(toDo)

    setNewToDo('')
  }

  return (
    <form className={styles.newToDoList}>
      <input
        type="text"
        name="ToDo"
        id="ToDo"
        value={newToDo}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button onClick={handleCreateTodo}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}
