import { createRoot } from "react-dom/client";
import React from "react";

import "./index.css";
import { MicrofrontendProvider } from "./context/micro-frontends.context";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Microfrontend from "./components/micro-frontend";

const Link = ({ to }: { to: string }) => (
  <NavLink to={to} style={{ margin: "1rem" }}>
    <button>{to}</button>
  </NavLink>
);

const container = document.getElementById("app");

if (!container) {
  throw new Error("The element #app wasn't found");
}

const root = createRoot(container!);

root.render(
  <MicrofrontendProvider
    values={{
      ["remote"]: {
        version: "v1-0-0",
        scope: "remote",
      },
    }}
  >
    <BrowserRouter>
      <div className="host">
        <Routes>
          <Route path="/" element={<div>home page container</div>} />
          <Route
            path="/remote/*"
            element={<Microfrontend microId="remote" />}
          />
        </Routes>
        <div style={{ marginBottom: "1rem" }}>
          <h1 style={{ marginBottom: "1rem" }}>Hello, I'm the host app!</h1>
          <Link to="/remote" />
          <Link to="/remote/nested" />
        </div>
      </div>
    </BrowserRouter>
  </MicrofrontendProvider>
);
