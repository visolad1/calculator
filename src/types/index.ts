import React, { ReactNode } from "react";

export interface IMode {
  mode: string,
  setMode: (newMode: string) => void
}

export interface IComponentsDisable {
  componentsDisable: boolean,
  setComponentsDisable: (newState: boolean) => void
}

export interface IButtonProps {
    item: string;
    color?: string;
    state: boolean;
}

export interface IComponentObj {
  id: string,
  component: React.ReactElement
}


export interface ICanvas{
  canvas: ReactNode[],
  setCanvas: (newCanvas: ReactNode[]) => void
}

export interface IDraggableComponentProps {
    id: string,
    children: ReactNode
}