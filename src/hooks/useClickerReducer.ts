import { useReducer } from "react";

import { v4 as uuid } from "uuid";

import { Item } from "../types";
import items from "../ItemTypes";

import { has, get, set } from "../utils/localstorage";

export type State = {
  id: string;
  number: number;
  totalNumber: number;
  speed: number;
  items: Item[];
};

export type Action = {
  item?: Item;
  increment?: number;
  cost?: number;
  type: "click" | "autoclick" | "additem" | "reset";
};

const defaultState: State = {
  id: get("clickerId", uuid()),
  number: 0,
  totalNumber: 0,
  speed: 1000,
  items: [...items]
};

export const calculateItemCost = (item: Item) => {
  // baseCost * mulitplier ^ # owned
  return Math.round(item.baseCost * Math.pow(item.multiplier, item.owned));
};

const useClickerReducer = () => {
  return useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "click": {
          const updated = {
            ...state,
            number: state.number + 1,
            totalNumber: state.totalNumber + 1
          };

          set("gamestate", JSON.stringify(updated));

          return updated;
        }
        case "autoclick": {
          if (!action.increment) {
            throw new Error("Increment missing from request.");
          }

          const updated = {
            ...state,
            number: state.number + action.increment,
            totalNumber: state.totalNumber + action.increment
          };

          set("gamestate", JSON.stringify(updated));

          return updated;
        }
        case "additem": {
          if (!action.item) {
            throw new Error("Item missing from request.");
          }

          if (calculateItemCost(action.item) > state.number) {
            throw new Error("Not enough money");
          }

          // increment owned by 1
          const updated = {
            ...state,
            number: state.number - calculateItemCost(action.item),
            items: state.items.map((item) => {
              if (action.item && item.name === action.item.name) {
                return { ...item, owned: item.owned + 1 };
              }

              return item;
            })
          };

          set("gamestate", JSON.stringify(updated));

          return updated;
        }
        case "reset": {
          const updated = { ...defaultState };

          set("gamestate", JSON.stringify(updated));

          return updated;
        }
        default:
          return state;
      }
    },
    has("gamestate") ? JSON.parse(get("gamestate")) : { ...defaultState }
  );
};

export default useClickerReducer;
