/* eslint-disable no-undef */
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://vacation-trip-planner-api.onrender.com";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
