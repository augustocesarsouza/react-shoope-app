import { useLocation } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect } from 'react';

const CardsBankAccounts = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const objState = location.state;
      // console.log(objState);
    }
  }, [location]);

  return (
    <Styled.ContainerMain>
      <Styled.ContainerFirst>
        <Styled.H1>Cartão de Crédito</Styled.H1>
      </Styled.ContainerFirst>
      <Styled.ContainerSecond>
        <Styled.H1>Minhas contas bancárias</Styled.H1>
      </Styled.ContainerSecond>
    </Styled.ContainerMain>
  );
};

export default CardsBankAccounts;
