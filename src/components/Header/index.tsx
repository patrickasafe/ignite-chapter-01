import React from 'react'
import styles from './style.module.css'

import igniteLogo from '../../assets/ignite-logo.svg'

// type Props = {}

export const Header = (props
  // : Props
) => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='' />
      <strong>Ignite feed</strong>
    </header>
  )
}