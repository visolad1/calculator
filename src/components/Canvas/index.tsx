import React from 'react';
import styles from './Canvas.module.scss';
import canvasIcon from '../../icons/canvas-icon.svg';
import isOverIcon from '../../icons/isover.svg'
import { Mode } from '../Mode';
import { useDrop } from 'react-dnd';
import { CanvasContext, ModeContext } from '../../context';
import { ICanvas, IDraggableComponentProps, IMode } from '../../types';
import { Box } from '../UI/Box';
import { Droppable, Draggable, DragDropContext, DropResult } from 'react-beautiful-dnd';

export const Canvas = () => {
  const { canvas, setCanvas } = React.useContext(CanvasContext) as ICanvas
  const { mode } = React.useContext(ModeContext) as IMode

  // Реализации функциональности бросания объекта
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

  // Проверяем пустой ли массив холста
  const canvasEmpty = canvas.length === 0

  // Функция для удаления компонента с холста по id
  const removeItem = (id: string) => {
    if (mode != 'runtime') {
      const updateCanvas = canvas.filter(obj => (
        obj.id !== id
      ))
      setCanvas(updateCanvas)
    }
  }

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
          <Droppable droppableId="canvasDropId">
            {(provided) => (
              <div
                className={styles.drag_drop_wrapper}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {canvas.map((obj, index) => (
                  <Box shadow={false}>
                    <Draggable
                      key={obj.id}
                      draggableId={obj.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          onDoubleClick={() => removeItem(obj.id)}
                        >
                          {obj.children}

                        </div>
                      )}
                    </Draggable>
                  </Box>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {!canvasEmpty && isOver && <img src={isOverIcon} className={styles.isover} alt="icon" />}

          {/* Текст который виден когда холст пустой */}
          {canvasEmpty && (
            <div className={styles.text_wrapper}>
              <img src={canvasIcon} alt="icon" className={styles.icon} />
              <h4 className={styles.title}>Перетащите сюда</h4>
              <p className={styles.subtitle}>любой элемент из левой панели</p>
            </div>
          )}
        </div>
      </DragDropContext>
    </div>
  );
};
