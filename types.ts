
export interface RollResult {
  id: string;
  timestamp: number;
  dice: number[];
  total: number;
  commentary?: string;
}

export interface DiceState {
  value: number;
  rotation: { x: number; y: number; z: number };
}
