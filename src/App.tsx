import React from "react";
import { Mode } from "./components/Mode";
import { ResultButton } from "./components/ResultButton";
import { NumericKeypad } from "./components/NumericKeypad";
import { Display } from "./components/Display";
import { MathOperations } from "./components/MathOperations";

export interface IMode {
  mode: string,
  setMode: (newMode: string) => void
}

export const ModeContext = React.createContext<IMode | undefined>(undefined);

function App() {
  const [mode, setMode] = React.useState('constructor');
  console.log(mode)

  return (
    <div className="App">
      <ModeContext.Provider value={{mode, setMode}}>
        <Display value={0} />
        <MathOperations />
        <NumericKeypad />
        <ResultButton />   
        <Mode />
      </ModeContext.Provider>
    </div>

  );
}

export default App;
