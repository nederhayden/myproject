import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routes from "./routes";

import "../src/styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
