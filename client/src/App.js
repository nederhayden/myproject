import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import Header from "./components/Header/Header";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

import "../src/styles/global.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      <ToastContainer
        position="top-right"
        transition={Flip}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
