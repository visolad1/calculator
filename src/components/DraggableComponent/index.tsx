import React from 'react'
import { useDrag } from 'react-dnd';
import { ComponentsDisableContext } from '../../assets/context';
import { IComponentsDisable, IDraggableComponentProps } from '../../assets/types';
import styles from './DraggableComponent.module.scss'


export const DraggapleComponent: React.FC<IDraggableComponentProps> = ({ children, id }) => {
    const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable
    const [{ isDragging }, dragRef] = useDrag({
        type: 'component',
        item: { children, id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div draggable={componentsDisable} ref={dragRef} className={`${isDragging ? styles.drag : ''} ${styles.draggable}`}>{children}</div>
    )
}
