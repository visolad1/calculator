import React from 'react'
import styles from '../Canvas.module.scss'
import canvasIcon from '../../../icons/canvas-icon.svg';
import { CanvasContext } from '../../../context';
import { ICanvas } from '../../../types';

export const CanvasEmptyText = () => {
    const { canvas } = React.useContext(CanvasContext) as ICanvas
    const canvasEmpty = canvas.length === 0

    return (
        <>
            {canvasEmpty && (
                <div className={styles.text_wrapper}>
                    <img src={canvasIcon} alt="icon" className={styles.icon} />
                    <h4 className={styles.title}>Перетащите сюда</h4>
                    <p className={styles.subtitle}>любой элемент из левой панели</p>
                </div>
            )}
        </>
    )
}
