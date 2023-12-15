import React, { ReactNode } from 'react';
import styles from './Canvas.module.scss';
import canvasIcon from '../../icons/canvas-icon.svg';
import isOverIcon from '../../icons/isover.svg'
import { Mode } from '../Mode';
import { useDrop } from 'react-dnd';
import { CanvasContext } from '../../assets/context';
import { ICanvas } from '../../assets/types';

export const Canvas = () => {
  const { canvas, setCanvas } = React.useContext(CanvasContext) as ICanvas
  const [{ isOver }, dropRef] = useDrop({
    accept: 'component',
    drop: (item: { children: ReactNode }) => {
      setCanvas([...canvas, item.children]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const removeItem = (item: React.ReactNode) => {
    const updateCanvas = canvas.filter(components => (
      components !== item
    ))

    setCanvas(updateCanvas)
  }

  return (
    <div>
      <Mode />
      <div className={styles.wrapper} ref={dropRef}>
        {canvas.map((component, index) => (
          <div key={index} onDoubleClick={() => removeItem(component)}>
            {component}
          </div>
        ))}
        {canvas.length != 0 && isOver && <img src={isOverIcon} className={styles.isover} alt="icon" />}
        {canvas.length === 0 && (
          <div className={styles.text_wrapper}>
            <img src={canvasIcon} alt="icon" className={styles.icon} />
            <h4 className={styles.title}>Перетащите сюда</h4>
            <p className={styles.subtitle}>любой элемент из левой панели</p>
          </div>
        )}
      </div>
    </div>
  );
};
