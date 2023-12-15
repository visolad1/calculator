import React from 'react';
import { Button } from '../UI/Button';
import { Box } from '../UI/Box';
import styles from './MathOperations.module.scss';
import { IComponentsDisable } from '../../types';
import { ComponentsDisableContext } from '../../context';

export const MathOperations = () => {
  const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable
  const items = ['+', '-', '×', '/']
  return (
    <div className={styles.wrapper}>
      {items.map(item => (
        <Button item={item} state={componentsDisable} />
      ))}
    </div>
  )
}
