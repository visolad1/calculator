import React from "react";
import { Canvas } from "./components/Canvas";
import { SidebarComponents } from "./components/SidebarComponents";
import styles from './App.module.scss'
import { ModeContext } from "./assets/context";

function App() {
  const [mode, setMode] = React.useState('constructor');

  return (
    <div className={styles.app}>
      <ModeContext.Provider value={{ mode, setMode }}>
        <SidebarComponents />
        <Canvas />
      </ModeContext.Provider>
    </div>

  );
}

export default App;
