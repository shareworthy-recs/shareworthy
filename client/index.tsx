import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

const container = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const root = createRoot(container);
container.render(<App />);

// const app = ReactDOM.createRoot(document.getElementById('root'));
// app.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
