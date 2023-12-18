import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { IMode } from '../../../types'
import { ModeContext } from '../../../context'
import { ICanvas, IDraggableObjProps } from '../../../types'
import { CanvasContext } from '../../../context'
import styles from '../Canvas.module.scss'
export const DraggableObj: React.FC<IDraggableObjProps> = ({ children, id, index }) => {
    const { mode } = React.useContext(ModeContext) as IMode
    const { canvas, setCanvas } = React.useContext(CanvasContext) as ICanvas

    const removeItem = (id: string) => {
        if (mode !== 'runtime') {
            const updateCanvas = canvas.filter(obj => (
                obj.id !== id
            ))
            setCanvas(updateCanvas)
        }
    }

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
                <div
                    className={styles.component}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    onDoubleClick={() => removeItem(id)}
                >
                    {children}

                </div>
            )}
        </Draggable>
    )
}
