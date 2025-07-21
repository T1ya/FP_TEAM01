import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./providers/CartProvider";
import { CounterProvider } from "./providers/CounterProvider";

function App() {
  return (
    <BrowserRouter>
      <CounterProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </CounterProvider>
    </BrowserRouter>
  );
}

export default App;
