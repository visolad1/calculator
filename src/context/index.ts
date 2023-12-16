import React from "react";
import { IMode, ICanvas, IDisplayValue } from "../types";


export const ModeContext = React.createContext<IMode | undefined>(undefined);
export const CanvasContext = React.createContext<ICanvas | null>(null)
export const DisplayValueContext = React.createContext<IDisplayValue | undefined>(undefined)