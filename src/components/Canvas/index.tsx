import React, { ReactNode } from 'react';
import styles from './Canvas.module.scss';
import canvasIcon from '../../icons/canvas-icon.svg';
import isOverIcon from '../../icons/isover.svg'
import { Mode } from '../Mode';
import { useDrop } from 'react-dnd';
import { CanvasContext, ModeContext } from '../../context';
import { ICanvas, IMode } from '../../types';


export const Canvas = () => {
  const { canvas, setCanvas } = React.useContext(CanvasContext) as ICanvas
  const { mode } = React.useContext(ModeContext) as IMode

  // Реализации функциональности бросания компонента
  const [{ isOver }, dropRef] = useDrop({
    // Принимаем объект с типом 'component'
    accept: 'component',

    // Добавляем компонент в список холста
    drop: (item: { children: ReactNode }) => {
      setCanvas([...canvas, item.children]);
    },

    // Сбор информации о состоянии перетаскивания
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  // Проверяем пустой ли массив холста
  const canvasEmpty = canvas.length === 0

  // Функция для удаления компонента с холста 
  const removeItem = (item: React.ReactNode) => {
    if (mode != 'runtime') {
      const updateCanvas = canvas.filter(components => (
        components !== item
      ))
      setCanvas(updateCanvas)
    }

  }

  return (
    <div>
      <Mode />
      <div className={`${styles.wrapper} ${canvasEmpty && isOver && styles.isOverWpap}`} ref={dropRef}>
        {/* Итерация компонентов в массиве холста*/}
        {canvas.map((component, index) => (
          <div key={index} onDoubleClick={() => removeItem(component)} >
            {component}
          </div>
        ))}

        {!canvasEmpty && isOver && <img src={isOverIcon} className={styles.isover} alt="icon" />}

        {canvasEmpty && (
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
