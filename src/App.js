import "./App.scss";

import CoinsContext from "./context/CoinsContext";
import Home from "./components/Home/Home";

function App() {
  return (
    <CoinsContext>
      <Home />
    </CoinsContext>
  );
}

export default App;
