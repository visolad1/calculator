import React, { PropsWithChildren } from 'react'
import styles from './Box.module.scss'

export const Box: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.box}>{children}</div>
  )
}
