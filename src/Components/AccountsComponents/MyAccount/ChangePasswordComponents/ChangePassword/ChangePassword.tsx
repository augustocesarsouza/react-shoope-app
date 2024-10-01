import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';

const ChangePassword = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [userObjState, setUserObjState] = useState<ObjUser>();

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    if (location.state) {
      const objState = location.state;
      console.log(objState);

      setUserObjState(objState);
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObjState(userJson);
  }, []);

  return (
    <Styled.ContainerMain>
      <h1>SEILA</h1>
    </Styled.ContainerMain>
  );
};

export default ChangePassword;
