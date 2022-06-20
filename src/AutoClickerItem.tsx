import { useEffect } from "react";

import { Action } from "./hooks/useClickerReducer";

import { Item } from "./types";

export default function AutoClickerItem({
  item,
  dispatch
}: {
  item: Item;
  dispatch: React.Dispatch<Action>;
}) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (item.owned) {
        dispatch({
          type: "autoclick",
          incrementValue: item.increment * item.owned
        });
      }
    }, item.speed);

    return () => clearInterval(interval);
  }, [item.owned, item.speed, item.increment]);

  return (
    <div>
      <h3>
        {item.name} ({item.owned})
      </h3>
      <p>{item.description}</p>
    </div>
  );
}
