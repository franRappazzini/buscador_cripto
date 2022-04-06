import "./App.scss";

import CoinsContext from "./context/CoinsContext";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <CoinsContext>
      <Home />

      <Footer />
    </CoinsContext>
  );
}

export default App;
