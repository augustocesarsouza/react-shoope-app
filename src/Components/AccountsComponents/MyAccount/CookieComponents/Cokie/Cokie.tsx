import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import SvgArrowBottom from '../../../../Svg/SvgArrowBottom/SvgArrowBottom';
import SvgArrowTop from '../../../../Svg/SvgArrowTop/SvgArrowTop';
import SvgGoogle from '../../../../Svg/SvgGoogle/SvgGoogle';
import SvgTiktok from '../../../../Svg/SvgTiktok/SvgTiktok';
import { GetUserFromLocalStorage } from '../../../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';

const Cokie = () => {
  const location = useLocation();
  const nav = useNavigate();

  const ContainerCheckboxBackgroundColorOrange = 'rgb(238, 77, 45)';
  const ContainerCheckboxBackgroundColorWhite = 'rgba(0, 0, 0, .14)';
  const ContainerCheckboxBackgroundColorWhite2 = '#fff';

  useEffect(() => {
    if (location.state) {
      const objState = location.state;

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

      if (objState.user === null || objState.user === undefined) {
        localStorage.removeItem('user');

        nav('/login');
        return;
      }

      let user = objUser.user;
    }
  }, []);

  const onClickContainerCheckout = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    containerNumber: number
  ) => {
    if (e.target === null) return;

    if (containerNumber === 1) {
      const containerCheckout: NodeListOf<HTMLDivElement> =
        document.querySelectorAll('.container-checkout');

      containerCheckout.forEach((el: HTMLDivElement) => {
        changeContainerCheckout(el);
      });
    }

    if (e.target instanceof HTMLDivElement) {
      let containerCheckout: HTMLDivElement = e.target;

      changeContainerCheckout(containerCheckout);
    }
  };

  const onClickSpanAcceptAllCookies = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    containerNumber: number
  ) => {
    if (e.target === null) return;

    if (containerNumber === 1) {
      const containerCheckout: NodeListOf<HTMLDivElement> =
        document.querySelectorAll('.container-checkout');

      containerCheckout.forEach((el: HTMLDivElement) => {
        changeContainerCheckout(el);
      });
    }

    const containerCheckout = (e.target as HTMLElement).closest('div');

    if (containerCheckout) {
      const containerDiv = containerCheckout as HTMLDivElement;
      let containerFirst = containerDiv.firstChild as HTMLDivElement;

      changeContainerCheckout(containerFirst);
    }
  };

  const changeContainerCheckout = (container: HTMLDivElement) => {
    if (container.style.backgroundColor === ContainerCheckboxBackgroundColorOrange) {
      container.style.backgroundColor = ContainerCheckboxBackgroundColorWhite2;
      container.style.borderColor = ContainerCheckboxBackgroundColorWhite;
    } else {
      container.style.backgroundColor = ContainerCheckboxBackgroundColorOrange;
      container.style.borderColor = ContainerCheckboxBackgroundColorOrange;
    }
  };

  const [showArrowTop, setShowArrowTop] = useState(false);

  const onClickContainerSeeMore = () => {
    setShowArrowTop((prev) => !prev);
  };

  return (
    <Styled.ContainerMainCokie>
      <Styled.Container>
        <Styled.H1>Preferências de cookies</Styled.H1>
      </Styled.Container>

      <Styled.Span>
        Usamos cookies e ferramentas semelhantes (coletivamente referidos como "cookies") para os
        fins descritos abaixo. Para cada uma das finalidades a seguir, você pode optar por ativar os
        cookies selecionando a respectiva chave. Observe que, a menos que você esteja conectado,
        suas escolhas só serão efetivas no navegador da web e no dispositivo que você está usando no
        momento.
      </Styled.Span>

      <Styled.ContainerCheckout $whatContainerCheckout={1}>
        <Styled.Container
          onClick={(e) => onClickContainerCheckout(e, 1)}
          className="container-checkout-first"
        ></Styled.Container>
        <Styled.Span onClick={(e) => onClickSpanAcceptAllCookies(e, 1)}>
          Aceitar todos os cookies
        </Styled.Span>
      </Styled.ContainerCheckout>

      <Styled.ContainerCookiesEssential>
        <Styled.H1>Cookies essenciais</Styled.H1>
        <Styled.Span>
          Essencial para tornar a plataforma utilizável, permitindo funções básicas, como navegação
          na página e acesso a áreas seguras da plataforma. A utilização destes cookies não requer o
          seu consentimento.
        </Styled.Span>
      </Styled.ContainerCookiesEssential>

      <Styled.ContainerCoockieAfterCoockiesEssentialThree $whatContainerCheckout={1}>
        <Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>
          <Styled.H1>Cookies analíticos</Styled.H1>
          <Styled.Span>
            Coleta informações técnicas sobre sua visita e interações com a plataforma para entender
            seu uso dos serviços e melhorar sua experiência de usuário.
          </Styled.Span>
        </Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>

        <Styled.ContainerCheckout $whatContainerCheckout={2}>
          <Styled.Container
            onClick={(e) => onClickContainerCheckout(e, 2)}
            className="container-checkout"
          ></Styled.Container>
          <Styled.Span
            onClick={(e) => onClickSpanAcceptAllCookies(e, 2)}
            className="span-accept-cookie"
          >
            Aceitar
          </Styled.Span>
        </Styled.ContainerCheckout>
      </Styled.ContainerCoockieAfterCoockiesEssentialThree>

      <Styled.ContainerCoockieAfterCoockiesEssentialThree $whatContainerCheckout={1}>
        <Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>
          <Styled.H1>Cookies funcionais</Styled.H1>
          <Styled.Span>
            Habilita determinadas funções da plataforma, coleta informações sobre suas atividades e
            lembra de certas preferências e configurações que você especifica na plataforma.
          </Styled.Span>
        </Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>

        <Styled.ContainerCheckout $whatContainerCheckout={2}>
          <Styled.Container
            onClick={(e) => onClickContainerCheckout(e, 3)}
            className="container-checkout"
          ></Styled.Container>
          <Styled.Span
            onClick={(e) => onClickSpanAcceptAllCookies(e, 3)}
            className="span-accept-cookie"
          >
            Aceitar
          </Styled.Span>
        </Styled.ContainerCheckout>
      </Styled.ContainerCoockieAfterCoockiesEssentialThree>

      <Styled.ContainerCoockieAfterCoockiesEssentialThree $whatContainerCheckout={1}>
        <Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>
          <Styled.H1>Cookies de publicidade personalizada</Styled.H1>
          <Styled.Span>
            Recolhe informações sobre a sua atividade no site ou atividade de navegação para
            apresentar conteúdos mais relevantes para você e para os seus interesses.
          </Styled.Span>
        </Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>

        <Styled.ContainerCheckout $whatContainerCheckout={2}>
          <Styled.Container
            onClick={(e) => onClickContainerCheckout(e, 4)}
            className="container-checkout"
          ></Styled.Container>
          <Styled.Span
            onClick={(e) => onClickSpanAcceptAllCookies(e, 4)}
            className="span-accept-cookie"
          >
            Aceitar
          </Styled.Span>
        </Styled.ContainerCheckout>
      </Styled.ContainerCoockieAfterCoockiesEssentialThree>

      <Styled.ContainerCoockieAfterCoockiesEssentialThree $whatContainerCheckout={2}>
        <Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>
          <Styled.H1>Cookies terceirizados</Styled.H1>
          <Styled.Span>
            Esses cookies podem ser fornecidos por provedores de análise de terceiros ou para fins
            de publicidade, mas são usados apenas para fins relacionados aos nossos serviços.
          </Styled.Span>
        </Styled.ContainerCoockieAfterCoockiesEssentialThreeInner>

        <Styled.ContainerCheckout $whatContainerCheckout={2}>
          <Styled.Container
            onClick={(e) => onClickContainerCheckout(e, 5)}
            className="container-checkout"
          ></Styled.Container>
          <Styled.Span
            onClick={(e) => onClickSpanAcceptAllCookies(e, 5)}
            className="span-accept-cookie"
          >
            Aceitar
          </Styled.Span>
        </Styled.ContainerCheckout>
      </Styled.ContainerCoockieAfterCoockiesEssentialThree>

      <Styled.ContainerSeeMoreMain>
        <Styled.ContainerSeeMoreInner onClick={onClickContainerSeeMore}>
          <Styled.Span>Ver mais</Styled.Span>
          {!showArrowTop && <SvgArrowBottom />}
          {showArrowTop && <SvgArrowTop />}
        </Styled.ContainerSeeMoreInner>
      </Styled.ContainerSeeMoreMain>

      {showArrowTop && (
        <Styled.ContainerSeeMoreGoogleAndTiktok $showArrowTop={showArrowTop}>
          <Styled.ContainerGoogleAndTiktokAccept $containerGoogleAndTiktok={1}>
            <Styled.ContainerGoogleTiktokInner>
              <SvgGoogle />
              <Styled.Span>Google</Styled.Span>
            </Styled.ContainerGoogleTiktokInner>

            <Styled.ContainerCheckout $whatContainerCheckout={2}>
              <Styled.Container onClick={(e) => onClickContainerCheckout(e, 6)}></Styled.Container>
              <Styled.Span onClick={(e) => onClickSpanAcceptAllCookies(e, 6)}>Aceitar</Styled.Span>
            </Styled.ContainerCheckout>
          </Styled.ContainerGoogleAndTiktokAccept>
          <Styled.ContainerGoogleAndTiktokAccept $containerGoogleAndTiktok={2}>
            <Styled.ContainerGoogleTiktokInner>
              <SvgTiktok />
              <Styled.Span>Tiktok</Styled.Span>
            </Styled.ContainerGoogleTiktokInner>

            <Styled.ContainerCheckout $whatContainerCheckout={2}>
              <Styled.Container onClick={(e) => onClickContainerCheckout(e, 6)}></Styled.Container>
              <Styled.Span onClick={(e) => onClickSpanAcceptAllCookies(e, 6)}>Aceitar</Styled.Span>
            </Styled.ContainerCheckout>
          </Styled.ContainerGoogleAndTiktokAccept>
        </Styled.ContainerSeeMoreGoogleAndTiktok>
      )}

      <Styled.ContainerButtonConfirm>
        <Styled.Button>Confirmar</Styled.Button>
      </Styled.ContainerButtonConfirm>
    </Styled.ContainerMainCokie>
  );
};

export default Cokie;
