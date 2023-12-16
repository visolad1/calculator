import React from "react";
import { IMode, ICanvas, IInputValue } from "../types";


export const ModeContext = React.createContext<IMode | undefined>(undefined);
export const CanvasContext = React.createContext<ICanvas | null>(null)
export const InputValueContext = React.createContext<IInputValue | undefined>(undefined)