import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColorModeContext } from "./features/contexts/ColorModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeContext>
      <App />
    </ColorModeContext>
  </React.StrictMode>
);
