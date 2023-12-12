export interface IMode {
  mode: string,
  setMode: (newMode: string) => void
}

export interface IComponentsDisable {
  componentsDisable: boolean,
  setComponentsDisable: (newState: boolean) => void
}

export interface IDisplayProps{
    value: number
}

export interface IButtonProps {
    item: string;
    color?: string;
    state: boolean;
}