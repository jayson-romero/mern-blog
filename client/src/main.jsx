import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import {ContextProvider} from './context/LocalStorageContext/Context.jsx'
import { AuthContextProvider} from './context/authContext/authContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContextProvider>
        <App/>
      </ContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
