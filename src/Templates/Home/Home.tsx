import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import HeaderMain from '../../Components/HeaderComponents/HeaderMain/HeaderMain';
import * as Styled from './styled';
import { ObjUser } from '../../Components/InterfaceAll/IObjUser/IObjUser';
import HomeBodyMain from '../../Components/HomeBodyComponents/HomeBodyMain/HomeBodyMain';
import { GetUserFromLocalStorage } from '../../Components/LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';

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
    const objUser = GetUserFromLocalStorage();

    if (objUser.isNullUserLocalStorage) {
      nav('/login');
      return;
    }

    if (objUser.user === null) {
      localStorage.removeItem('user');

      nav('/login');
      return;
    }

    setUserObj(objUser.user);
  }, [location]);
  return (
    <ContextHome.Provider
      value={{
        userObj: userObj,
      }}
    >
      <Styled.ContainerMain>
        <HeaderMain></HeaderMain>
        <HomeBodyMain></HomeBodyMain>
      </Styled.ContainerMain>
    </ContextHome.Provider>
  );
};

export default Home;
