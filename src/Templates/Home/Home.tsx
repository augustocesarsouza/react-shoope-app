import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import HeaderMain from '../../Components/HeaderComponents/HeaderMain/HeaderMain';
import * as Styled from './styled';
import { ObjUser } from '../../Components/InterfaceAll/IObjUser/IObjUser';

export interface ContextHomeProps {
  userObj: ObjUser | null;
  // setUserObj: React.Dispatch<React.SetStateAction<ObjUser | null>>;
}

export const ContextHome = createContext<ContextHomeProps | null>(null);

const Home = () => {
  const [userObj, setUserObj] = useState<ObjUser | null>(null);
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    // if (location.state === null) return;
    // const objState = location.state;

    setUserObj(JSON.parse(userLocalStorage));
  }, [location]);
  return (
    <ContextHome.Provider
      value={{
        userObj: userObj,
      }}
    >
      <Styled.ContainerMain>
        <HeaderMain></HeaderMain>
      </Styled.ContainerMain>
    </ContextHome.Provider>
  );
};

export default Home;
