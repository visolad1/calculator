import React from 'react'
import { Display } from '../Display'
import { MathOperations } from '../MathOperations'
import { NumericKeypad } from '../NumericKeypad'
import { ResultButton } from '../ResultButton'
import styles from './SidebarComponents.module.scss'
import { IMode, ModeContext } from '../../App'

export interface IComponentsDisable{
  componentsDisable: boolean,
  setComponentsDisable: (newState: boolean) => void
}

export const ComponentsDisableContext= React.createContext<IComponentsDisable | undefined>(undefined)

export const SidebarComponents = () => {
  const [componentsDisable, setComponentsDisable] = React.useState<boolean>(true);
  const {mode} = React.useContext(ModeContext) as IMode;
  console.log(componentsDisable)

  React.useEffect(() => {
    if (mode === 'constructor') {
      setComponentsDisable(true);
    } else if(mode === 'runtime'){
      setComponentsDisable(false)
    }
  }, [mode]);

  return (
      <div className={styles.wrapper}>
        <ComponentsDisableContext.Provider value={{componentsDisable, setComponentsDisable}}>
            <div className={`${styles.component} ${componentsDisable && styles.disabled}`}><Display value={0}/></div>
            <div className={`${styles.component} ${componentsDisable && styles.disabled}`}><MathOperations /></div>
            <div className={`${styles.component} ${componentsDisable && styles.disabled}`}><NumericKeypad /></div>
            <div className={`${styles.component} ${componentsDisable && styles.disabled}`}><ResultButton /></div>  
          </ComponentsDisableContext.Provider>
      </div>
  )
}
