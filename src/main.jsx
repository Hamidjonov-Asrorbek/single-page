import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Provider } from './context/context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
        <App />
    </Provider>
)
