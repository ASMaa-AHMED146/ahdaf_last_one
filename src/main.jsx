import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Approutes from "./routes/Approutes"
import { Provider } from 'react-redux'
import store from "./store/index"

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <Approutes/>
</Provider>
)
