import React from "react";
import { Canvas } from "./components/Canvas";
import { SidebarComponents } from "./components/SidebarComponents";
import styles from './App.module.scss'
import { CanvasContext, DisplayValueContext, ModeContext } from "./context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ICanvas } from "./types";


function App() {
  // режим приложения
  const [mode, setMode] = React.useState('constructor');
  // состояние холста
  const [canvas, setCanvas] = React.useState<ICanvas | any>([])
  // display value
  const [displayValue, setDisplayValue] = React.useState<string>('')


  return (
    <div className={styles.app}>
      {/* Контекст для передачи состояния приложения конструктор или рантайм*/}
      <ModeContext.Provider value={{ mode, setMode }}>
        {/* Контекст для передачи данных в display */}
        <DisplayValueContext.Provider value={{ displayValue, setDisplayValue }}>
          {/* Контекст для передачи состояния холста, какие в нем компоненты */}
          <CanvasContext.Provider value={{ canvas, setCanvas }} >
            <DndProvider backend={HTML5Backend}>
              <div className={styles.components}><SidebarComponents /></div>
              <div className={styles.canvas}><Canvas /></div>
            </DndProvider>
          </CanvasContext.Provider>
        </DisplayValueContext.Provider>
      </ModeContext.Provider>
    </div>

  );
}

export default App;
