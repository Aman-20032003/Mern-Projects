import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WheatherProvider } from './Context/Wheather.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WheatherProvider>
    <App />
    </WheatherProvider>
  </StrictMode>,
)
