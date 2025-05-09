import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./utils/UseDarkMode.tsx";
import { AuthProvider } from "./utils/AuthContext.tsx";
import { GlobalStateProvider } from "./utils/GlobalStateContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <GlobalStateProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </GlobalStateProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
);
