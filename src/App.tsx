import { useState } from 'react'

import { Header } from './components/Header'
import { ToDo as ToDoType, ToDoForm } from './components/ToDoForm'
import { EmptyTodos } from './components/EmptyToDos'
import { ToDo } from './components/Todo'

import styles from './App.module.css'
import './global.css'

export function App() {
  const [toDos, setToDos] = useState<ToDoType[]>([])

  function createToDo(newToDo: ToDoType) {
    setToDos([...toDos, newToDo])
  }

  function deleteToDo(toDoToDelete: ToDoType) {
    const newToDosArray = toDos.filter((toDo) => toDo !== toDoToDelete)

    setToDos(newToDosArray)
  }

  function updateToDoStatus(toDo: ToDoType) {
    const updatedToDos = toDos.map((data) =>
      data.text === toDo.text ? toDo : data,
    )

    setToDos(updatedToDos)
  }

  const countCompletedToDos = toDos.filter((toDo) => toDo.completed === true)

  return (
    <>
      <Header />
      <ToDoForm onCreateToDo={createToDo} />

      <div className={styles.tasksContainer}>
        <div className={styles.tasksHeader}>
          <p className={styles.tasksCreated}>
            Tarefas criadas <span>{toDos.length}</span>
          </p>
          <p className={styles.tasksDone}>
            Concluídas{' '}
            {toDos.length === 0 ? (
              <span>{countCompletedToDos.length}</span>
            ) : (
              <span>
                {countCompletedToDos.length} de {toDos.length}
              </span>
            )}
          </p>
        </div>

        {toDos.length === 0 && <EmptyTodos />}

        {toDos.length > 0 && (
          <div className={styles.tasks}>
            {toDos.map((toDo) => (
              <ToDo
                toDo={toDo}
                onUpdateStatus={updateToDoStatus}
                onDeleteToDo={deleteToDo}
                key={toDo.text}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
