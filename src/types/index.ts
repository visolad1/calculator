import React, { ReactNode } from "react";

export interface IMode {
  mode: string,
  setMode: (newMode: string) => void
}

export interface IButtonProps {
    item: string;
    color?: string;
}

export interface IComponentObj {
  id: string,
  component: React.ReactNode
}

export interface IDraggableComponentProps {
    id: string,
    children: ReactNode,
    draggable?: boolean
}

export interface ICanvas{
  canvas: IDraggableComponentProps[],
  setCanvas: (newCanvas: IDraggableComponentProps[]) => void
}

export interface IInputValue {
  inputValue: string,
  setInputValue: (newValue: string) => void
}

export interface IDraggableObjProps {
    id: string,
    index: number,
    children: React.ReactNode
}
