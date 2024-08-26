import { useLocation } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import HeaderMain from '../../Components/HeaderComponents/HeaderMain/HeaderMain';
import * as Styled from './styled';

export interface ContextHomeProps {
  // userObj: ObjUser;
  // setUserObj: React.Dispatch<React.SetStateAction<ObjUser | null>>;
  value: string;
}

export const ContextHome = createContext<ContextHomeProps | null>(null);

const Home = () => {
  const [userObj, setUserObj] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state === null) return;
    const objState = location.state;

    setUserObj('');
  }, [location]);
  return (
    <ContextHome.Provider
      value={{
        value: 'seila',
      }}
    >
      <Styled.ContainerMain>
        <HeaderMain></HeaderMain>
      </Styled.ContainerMain>
    </ContextHome.Provider>
  );
};

export default Home;
