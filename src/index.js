import React from "react";
import ReactDOM from "react-dom";

import { injectGlobal } from "styled-components";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import font from "./barmen-bold.otf";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

injectGlobal`
  @font-face {
    font-family: Barmen;
    src: url('${font}') format('opentype');
  }
	* {
		margin: 0;
		padding: 0;
		font-family: Barmen, sans-serif;
		box-sizing: border-box;
  }
  html {
    background: #f4f7fb;
  }
`;
