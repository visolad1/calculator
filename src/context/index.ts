import React from "react";
import { IMode, ICanvas } from "../types";


export const ModeContext = React.createContext<IMode | undefined>(undefined);
export const CanvasContext = React.createContext<ICanvas | null>(null)