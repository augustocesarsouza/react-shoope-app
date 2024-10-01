import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SvgUserBody from '../HeaderComponents/AllSvgHeader/SvgUserBody/SvgUserBody';
import HeaderMain from '../HeaderComponents/HeaderMain/HeaderMain';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { ObjUser } from '../InterfaceAll/IObjUser/IObjUser';

const AccountSetting = () => {
  const [userObjState, setUserObjState] = useState<ObjUser>();
  const [whichWasClicked, setWhichWasClicked] = useState('1');
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    if (location.state) {
      const objState = location.state;

      setUserObjState(objState.user);
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObjState(userJson);
  }, [whichWasClicked]);

  const onClickMyAccountItens = (number: string) => {
    setWhichWasClicked(number);

    if (number === '1') {
      if (userObjState) {
        nav('/user/account/profile', { state: { user: userObjState } });
      }
    }

    if (number === '2') {
      // pode ser um switch
      nav('/user/account/payment', { state: { user: userObjState } });
    }

    if (number === '3') {
      // pode ser um switch
      nav('/user/account/address', { state: { user: userObjState } });
    }

    if (number === '4') {
      // nav('/user/account/password', { state: { user: userObjState } });
      nav('/verify', { state: { user: userObjState } });
    }
  };

  return (
    <Styled.ContainerMain>
      <HeaderMain></HeaderMain>
      <Styled.ContainerAccountUserMain>
        <Styled.ContainerAccountUser>
          <Styled.containerAccountUser>
            <Styled.ContainerUserNameImg>
              <Styled.ContainerImgUser>
                <SvgUserBody></SvgUserBody>
              </Styled.ContainerImgUser>
              <Styled.ContainerUserName>
                <Styled.Span>{userObjState?.name}</Styled.Span>
                <Styled.Span>Editar perfil</Styled.Span>
              </Styled.ContainerUserName>
            </Styled.ContainerUserNameImg>
            <Styled.ContainerInfoProfileUser>
              <Styled.ContainerMyAccountMain>
                <Styled.ContainerMyAccount>
                  <img
                    src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725970368/img-shopee/ba61750a46794d8847c3f463c5e71cc4_o0oy1n.png"
                    alt="img-user"
                  />
                  <Styled.Span>Minha Conta</Styled.Span>
                </Styled.ContainerMyAccount>
                <Styled.ContainerItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('1')}
                    $spanNumber="1"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    Perfil
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('2')}
                    $spanNumber="2"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    Cartões / Contas Bancárias
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('3')}
                    $spanNumber="3"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    Endereços
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('4')}
                    $spanNumber="4"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    Trocar Senha
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('5')}
                    $spanNumber="5"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    Preferências De Cookies
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('6')}
                    $spanNumber="6"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    Configurações De Privacidade
                  </Styled.SpanForItensMyAccount>
                </Styled.ContainerItensMyAccount>
              </Styled.ContainerMyAccountMain>
              <Styled.ContainerMyAccount>
                <img
                  src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977015/img-shopee/f0049e9df4e536bc3e7f140d071e9078_cn64xw.png"
                  alt="img-my-purchases"
                />
                <Styled.Span>Minhas Compras</Styled.Span>
              </Styled.ContainerMyAccount>
              <Styled.ContainerMyAccount>
                <img
                  src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977158/img-shopee/e10a43b53ec8605f4829da5618e0717c_q1x07z.png"
                  alt="img-notifications"
                />
                <Styled.Span>Notificações</Styled.Span>
              </Styled.ContainerMyAccount>
              <Styled.ContainerMyAccount>
                <img
                  src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977225/img-shopee/84feaa363ce325071c0a66d3c9a88748_zet2uo.png"
                  alt="img-my-coupons"
                />
                <Styled.Span>Meus Cupons</Styled.Span>
              </Styled.ContainerMyAccount>
              <Styled.ContainerMyAccount>
                <img
                  src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977292/img-shopee/a0ef4bd8e16e481b4253bd0eb563f784_tbrttv.png"
                  alt="img-my-couns-shopee"
                />
                <Styled.Span>Minhas moedas Shopee</Styled.Span>
              </Styled.ContainerMyAccount>
            </Styled.ContainerInfoProfileUser>
          </Styled.containerAccountUser>
          <Outlet />
        </Styled.ContainerAccountUser>
      </Styled.ContainerAccountUserMain>
    </Styled.ContainerMain>
  );
};

export default AccountSetting;
