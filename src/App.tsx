import React from "react";
import { Canvas } from "./components/Canvas";
import { SidebarComponents } from "./components/SidebarComponents";
import styles from './App.module.scss'
import { CanvasContext, ComponentsDisableContext, ModeContext } from "./context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ICanvas } from "./types";


function App() {
  // режим приложения
  const [mode, setMode] = React.useState('constructor');
  // состояние компонентов
  const [componentsDisable, setComponentsDisable] = React.useState<boolean>(true);
  // состояние холста
  const [canvas, setCanvas] = React.useState<ICanvas | any>([])

  // проверка режима приложения
  React.useEffect(() => {
    if (mode === 'constructor') {
      setComponentsDisable(true);
    } else if (mode === 'runtime') {
      setComponentsDisable(false)
    }
  }, [mode]);

  return (
    <div className={styles.app}>
      {/* Контекст для передачи состояния приложения конструктор или рантайм*/}
      <ModeContext.Provider value={{ mode, setMode }}>
        {/* Контекст для передачи состояния компонентов (активны ли кнопки и инпуты) */}
        <ComponentsDisableContext.Provider value={{ componentsDisable, setComponentsDisable }}>
          {/* Контекст для передачи состояния холста, какие в нем компоненты */}
          <CanvasContext.Provider value={{ canvas, setCanvas }} >
            <DndProvider backend={HTML5Backend}>
              <SidebarComponents />
              <Canvas />
            </DndProvider>
          </CanvasContext.Provider>
        </ComponentsDisableContext.Provider>
      </ModeContext.Provider>
    </div>

  );
}

export default App;
