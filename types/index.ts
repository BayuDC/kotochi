export {};

declare global {
  interface Character {
    name: string;
    isWellBuild?: boolean;
    hasSignature?: boolean;
    rank?: number;
  }
  interface Weapon {
    name: string;
    owner: string;
    isSignature?: boolean;
    rank?: number;
  }
}
