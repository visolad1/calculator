import React from 'react'
import { Display } from '../Display'
import { MathOperations } from '../MathOperations'
import { NumericKeypad } from '../NumericKeypad'
import { ResultButton } from '../ResultButton'
import styles from './SidebarComponents.module.scss'
import { IMode, ModeContext } from '../../App'
import { DragDropContext, Draggable, DropResult } from 'react-beautiful-dnd'

export interface IComponentsDisable {
  componentsDisable: boolean,
  setComponentsDisable: (newState: boolean) => void
}

export const ComponentsDisableContext = React.createContext<IComponentsDisable | undefined>(undefined)

interface ComponentItem {
  id: string;
  component: React.ReactElement;
}

type ComponentsList = ComponentItem[];

const componentsList: ComponentsList = [
  {
    id: '1',
    component: <Display value={0} />,
  },
  {
    id: '2',
    component: <MathOperations />,
  },
  {
    id: '3',
    component: <NumericKeypad />,
  },
  {
    id: '4',
    component: <ResultButton />,
  },
];


export const SidebarComponents = () => {
  const [componentsDisable, setComponentsDisable] = React.useState<boolean>(true);
  const { mode } = React.useContext(ModeContext) as IMode;

  const [list, setList] = React.useState(componentsList);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return

    const items = Array.from(list);
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    setList(items)
  }

  React.useEffect(() => {
    if (mode === 'constructor') {
      setComponentsDisable(true);
    } else if (mode === 'runtime') {
      setComponentsDisable(false)
    }
  }, [mode]);

  return (
    <div className={styles.wrapper}>
      <ComponentsDisableContext.Provider value={{ componentsDisable, setComponentsDisable }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {componentsList.map((item, index) => (
            <Draggable draggableId={item.id} index={index}>
              {(provided) => (
                <div ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  key={item.id}
                >
                  {item.component}
                </div>
              )}
            </Draggable>
          ))}
        </DragDropContext>
      </ComponentsDisableContext.Provider>
    </div>
  )
}
