import "./App.css";
import { CryptoPriceWS } from "./components/index";

function App() {
  return (
    <div className="App">
      <h1>Websockets Crypto App</h1>
      <CryptoPriceWS />
    </div>
  );
}

export default App;
