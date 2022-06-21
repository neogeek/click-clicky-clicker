import { io } from "socket.io-client";

import AutoClickerItem from "./AutoClickerItem";
import Counter from "./components/Counter";

import { set } from "./utils/localstorage";

import { format } from "./utils/number";

import useClickerReducer, {
  calculateItemCost
} from "./hooks/useClickerReducer";

const socket = io("https://tr5qqn.sse.codesandbox.io/");
socket.on("connect", () => {
  console.log("yourID:" + socket.id);
  set("clickerId", socket.id);
});

export default function Clicker() {
  const [state, dispatch] = useClickerReducer();

  const calculateClicksPerSecond = () => {
    return state.items
      .reduce(
        (prev, curr) =>
          prev + curr.increment * (1000 / curr.speed) * curr.owned,
        0
      )
      .toFixed(1);
  };

  return (
    <div className="game-center">
      <p>{state.id}</p>
      <h1>Clicky</h1>
      <h2>
        <Counter value={state.number} />
      </h2>
      <p>
        Total Lifetime: <Counter value={state.totalNumber} />
      </p>

      <p style={{ fontSize: 12 }}>
        {calculateClicksPerSecond()} clicks per second
      </p>

      <button onClick={() => dispatch({ type: "click" })}>Clicky</button>

      <h2>What're ya buyin?</h2>

      <div className="store-wrapper">
        <div>
          {state.items.slice(0, 5).map((item, index) => (
            <div key={index} className="store-item">
              <AutoClickerItem item={item} dispatch={dispatch} />
              <button
                disabled={calculateItemCost(item) >= state.number}
                onClick={() => {
                  dispatch({ type: "additem", item: item });
                }}
              >
                Buy ({format(calculateItemCost(item))})
              </button>
            </div>
          ))}
        </div>
        <div>
          {state.items.slice(5).map((item, index) => (
            <div key={index} className="store-item">
              <AutoClickerItem item={item} dispatch={dispatch} />
              <button
                disabled={calculateItemCost(item) >= state.number}
                onClick={() => {
                  dispatch({ type: "additem", item: item });
                }}
              >
                Buy ({format(calculateItemCost(item))})
              </button>
            </div>
          ))}
        </div>
      </div>

      <h2>Debug</h2>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}
