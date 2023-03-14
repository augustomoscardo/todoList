import logoImg from '../assets/logo-ToDolist.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.logoContainer}>
      <img src={logoImg} alt="" />
    </header>
  )
}
