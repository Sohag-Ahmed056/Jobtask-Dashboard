import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store = {store}>
      
        <RouterProvider router={router} />
     
    </ReduxProvider>
  </StrictMode>,
)
