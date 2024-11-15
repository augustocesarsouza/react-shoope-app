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
import { Url } from '../../../Utils/Url';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';

export interface IProductDiscoveriesOfTheDay {
  id: string;
  title: string;
  imgProduct: string;
  imgPartBottom: string;
  discountPercentage: number;
  isAd: boolean;
  price: number;
  quantitySold: number;
}

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

    setUserLogged(objUser.user);
    getAllCategories(objUser.user);

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  useEffect(() => {
    let test = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { boundingClientRect, isIntersecting } = entry;
          const isAboveViewport = boundingClientRect.bottom < 0;

          if (isAboveViewport && !isIntersecting) {
            test = true;

            setIsOutOfView(false);
          } else if (isIntersecting) {
            if (test) {
              setIsOutOfView(true);
            }

            test = false;
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

  const [productDiscoveriesOfTheDay, setProductDiscoveriesOfTheDay] = useState<
    IProductDiscoveriesOfTheDay[] | null
  >(null);

  const getAllCategories = async (userLoggedData: ObjUser) => {
    const res = await fetch(`${Url}/get-all-product-discoveries-of-day`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userLoggedData.token}`,
        uid: userLoggedData.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();

      const data: IProductDiscoveriesOfTheDay[] = json.data;

      const dataArray: IProductDiscoveriesOfTheDay[] = [];

      for (let i = 0; i < data.length; i++) {
        const element = data[i];

        dataArray.push(element);
      }

      // for (let i = 0; i < data.length; i++) {
      //   const element = data[i];
      //   dataArray.push(element);
      // }

      // for (let i = 0; i < data.length; i++) {
      //   const element = data[i];
      //   dataArray.push(element);
      // }

      setProductDiscoveriesOfTheDay(dataArray);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
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
            {productDiscoveriesOfTheDay &&
              productDiscoveriesOfTheDay.map((el) => (
                <ProductDiscoveriesOfTheDay key={el.id} product={el} />
              ))}
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
