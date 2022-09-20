import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import StateProvider from "./Context/StateContext";
import reducer from "./Context/store";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StrictMode>
        <StateProvider reducer={reducer}>
            <App />
        </StateProvider>
    </StrictMode>,
);
