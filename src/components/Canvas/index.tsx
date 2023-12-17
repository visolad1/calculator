import React from 'react';
import styles from './Canvas.module.scss';
import isOverIcon from '../../icons/isover.svg'
import { Mode } from '../Mode';
import { useDrop } from 'react-dnd';
import { CanvasContext, ModeContext } from '../../context';
import { ICanvas, IDraggableComponentProps, IMode } from '../../types';
import { Box } from '../UI/Box';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { CanvasEmptyText } from './CanvasEmptyText';
import { DroppableZone } from './DroppableZone';
import { DraggableObj } from './DraggableObj';

export const Canvas = () => {
  const { canvas, setCanvas } = React.useContext(CanvasContext) as ICanvas
  const { mode } = React.useContext(ModeContext) as IMode
  const [{ isOver }, dropRef] = useDrop({
    // Принимаем объект с типом 'component'
    accept: 'component',

    // Добавляем объект в список холста
    drop: (item: IDraggableComponentProps) => {
      setCanvas([...canvas, item])
    },

    // Сбор информации о состоянии перетаскивания
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const canvasEmpty = canvas.length === 0
  canvas.forEach((elem, index) => {
    if (elem.id === 'display') {
      const display = canvas.splice(index, 1)[0];
      canvas.unshift(display)
    }
  })
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const newCanvas = Array.from(canvas);
    const [draggedItem] = newCanvas.splice(result.source.index, 1);
    newCanvas.splice(result.destination.index, 0, draggedItem);
    setCanvas(newCanvas);
  };

  return (
    <div>
      <Mode />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={`${styles.wrapper} ${canvasEmpty && isOver && styles.isOverWrap}`} ref={dropRef}>
          <DroppableZone>
            {canvas.map((obj, index) => (
              <Box shadow={false}>
                {mode === 'constructor' && (
                  <DraggableObj id={obj.id} index={index}>
                    {obj.children}
                  </DraggableObj>
                ) || (
                    <>
                      {obj.children}
                    </>
                  )}

              </Box>
            ))}
          </DroppableZone>

          {!canvasEmpty && isOver && <img src={isOverIcon} className={styles.isover} alt="icon" />}

          <CanvasEmptyText />
        </div>
      </DragDropContext>
    </div>
  );
};
