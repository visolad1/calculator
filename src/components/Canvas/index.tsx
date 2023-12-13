import React from 'react'
import styles from './Canvas.module.scss'
import icon from '../../icons/canvas-icon.svg'
import { Mode } from '../Mode'
import { useDrop } from 'react-dnd'

export const Canvas = () => {
  const [canvas, setCanvas] = React.useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: 'component',
    drop: (item) => {
      console.log(item)
      // setCanvas([item])
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div>
      <Mode />
      <div className={styles.wrapper} ref={dropRef} >
        {canvas.length < 1 && (
          <>
            <img src={icon} alt="icon" className={styles.icon} />
            <h4 className={styles.title}>Перетащите сюда</h4>
            <p className={styles.subtitle}>любой элемент из левой панели</p>
          </>
        )}
      </div>
    </div>
  )
}

// {// ref={dropRef}}