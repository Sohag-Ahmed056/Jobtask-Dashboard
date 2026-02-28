import { StrictMode } from 'react'

import './index.css'

import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router'
import { router } from './routes/index.tsx'
import { store } from './redux/store.ts'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store = {store}>
      
        <RouterProvider router={router} />
     
    </ReduxProvider>
  </StrictMode>,
)
