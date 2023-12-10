import React from 'react'
import { Display } from '../Display'
import { MathOperations } from '../MathOperations'
import { NumericKeypad } from '../NumericKeypad'
import { ResultButton } from '../ResultButton'
import styles from './SidebarComponents.module.scss'

export interface IComponents{
  isDisable: boolean,
  setIsDisable: (newState: boolean) => void

}

export const SidebarComponents = () => {
  return (
      <div className={styles.wrapper}>
          <Display value={0}/>
          <MathOperations />
          <NumericKeypad />
          <ResultButton />  
      </div>
  )
}
