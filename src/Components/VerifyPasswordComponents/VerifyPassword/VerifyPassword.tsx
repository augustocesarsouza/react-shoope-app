import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import HeaderLoginComponentsMain from '../HeaderLoginComponentsMain/HeaderLoginComponentsMain';
import FooterChangePassword from '../FooterChangePassword/FooterChangePassword';
import ShieldShopee from '../Svg/ShieldShopee/ShieldShopee';
import LockShopee from '../Svg/LockShopee/LockShopee';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';

const VerifyPassword = () => {
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
      setUserObjState(objState);
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObjState(userJson);
  }, []);

  const onClickInputVerifyWithPassword = () => {
    // nav('/user/account/password', { state: { user: userObjState } });
    nav('/verify/password', { state: { user: userObjState } });
  };

  return (
    <Styled.ContainerMain>
      <HeaderLoginComponentsMain></HeaderLoginComponentsMain>
      <Styled.ContainerBodyVerifyPasswordMain>
        <Styled.ContainerBodyVerifyPassword>
          <Styled.ContainerSvgShield>
            <ShieldShopee></ShieldShopee>
          </Styled.ContainerSvgShield>
          <Styled.H1>
            Para sua segurança, por favor verifique sua identidade com um dos métodos abaixo
          </Styled.H1>
          <Styled.ContainerButtonVerify onClick={onClickInputVerifyWithPassword}>
            <Styled.ContainerSvgLock>
              <LockShopee />
            </Styled.ContainerSvgLock>
            <Styled.Span>Verificar com Senha</Styled.Span>
          </Styled.ContainerButtonVerify>
        </Styled.ContainerBodyVerifyPassword>
        <Styled.ContainerBottomTwoContainer>
          <Styled.ContainerWhyShouldIVerifyMyAccount>
            <Styled.H1>P: Por que devo verificar minha conta?</Styled.H1>
            <Styled.Span>
              R: A segurança da sua conta é importante para nós. O Shopee pede uma verificação
              adicional para que ninguém além de você entre em sua conta.
            </Styled.Span>
          </Styled.ContainerWhyShouldIVerifyMyAccount>
          <Styled.ContainerWhatCanIdoNotVerify>
            <Styled.H1>P: O que posso fazer se não conseguir verificar minha conta?</Styled.H1>
            <Styled.Span>
              R: Entre em contato com o{' '}
              <Styled.SpanLinkBlue>Atendimento ao Cliente</Styled.SpanLinkBlue> da Shopee para obter
              assistência para fazer login em sua conta.
            </Styled.Span>
          </Styled.ContainerWhatCanIdoNotVerify>
        </Styled.ContainerBottomTwoContainer>
      </Styled.ContainerBodyVerifyPasswordMain>
      <FooterChangePassword></FooterChangePassword>
    </Styled.ContainerMain>
  );
};

export default VerifyPassword;
