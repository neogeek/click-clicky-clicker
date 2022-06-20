import { Item } from "./types";

export const multiplier2: Item = {
  name: "Multiplier x2",
  description: " Multiplier goes brrrrr",
  speed: 1000,
  increment: 2,
  baseCost: 5,
  multiplier: 2,
  owned: 0
};

export const multiplier10: Item = {
  name: "Multiplier x10",
  description: " Multiplier goes brrrrr",
  speed: 1000,
  increment: 10,
  baseCost: 50,
  multiplier: 2,
  owned: 0
};

export const multiplier50: Item = {
  name: "Multiplier x50",
  description: " Multiplier goes brrrrr",
  speed: 1000,
  increment: 50,
  baseCost: 750,
  multiplier: 3,
  owned: 0
};

export const multiplier100: Item = {
  name: "Multiplier x100",
  description: " Multiplier goes brrrrr",
  speed: 1000,
  increment: 100,
  baseCost: 10000,
  multiplier: 3,
  owned: 0
};

export const multiplier1000: Item = {
  name: "Multiplier x1000",
  description: " Multiplier goes brrrrr",
  speed: 1000,
  increment: 1000,
  baseCost: 100000,
  multiplier: 4,
  owned: 0
};

export default [
  multiplier2,
  multiplier10,
  multiplier50,
  multiplier100,
  multiplier1000
];
