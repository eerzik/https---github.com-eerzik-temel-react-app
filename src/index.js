import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode 2 kez render ediyor (Geliştirme esnasında).
  // Uygulamanız React 18'e güncelledikten sonra garip davranıyorsa, 
  //varsayılan davranış 2 kez useEffect çalıştırılacak şekilde değiştirildi .
  //<React.StrictMode>
    <App />
 // </React.StrictMode>
);

