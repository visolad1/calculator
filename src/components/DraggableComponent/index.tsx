import React from 'react'
import { useDrag } from 'react-dnd';
import { IDraggableComponentProps } from '../../types';


export const DraggapleComponent: React.FC<IDraggableComponentProps> = ({ children, id }) => {
    const [, dragRef] = useDrag({
        type: 'component',
        item: { children, id },
    });

    return (
        <div draggable ref={dragRef}>{children}</div>
    )
}
