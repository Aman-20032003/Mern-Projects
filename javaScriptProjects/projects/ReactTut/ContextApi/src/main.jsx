import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CounterProvider } from './Context/Counter.jsx'
import { CartProvider } from './Context/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
    {/* <CounterProvider> */}

    {/* </CounterProvider> */}
  </StrictMode>,
)
