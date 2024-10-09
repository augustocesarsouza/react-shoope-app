import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SvgUserBody from '../HeaderComponents/AllSvgHeader/SvgUserBody/SvgUserBody';
import HeaderMain from '../HeaderComponents/HeaderMain/HeaderMain';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { ObjUser } from '../InterfaceAll/IObjUser/IObjUser';
import FooterShopee from '../FooterShopeeComponents/FooterShopee/FooterShopee';
import { EnumAccountSetting } from './MyAccount/Interface/EnumAccountSetting/EnumAccountSetting';

const AccountSetting = () => {
  const [userObjState, setUserObjState] = useState<ObjUser>();
  const [whichWasClicked, setWhichWasClicked] = useState('1');
  const location = useLocation();
  const nav = useNavigate();

  const [accountDelete, setAccountDelete] = useState(false);
  const [showContainerNotification, setShowContainerNotification] = useState(true);

  const [whichWasClickedFirstLayer, setWhichWasClickedFirstLayer] = useState('1');

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

    const currentPath = window.location.pathname; // Retorna o caminho da URL, por exemplo, '/user/account/password'

    if (currentPath === '/user/account/profile') {
      setWhichWasClicked('1');
    }

    if (currentPath === '/user/account/payment') {
      setWhichWasClicked('2');
    }

    if (currentPath === '/user/account/address') {
      setWhichWasClicked('3');
    }

    if (currentPath === '/user/account/password') {
      setWhichWasClicked('4');
    }

    if (currentPath === '/user/account/cookie') {
      setWhichWasClicked('5');
    }

    if (currentPath === '/user/setting/privacy') {
      setWhichWasClicked('6');
    }

    if (currentPath === '/user/setting/privacy') {
      setWhichWasClicked('6');
    }

    if (currentPath === '/user/notifications/order') {
      setAccountDelete(true);
    }

    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      document.body.style.overflowY = 'auto';
    }, 50);

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [whichWasClickedFirstLayer]);

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

    if (number === '5') {
      // nav('/user/account/password', { state: { user: userObjState } });
      nav('/user/account/cookie', { state: { user: userObjState } });
    }

    if (number === '6') {
      // nav('/user/account/password', { state: { user: userObjState } });
      nav('/user/setting/privacy', { state: { user: userObjState } });
    }

    if (number === '7') {
      nav('/user/notifications/order', { state: { user: userObjState } });
    }
  };

  const onClickMyAccount = () => {
    // setAccountDelete((prev) => !prev);

    changeDisplayContainerItensMyAccount('flex');
    changeDisplayContainerItensNotifications('none');
    setWhichWasClickedFirstLayer(EnumAccountSetting.MyAccount);

    setWhichWasClicked('1');

    if (userObjState) {
      nav('/user/account/profile', { state: { user: userObjState } });
    }
  };

  const onClickMyPurchases = () => {
    changeDisplayContainerItensMyAccount('none');
    changeDisplayContainerItensNotifications('none');
    setWhichWasClickedFirstLayer(EnumAccountSetting.MyPurchases);

    nav('/user/purchase', { state: { user: userObjState } });
  };

  const changeDisplayContainerItensMyAccount = (display: string) => {
    const containerItensMyAccount = document.querySelector(
      '#container-itens-my-account'
    ) as HTMLElement;
    containerItensMyAccount.style.display = display;
  };

  const changeDisplayContainerItensNotifications = (display: string) => {
    const containerItensMyAccount = document.querySelector(
      '#container-itens-notifications'
    ) as HTMLElement;
    containerItensMyAccount.style.display = display;
  };

  const onClickNotifications = () => {
    changeDisplayContainerItensNotifications('flex');
    changeDisplayContainerItensMyAccount('none');

    setWhichWasClicked('7');

    if (userObjState !== null || userObjState !== undefined) {
      nav('/user/notifications/order', { state: { user: userObjState } });
    }
  };

  // useEffect(() => {
  //   console.log(whichWasClicked);
  // }, [whichWasClicked]);

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
                <Styled.ContainerMyAccount
                  onClick={onClickMyAccount}
                  $whichWasClickedFirstLayer={whichWasClickedFirstLayer === '1' ? '1' : ''}
                >
                  <img
                    src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725970368/img-shopee/ba61750a46794d8847c3f463c5e71cc4_o0oy1n.png"
                    alt="img-user"
                  />
                  <Styled.Span>Minha Conta</Styled.Span>
                </Styled.ContainerMyAccount>
                <Styled.ContainerItensMyAccount
                  $accountDelete={accountDelete}
                  id="container-itens-my-account"
                >
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
              <Styled.ContainerMyAccount
                onClick={onClickMyPurchases}
                $whichWasClickedFirstLayer={whichWasClickedFirstLayer === '2' ? '2' : ''}
              >
                <img
                  src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977015/img-shopee/f0049e9df4e536bc3e7f140d071e9078_cn64xw.png"
                  alt="img-my-purchases"
                />
                <Styled.Span>Minhas Compras</Styled.Span>
              </Styled.ContainerMyAccount>

              <Styled.ContainerMyAccountMain>
                <Styled.ContainerMyAccount
                  onClick={onClickNotifications}
                  $whichWasClickedFirstLayer={whichWasClickedFirstLayer === '3' ? '3' : ''}
                >
                  <img
                    src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977158/img-shopee/e10a43b53ec8605f4829da5618e0717c_q1x07z.png"
                    alt="img-notifications"
                  />
                  <Styled.Span>Notificações</Styled.Span>
                </Styled.ContainerMyAccount>

                <Styled.ContainerItensMyAccount
                  // $accountDelete={showContainerNotification}
                  $accountDelete={true}
                  id="container-itens-notifications"
                >
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('7')}
                    $spanNumber="7"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    atualizações de pedidos
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('8')}
                    $spanNumber="8"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    promoções
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('9')}
                    $spanNumber="9"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    atualizações de carteira
                  </Styled.SpanForItensMyAccount>
                  <Styled.SpanForItensMyAccount
                    onClick={() => onClickMyAccountItens('10')}
                    $spanNumber="10"
                    $whichWasClicked={whichWasClicked}
                    className="span-my-account"
                  >
                    Atualizações da Shopee
                  </Styled.SpanForItensMyAccount>
                </Styled.ContainerItensMyAccount>
              </Styled.ContainerMyAccountMain>
              <Styled.ContainerMyAccount
                $whichWasClickedFirstLayer={whichWasClickedFirstLayer === '4' ? '4' : ''}
              >
                <img
                  src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977225/img-shopee/84feaa363ce325071c0a66d3c9a88748_zet2uo.png"
                  alt="img-my-coupons"
                />
                <Styled.Span>Meus Cupons</Styled.Span>
              </Styled.ContainerMyAccount>
              <Styled.ContainerMyAccount
                $whichWasClickedFirstLayer={whichWasClickedFirstLayer === '5' ? '5' : ''}
              >
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
      <FooterShopee></FooterShopee>
    </Styled.ContainerMain>
  );
};

export default AccountSetting;
