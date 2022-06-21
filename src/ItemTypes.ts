import { Item } from "./types";

export const clickComrade: Item = {
  name: "Click Comrade",
  description: "Why do it yourself when someone else can do it for you!",
  speed: 1000,
  increment: 0.1,
  baseCost: 6,
  multiplier: 1.25,
  owned: 0
};

export const clickTeam: Item = {
  name: "Click Team",
  description: "A whole 10 people are clicking just for you!",
  speed: 1000,
  increment: 1,
  baseCost: 100,
  multiplier: 1.25,
  owned: 0
};

export const clickyCompany: Item = {
  name: "Clicky Company",
  description: "Hire 50 people to click at a rate of 50 times per second!",
  speed: 1000,
  increment: 5,
  baseCost: 200,
  multiplier: 1.35,
  owned: 0
};

export const hamClick: Item = {
  name: "The Hamilton Click",
  description: "Alexander Clickilton",
  speed: 1000,
  increment: 10,
  baseCost: 375,
  multiplier: 1.35,
  owned: 0
};

export const dubClick: Item = {
  name: "The Dub Click",
  description: "",
  speed: 1000,
  increment: 20,
  baseCost: 575,
  multiplier: 1.35,
  owned: 0
};

export const grantClick: Item = {
  name: "The Grant Click",
  description:
    "50 clicks per second for the low low cost of 900 clicks! What a deal!",
  speed: 1000,
  increment: 50,
  baseCost: 900,
  multiplier: 1.35,
  owned: 0
};

export const hundoClick: Item = {
  name: "Hundo Click",
  description: "One small step for man, one mondo click for you!",
  speed: 1000,
  increment: 100,
  baseCost: 1700,
  multiplier: 1.45,
  owned: 0
};

export const twoFitty: Item = {
  name: "Two Fitty Click",
  description: "Two fitty a second!",
  speed: 1000,
  increment: 250,
  baseCost: 3250,
  multiplier: 1.5,
  owned: 0
};

export const halfThou: Item = {
  name: "Half Thou",
  description: "Take 1 thou and just cut it in half",
  speed: 1000,
  increment: 500,
  baseCost: 6250,
  multiplier: 1.65,
  owned: 0
};

export const fullThou: Item = {
  name: "Full Thou",
  description: "The full enchilada!",
  speed: 1000,
  increment: 1000,
  baseCost: 12000,
  multiplier: 1.75,
  owned: 0
};

export default [
  clickComrade,
  clickTeam,
  clickyCompany,
  hamClick,
  dubClick,
  grantClick,
  hundoClick,
  twoFitty,
  halfThou,
  fullThou
];
