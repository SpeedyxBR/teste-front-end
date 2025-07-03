import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens/Home";
import { CartProvider } from "./contexts/CartContext";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CartProvider>
      <Home />
    </CartProvider>
  </StrictMode>
);
