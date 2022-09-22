import ReactDOM from "react-dom/client";

import Hero from "./components/Hero";
import Features from "./components/Features";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="main">
    <Hero />
    <Features />
    <div className="container">
      <h2 className="mb-3 mt-0">{'Career path test'}</h2>
      <p>{'Complete this two minute test to get your results.'}</p>
      <App />
    </div>
  </div>
);
