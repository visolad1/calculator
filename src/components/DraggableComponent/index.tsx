import React from 'react'
import { useDrag } from 'react-dnd';
import { ComponentsDisableContext } from '../../context';
import { IComponentsDisable, IDraggableComponentProps } from '../../types';
import styles from './DraggableComponent.module.scss'


export const DraggapleComponent: React.FC<IDraggableComponentProps> = ({ children, id }) => {
    const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable
    const [, dragRef] = useDrag({
        type: 'component',
        item: { children, id },
    });

    return (
        <div draggable={componentsDisable} ref={dragRef}>{children}</div>
    )
}
