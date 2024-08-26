import * as Styled from './style';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from '../Home/Home';

const AppContent = () => {
  document.body.style.overflowY = 'none';

  const location = useLocation();
  useEffect(() => {
    // location.pathname.includes('/filme')
  }, [location]);

  return (
    <Styled.ContainerMain>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/filme/:title" element={<SelectCinema />} /> */}
      </Routes>
    </Styled.ContainerMain>
  );
};

export default AppContent;
