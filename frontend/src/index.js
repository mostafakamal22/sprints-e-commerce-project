import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/user/UserContext';
import { ToastProvider } from './context/toast/ToastContext';
import { ModalProvider } from './context/modal/ModalContext';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <UserProvider>
            <ToastProvider>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </ToastProvider>
        </UserProvider>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
