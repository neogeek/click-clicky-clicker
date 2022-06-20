import "./styles.css";

import Clicker from "./Clicker";
import PlayerCanvas from "./components/PlayerCanvas";

export default function App() {
  return (
    <div className="App">
      <h1>click-clicky-clicker</h1>
      <div className="game-wrapper">
        <PlayerCanvas numberOfPlayers={25} />
        <Clicker />
        <PlayerCanvas numberOfPlayers={25} />
      </div>
    </div>
  );
}
