import React from "react";
import { IMode, IComponentsDisable } from "./types";


export const ModeContext = React.createContext<IMode | undefined>(undefined);

export const ComponentsDisableContext = React.createContext<IComponentsDisable | undefined>(undefined)