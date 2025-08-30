import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Approutes from "./routes/Approutes"
import { Provider } from 'react-redux'
import { store, persistor } from "./store/index"
import { PersistGate } from "redux-persist/integration/react"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Approutes/>
    </PersistGate>
  </Provider>
)