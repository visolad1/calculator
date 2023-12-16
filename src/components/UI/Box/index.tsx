import React, { PropsWithChildren } from 'react'
import styles from './Box.module.scss'

interface BoxProps {
  shadow?: boolean,
  children: React.ReactNode
}

export const Box: React.FC<BoxProps> = ({ children, shadow }) => {
  return (
    <div className={`${styles.box} ${shadow && styles.shadow}`}>{children}</div>
  )
}
