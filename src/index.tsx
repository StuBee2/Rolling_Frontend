import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const Index = () => {
  return <App />;
};

const root = document.getElementById("root");
root && createRoot(root).render(<Index />);
