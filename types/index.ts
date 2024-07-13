export {};

declare global {
  interface Character {
    name: string;
    isWellBuild?: boolean;
    hasSignature?: boolean;
  }
  interface Weapon {
    name: string;
    owner: string;
    isSignature?: boolean;
  }
}
