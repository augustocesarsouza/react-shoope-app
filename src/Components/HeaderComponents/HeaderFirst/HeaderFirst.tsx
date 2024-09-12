import { useContext, useEffect, useState } from 'react';
import * as Styled from './styled';
import { ContextHome, ObjUser } from '../../../Templates/Home/Home';
import SvgUserBody from '../AllSvgHeader/SvgUserBody/SvgUserBody';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderFirst = () => {
  const [userObjState, setUserObjState] = useState<ObjUser>();

  const context = useContext(ContextHome);
  const nav = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const objState = location.state;
      setUserObjState(objState.user);
    } else {
      if (context === null) return;

      const { userObj } = context;

      if (userObj === null) return;

      setUserObjState(userObj);
    }
  }, [context, location]);

  const [showOptionsUserLogin, setShowOptionsUserLogin] = useState(false);
  const [allowMouseLeaveHeadUser, setAllowMouseLeaveHeadUser] = useState(false);

  const userMouseEnter = () => {
    setShowOptionsUserLogin(true);
  };

  const userMouseLeave = () => {
    if (allowMouseLeaveHeadUser) {
      setShowOptionsUserLogin(false);
    }
  };

  const onClickMyAccount = () => {
    // nav('/', { state: { user: objUser } });

    nav('/user/account', { state: { user: userObjState } });
  };

  const onMouseEnterContainerAccountUser = () => {
    setAllowMouseLeaveHeadUser(false);
  };

  const onMouseLeaveContainerAccountUser = () => {
    setAllowMouseLeaveHeadUser(true);
    setShowOptionsUserLogin(false);
  };

  return (
    <Styled.HeaderNavFirstMain>
      <Styled.HeaderNavFirst>
        <Styled.ContainerFirstNav>
          <Styled.Link $borderRight={true}>Central do Vendedor</Styled.Link>
          <Styled.Link $borderRight={true}>Vender na Shopee</Styled.Link>
          <Styled.Link $borderRight={true}>Baixe o App</Styled.Link>
          <Styled.ContainerFollowUs>
            <span className="span-follow-us">Siga-nos no</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>
          </Styled.ContainerFollowUs>
        </Styled.ContainerFirstNav>

        <Styled.ContainerSecondNav>
          <Styled.ContainerAllSvgSecondNav>
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
            </svg>
            <Styled.Link $borderRight={false}>Notificações</Styled.Link>
          </Styled.ContainerAllSvgSecondNav>
          <Styled.ContainerAllSvgSecondNav>
            <svg width="18" height="18" viewBox="0 0 16 16">
              <g fill="none" fillRule="evenodd" transform="translate(1)">
                <circle cx="7" cy="8" r="7" stroke="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="m6.871 3.992c-.814 0-1.452.231-1.914.704-.462.462-.693 1.089-.693 1.892h1.155c0-.484.099-.858.297-1.122.22-.319.583-.473 1.078-.473.396 0 .715.11.935.33.209.22.319.517.319.902 0 .286-.11.55-.308.803l-.187.209c-.682.605-1.1 1.056-1.243 1.364-.154.286-.22.638-.22 1.045v.187h1.177v-.187c0-.264.055-.506.176-.726.099-.198.253-.396.462-.572.517-.451.825-.737.924-.858.275-.352.418-.803.418-1.342 0-.66-.22-1.188-.66-1.573-.44-.396-1.012-.583-1.716-.583zm-.198 6.435c-.22 0-.418.066-.572.22-.154.143-.231.33-.231.561 0 .22.077.407.231.561s.352.231.572.231.418-.077.572-.22c.154-.154.242-.341.242-.572s-.077-.418-.231-.561c-.154-.154-.352-.22-.583-.22z"
                ></path>
              </g>
            </svg>
            <Styled.Link $borderRight={false}>Ajuda</Styled.Link>
          </Styled.ContainerAllSvgSecondNav>
          <Styled.ContainerAllSvgSecondNav>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
            </svg>

            <Styled.LinkLanguage>Português-BR</Styled.LinkLanguage>
            <svg viewBox="0 0 12 12" fill="none" width="12" height="12" color="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 8.146L11.146 3l.707.707-5.146 5.147a1 1 0 01-1.414 0L.146 3.707.854 3 6 8.146z"
                fill="currentColor"
              ></path>
            </svg>
          </Styled.ContainerAllSvgSecondNav>
          <Styled.ContainerUserMain
            onMouseEnter={() => userMouseEnter()}
            onMouseLeave={() => userMouseLeave()}
          >
            <Styled.ContainerImgUser>
              <SvgUserBody></SvgUserBody>
            </Styled.ContainerImgUser>
            <Styled.Link $borderRight={false}>{userObjState?.name}</Styled.Link>
            {showOptionsUserLogin && (
              <Styled.ContainerAccountOption
                onMouseEnter={() => onMouseEnterContainerAccountUser()}
                onMouseLeave={() => onMouseLeaveContainerAccountUser()}
              >
                <FontAwesomeIcon icon={faSortUp} />
                <Styled.span onClick={() => onClickMyAccount()}>Minha Conta</Styled.span>
                <Styled.span>Minha Compras</Styled.span>
                <Styled.span>Sair</Styled.span>
              </Styled.ContainerAccountOption>
            )}
          </Styled.ContainerUserMain>
        </Styled.ContainerSecondNav>
      </Styled.HeaderNavFirst>
    </Styled.HeaderNavFirstMain>
  );
};

export default HeaderFirst;
