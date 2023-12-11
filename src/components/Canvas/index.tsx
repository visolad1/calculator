import React from 'react'
import styles from './Canvas.module.scss'
import icon from '../../icons/canvas-icon.svg'
import { Mode } from '../Mode'
import { Droppable } from 'react-beautiful-dnd'

export const Canvas = () => {
  return (
    <div>
      <Mode />
      <Droppable droppableId='componentsList'>
        {(provided) => (
          <div className={styles.wrapper} {...provided.droppableProps} ref={provided.innerRef}>
            <img src={icon} alt="icon" className={styles.icon} />
            <h4 className={styles.title}>Перетащите сюда</h4>
            <p className={styles.subtitle}>любой элемент из левой панели</p>
          </div>

        )}
      </Droppable>
    </div>
  )
}
