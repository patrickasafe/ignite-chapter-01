import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

import styles from './style.module.css'


export const Sidebar = () => {

  return (
    <aside className={styles.sidebar} >
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60' alt=''
      />

      <div
        className={styles.profile}
      >

        <Avatar src='https://github.com/patrickasafe.png' />

        <strong>Patrick Asafe</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}