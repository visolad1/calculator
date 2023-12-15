import React from "react";
import { IMode, IComponentsDisable, ICanvas } from "./types";


export const ModeContext = React.createContext<IMode | undefined>(undefined);

export const ComponentsDisableContext = React.createContext<IComponentsDisable | undefined>(undefined)

export const CanvasContext = React.createContext<ICanvas | null>(null)