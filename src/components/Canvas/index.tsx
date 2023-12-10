import React from 'react'
import styles from './Canvas.module.scss'
import icon from '../../icons/canvas-icon.svg'
import { Mode } from '../Mode'

export const Canvas = () => {
  return (
    <div>
        <Mode />
        <div className={styles.wrapper}>
            <img src={icon} alt="icon" className={styles.icon}/>
            <h4 className={styles.title}>Перетащите сюда</h4>
            <p className={styles.subtitle}>любой элемент из левой панели</p>
        </div>
  </div>
  )
}
