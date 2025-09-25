import './index.css';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './components/NotFoundPage';
import Modal from './components/Modal';
import {useEffect, useState} from 'react';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenModal = () => {
    setModalOpen(true);
    navigate('/request');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate('/');
  };

  // Открытие модального окна при маршруте `/request`
  useEffect(() => {
    if (location.pathname === '/request') {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/robots.txt') {
      fetch('/robots.txt')
        .then((response) => response.text())
        .then((text) => {
          const blob = new Blob([text], {type: 'text/plain'});
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'robots.txt';
          a.click();
        });
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenModal={handleOpenModal}/>
      <main className="flex-grow z-1">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                onOpenModal={handleOpenModal}
              />
            }
          />
          <Route
            path="/request"
            element={
              <LandingPage
                onOpenModal={handleOpenModal}
              />
            }
          />
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </main>
      <Footer/>
      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </div>
  );
};

export default App;
