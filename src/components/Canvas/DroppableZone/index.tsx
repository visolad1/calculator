import React, { PropsWithChildren } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styles from '../Canvas.module.scss'


export const DroppableZone: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Droppable droppableId="canvasDropId">
            {(provided) => (
                <div
                    className={styles.drag_drop_wrapper}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {children}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
