import { useEffect, useRef, useState } from 'react';
import CategoryItensBar from '../CategoryItensBar/CategoryItensBar';
import HeaderBodyHomeShopee from '../HeaderBodyHomeShopee/HeaderBodyHomeShopee';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import ProductFlashDeals from '../ProductFlashDeals/ProductFlashDeals';
import CategoryAllMan from '../CategoryAll/CategoryAllMan/CategoryAllMan';
import ProductHighlightsForYou from '../ProductHighlightsForYouComponents/ProductHighlightsForYou/ProductHighlightsForYou';
import ProductDiscoveriesOfTheDay from '../ProductDiscoveriesOfTheDayComponent/ProductDiscoveriesOfTheDay/ProductDiscoveriesOfTheDay';

const HomeBodyMain = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [userLogged, setUserLogged] = useState<ObjUser | null>(null);

  const [isOutOfView, setIsOutOfView] = useState(false);
  const containerDiscoveriesRef = useRef(null);
  const ContainerDiscoveriesOfTheDayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    // timer = setTimeout(() => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // }, 50);

    const objState = location.state;
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    const userLogged = JSON.parse(userLocalStorage);
    setUserLogged(userLogged);

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  useEffect(() => {
    let test = false;
    // preciso que ele desça pelo menos uma vez abaixo desse "containerDiscoveriesRef" ai sim se não ele já começa true
    // e o container já vai começar flutuando
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { boundingClientRect, isIntersecting } = entry;
          const isAboveViewport = boundingClientRect.bottom < 0;

          if (isAboveViewport && !isIntersecting) {
            setIsOutOfView(false);
            test = true;
          } else if (isIntersecting) {
            if (test) {
              setIsOutOfView(true);
            }
          }
        });
      },
      {
        threshold: 0, // Detecta quando qualquer parte da div entra ou sai da tela
      }
    );

    if (containerDiscoveriesRef.current) {
      observer.observe(containerDiscoveriesRef.current);
    }

    return () => {
      if (containerDiscoveriesRef.current) {
        observer.unobserve(containerDiscoveriesRef.current);
      }
    };
  }, []);

  const [valueWidthContainerDiscoveriesOfTheDay, setValueWidthContainerDiscoveriesOfTheDay] =
    useState('1200px');

  const changeValueIsOutOfView = (value: boolean) => {
    // aqui eu pego o container "ContainerHighlightsForYou" ai eu consigo ver se ele saiu dos limito da view, do usuario
    // ai eu libero para o container flutuar -> 'ContainerDiscoveriesOfTheDay'
    if (ContainerDiscoveriesOfTheDayRef.current === null) return;

    let clientWidth = ContainerDiscoveriesOfTheDayRef.current.clientWidth;

    setValueWidthContainerDiscoveriesOfTheDay(`${String(clientWidth)}px`);
    setIsOutOfView(value);
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerWithForAll>
        <HeaderBodyHomeShopee />

        <CategoryItensBar />

        {userLogged && <ProductFlashDeals userLogged={userLogged} />}
        <Styled.ContainerTipsForUsingCoupons>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729775990/img-shopee/br-50009109-87fecf86b3c129e1e0762cc8f504cf5d_fvcmsv.jpg"
            alt="img-tips-for-using-coupons"
          />
        </Styled.ContainerTipsForUsingCoupons>

        {userLogged && <CategoryAllMan userLogged={userLogged} />}

        {userLogged && (
          <ProductHighlightsForYou
            userLogged={userLogged}
            changeValueIsOutOfView={changeValueIsOutOfView}
          />
        )}

        <Styled.ContainerDiscoveriesOfTheDayMain>
          <Styled.ContainerDiscoveriesOfTheDay
            $isOutOfView={isOutOfView}
            ref={ContainerDiscoveriesOfTheDayRef}
            $valueWidthContainerDiscoveriesOfTheDay={valueWidthContainerDiscoveriesOfTheDay}
          >
            <Styled.H1>DESCOBERTAS DO DIA</Styled.H1>
          </Styled.ContainerDiscoveriesOfTheDay>
          {isOutOfView && (
            <Styled.ContainerDiscoveriesOfTheDayFalse></Styled.ContainerDiscoveriesOfTheDayFalse>
          )}
          <Styled.ContainerAllProductDiscoveriesOfTheDay ref={containerDiscoveriesRef}>
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
            <ProductDiscoveriesOfTheDay />
          </Styled.ContainerAllProductDiscoveriesOfTheDay>
        </Styled.ContainerDiscoveriesOfTheDayMain>
        <Styled.ContainerEndButtonSeeMore>
          <Styled.Button>Ver Mais</Styled.Button>
        </Styled.ContainerEndButtonSeeMore>
      </Styled.ContainerWithForAll>
    </Styled.ContainerMain>
  );
};

export default HomeBodyMain;
