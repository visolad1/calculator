import React from 'react'
import { useDrag } from 'react-dnd';
import { IDraggableComponentProps } from '../../types';
import styles from './DraggableComponent.module.scss'


export const DraggapleComponent: React.FC<IDraggableComponentProps> = ({ children, id, draggable }) => {
    const [, dragRef] = useDrag({
        type: 'component',
        item: { children, id },
    });

    return (
        <div draggable={draggable} className={styles.draggableComponent} ref={dragRef}>{children}</div>
    )
}
