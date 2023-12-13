import React from "react";
import { Canvas } from "./components/Canvas";
import { SidebarComponents } from "./components/SidebarComponents";
import styles from './App.module.scss'
import { ModeContext } from "./assets/context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [mode, setMode] = React.useState('constructor');

  return (
    <div className={styles.app}>
      <ModeContext.Provider value={{ mode, setMode }}>
        <DndProvider backend={HTML5Backend}>
          <SidebarComponents />
          <Canvas />
        </DndProvider>
      </ModeContext.Provider>
    </div>

  );
}

export default App;
