import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { createRoot } from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App'; // Import your main App component

const root = createRoot(document.getElementById('cart-root'));

root.render(<App />);
