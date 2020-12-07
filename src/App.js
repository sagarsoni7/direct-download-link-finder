import React from "react";
import SearchQueryFrom from "./components/searchQueryForm";
import "./App.css";

import { Scrollbars } from "react-custom-scrollbars";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <Scrollbars
      style={{ width: 300, height: 500 }}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
    >
      <div className="container">
        <div className="row">
          <img alt="logo" src={logo} height="80" />
        </div>
        <SearchQueryFrom />
      </div>
    </Scrollbars>
  );
}

export default App;
