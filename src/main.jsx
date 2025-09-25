import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from './App';
import NotFoundPage from './components/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Основной маршрут */}
        <Route path="/*" element={<App/>}/>

        {/* Можно добавить другие маршруты здесь */}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
