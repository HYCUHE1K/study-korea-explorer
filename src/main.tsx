import React from "react";
import { createRoot } from "react-dom/client";

console.log("Main.tsx: Starting app initialization...");

// Import i18n first
import "./i18n";
console.log("Main.tsx: i18n loaded");

import App from "./App.tsx";
console.log("Main.tsx: App component loaded");

import "./index.css";
console.log("Main.tsx: CSS loaded");

const rootElement = document.getElementById("root");
console.log("Main.tsx: Root element found:", !!rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Main.tsx: App rendered");
} else {
  console.error("Main.tsx: Root element not found!");
}
