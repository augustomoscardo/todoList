import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
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

    const toDo = {
      completed: false,
      text: newToDo,
      createdAt: new Date(),
    }

    onCreateToDo(toDo)

    setNewToDo('')
  }

  function handleNewToDoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewToDo(event.target.value)
  }

  const isNewToDoInputEmpty = newToDo.length === 0

  return (
    <form className={styles.newToDoList} onSubmit={handleCreateTodo}>
      <input
        required
        onInvalid={handleNewToDoInvalid}
        type="text"
        name="ToDo"
        id="ToDo"
        value={newToDo}
        onChange={handleNewToDoChange}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit" disabled={isNewToDoInputEmpty}>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  )
}
