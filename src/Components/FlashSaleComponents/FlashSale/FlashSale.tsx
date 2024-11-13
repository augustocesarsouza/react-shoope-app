import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { Url } from '../../../Utils/Url';
import { IProductFlashDeals } from '../../InterfaceAll/IProduct/IProductFlashDeals/IProductFlashDeals';
import HeaderMain from '../../HeaderComponents/HeaderMain/HeaderMain';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ObjTimeFleshOffer } from '../../HomeBodyComponents/ProductFlashDeals/ProductFlashDeals';
import FlashOfferAndCountdown from '../FlashOfferAndCountdown/FlashOfferAndCountdown';
import FleshOfferEveryDayAndHours, {
  ObjTime,
} from '../FleshOfferEveryDayAndHours/FleshOfferEveryDayAndHours';
import ProductFlashOffer from '../ProductFlashOffer/ProductFlashOffer';
import FooterForFlashOffer from '../FooterForFlashOfferComponents/FooterForFlashOffer/FooterForFlashOffer';
import FooterShopee from '../../FooterShopeeComponents/FooterShopee/FooterShopee';
import SvgArrowBottomFlashSale from '../../Svg/SvgArrowBottomFlashSale/SvgArrowBottomFlashSale';

export interface GetAllProductHourProps {
  altValue: string;
  discountPercentage: number;
  id: string;
  imgPartBottom: string;
  imgProduct: string;
  popularityPercentage: number;
  priceProduct: number;
  title: string;
}

const FlashSale = () => {
  const [allProductFlashDeals, setAllProductFlashDeals] = useState<IProductFlashDeals[] | null>(
    null
  );
  const local = useLocation();
  const nav = useNavigate();
  const [objTimeFlashDeals, setObjTimeFlashDeals] = useState<ObjTimeFleshOffer | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    let localUser = local.state;
    let user: ObjUser = localUser.user;

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

    // getProductOfferFlashAll(objUser.user);
  }, []);

  const getProductOfferFlashAll = async (user: ObjUser) => {
    const res = await fetch(`${Url}/get-product-offer-flash-all`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`,
        uid: user.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();
      const data: IProductFlashDeals[] = json.data;

      setAllProductFlashDeals(data);
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

  const functionGetTheValueTimeFleshOffer = (hours: number, minutes: number, seconds: number) => {
    const obj: ObjTimeFleshOffer = {
      hours,
      minutes,
      seconds,
    };

    setObjTimeFlashDeals(obj);
  };

  const [objClickedCategory, setObjClickedCategory] = useState(1);

  const onClickCategory = (value: number) => {
    if (value === 0) return;
    setObjClickedCategory(value);
  };

  const RefSvgArrowBottom = useRef<SVGSVGElement | null>(null);
  const [showContainerAfterArrowIsTop, setShowContainerAfterArrowIsTop] = useState(false);

  const onMouseEnterContainerCategoryMore = () => {
    if (RefSvgArrowBottom.current === null) return;

    const svg = RefSvgArrowBottom.current;

    svg.style.rotate = '180deg';
    setShowContainerAfterArrowIsTop(true);
  };

  const onMouseLeaveEnterContainerCategoryMore = () => {
    if (RefSvgArrowBottom.current === null) return;

    const svg = RefSvgArrowBottom.current;

    svg.style.rotate = '0deg';
    setShowContainerAfterArrowIsTop(false);
  };

  const onMouseEnterContainerItensMoreOfferFlesh = () => {
    if (RefSvgArrowBottom.current === null) return;

    const svg = RefSvgArrowBottom.current;

    svg.style.rotate = '180deg';
    setShowContainerAfterArrowIsTop(true);
  };

  const onMouseLeaveContainerItensMoreOfferFlesh = () => {
    if (RefSvgArrowBottom.current === null) return;

    const svg = RefSvgArrowBottom.current;

    svg.style.rotate = '0deg';
    setShowContainerAfterArrowIsTop(false);
  };

  const getAllHoursFleshOffers = (allHoursFleshOffers: ObjTime) => {
    const time = allHoursFleshOffers.time;

    const hours = time.getHours();
    const minutes = time.getMinutes();

    let dateFull = '';

    if (hours < 10 && minutes < 10) {
      dateFull = `0${hours}:0${minutes}`;
    }

    if (hours >= 10 && minutes < 10) {
      dateFull = `${hours}:0${minutes}`;
    }

    if (hours >= 10 && minutes >= 10) {
      dateFull = `${hours}:${minutes}`;
    }

    GetAllProductHour(dateFull);
  };

  const [getAllProductHourProps, setGetAllProductHourProps] = useState<GetAllProductHourProps[]>(
    []
  );

  const GetAllProductHour = async (dateFull: string) => {
    const res = await fetch(`${Url}/get_all_product_hour/${dateFull}`, {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${user.token}`,
      //   uid: user.id,
      //   'Content-Type': 'application/json',
      // },
    });

    if (res.status === 200) {
      const json = await res.json();
      let value: GetAllProductHourProps[] = json.data;

      const arrayProductHours: GetAllProductHourProps[] = [];

      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        arrayProductHours.push(element);
      }

      // for (let i = 0; i < value.length; i++) {
      //   const element = value[i];
      //   arrayProductHours.push(element);
      // }

      // for (let i = 0; i < value.length; i++) {
      //   const element = value[i];
      //   arrayProductHours.push(element);
      // }

      // for (let i = 0; i < value.length; i++) {
      //   const element = value[i];
      //   arrayProductHours.push(element);
      // }

      setGetAllProductHourProps(arrayProductHours);
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

  const [itensOfferFlesh, setItensOfferFlesh] = useState([
    'Mais Populares',
    'Lojas Oficiais',
    'Top Ofertas',
    'Moda',
    'Beleza e Cuidado Pessoal',
    'Ofertas Internacionais',
  ]);

  const [itensMoreOfferFlesh, setItensMoreOfferFlesh] = useState([
    'Moda Infantil',
    'Mercado e Pets',
    'Casa e Cozinha',
    'Brinquedos',
    'Eletrônicos',
    'Cuidados para o Bebê',
    'Livros e Papelaria',
    'Computadores e Acessórios',
    'Celulares e Dispositivos',
    'Auto & Moto',
    'Esportes e Lazer',
    'Mais Ofertas Locais',
  ]);

  const onClickNewItenMoreOfferFlesh = (iten: string) => {
    setItensMoreOfferFlesh((array) => {
      const newArray = [...array];

      if (iten === 'Ofertas Internacionais') {
        const indexOfferInternational = newArray.findIndex((el) => el === iten);

        const elementLastItensOffer = itensOfferFlesh[itensOfferFlesh.length - 1];

        newArray[indexOfferInternational] = elementLastItensOffer;
      } else {
        if (itensOfferFlesh[itensOfferFlesh.length - 1] !== 'Ofertas Internacionais') {
          const indexPosition = newArray.findIndex((el) => el === 'Ofertas Internacionais');
          const itenIndexOfferInterncation = newArray[indexPosition];

          const indexItenClicked = newArray.findIndex((el) => el === iten);
          newArray[indexItenClicked] = itenIndexOfferInterncation;

          const lastElementItensOfferFlehs = itensOfferFlesh[itensOfferFlesh.length - 1];

          if (indexPosition !== -1) {
            newArray[indexPosition] = lastElementItensOfferFlehs;
          }
        } else {
          const indexPosition = newArray.findIndex((el) => el === iten);
          const lastElementItensOfferFlehs = itensOfferFlesh[itensOfferFlesh.length - 1];

          if (indexPosition !== -1) {
            newArray[indexPosition] = lastElementItensOfferFlehs;
          }
        }
      }

      return newArray;
    });

    setItensOfferFlesh((arrayOfferFlesh) => {
      const newArrayOfferFlesh = [...arrayOfferFlesh];
      newArrayOfferFlesh[newArrayOfferFlesh.length - 1] = iten;

      return newArrayOfferFlesh;
    });

    setShowContainerAfterArrowIsTop(false);
    onClickCategory(itensOfferFlesh.length);
  };

  return (
    <Styled.ContainerMain>
      <HeaderMain></HeaderMain>
      <Styled.ContainerFlexOfferMain>
        <Styled.ContainerFlexOffer>
          {objTimeFlashDeals && (
            <FlashOfferAndCountdown
              hours={objTimeFlashDeals.hours}
              minutes={objTimeFlashDeals.minutes}
              seconds={objTimeFlashDeals.seconds}
            />
          )}

          <FleshOfferEveryDayAndHours
            functionGetTheValueTimeFleshOffer={functionGetTheValueTimeFleshOffer}
            getAllHoursFleshOffers={getAllHoursFleshOffers}
          />

          <Styled.ContainerCategoryProduct>
            {itensOfferFlesh.length > 0 &&
              itensOfferFlesh.map((array, i) => (
                <Styled.ContainerCategory
                  key={i}
                  $clickedCategory={objClickedCategory === i + 1}
                  onClick={() => onClickCategory(i + 1)}
                >
                  <Styled.Span>{array}</Styled.Span>
                </Styled.ContainerCategory>
              ))}

            <Styled.ContainerCategoryMore
              onClick={() => onClickCategory(0)}
              onMouseEnter={onMouseEnterContainerCategoryMore}
              onMouseLeave={onMouseLeaveEnterContainerCategoryMore}
            >
              <Styled.Span>Mais</Styled.Span>
              <SvgArrowBottomFlashSale RefSvgArrowBottom={RefSvgArrowBottom} />
            </Styled.ContainerCategoryMore>
          </Styled.ContainerCategoryProduct>
          {showContainerAfterArrowIsTop && (
            <Styled.ContainerItensMoreOfferFlesh
              onMouseEnter={onMouseEnterContainerItensMoreOfferFlesh}
              onMouseLeave={onMouseLeaveContainerItensMoreOfferFlesh}
            >
              {itensMoreOfferFlesh.length > 0 &&
                itensMoreOfferFlesh.map((element, index) => (
                  <Styled.ContainerItenMoreOfferFlesh
                    key={index}
                    onClick={() => onClickNewItenMoreOfferFlesh(element)}
                  >
                    <Styled.H1>{element}</Styled.H1>
                  </Styled.ContainerItenMoreOfferFlesh>
                ))}
            </Styled.ContainerItensMoreOfferFlesh>
          )}

          <ProductFlashOffer getAllProductHourProps={getAllProductHourProps} />

          <FooterForFlashOffer />
          <FooterShopee />
        </Styled.ContainerFlexOffer>
      </Styled.ContainerFlexOfferMain>
    </Styled.ContainerMain>
  );
};

export default FlashSale;
