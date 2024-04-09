import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/root'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Root />
      <ToastContainer />
    </Provider>
    
)
