import React from "react";
import { Canvas } from "./components/Canvas";
import { SidebarComponents } from "./components/SidebarComponents";
import styles from './App.module.scss'

export interface IMode {
  mode: string,
  setMode: (newMode: string) => void
}

export const ModeContext = React.createContext<IMode | undefined>(undefined);

function App() {
  const [mode, setMode] = React.useState('constructor');
  
  return (
    <div className={styles.app}>
      <ModeContext.Provider value={{mode, setMode}}>
        <SidebarComponents />
        <Canvas />
      </ModeContext.Provider>
    </div>

  );
}

export default App;
