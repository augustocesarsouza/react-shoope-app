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
  TimeLeftProps,
} from '../FleshOfferEveryDayAndHours/FleshOfferEveryDayAndHours';
import SvgFlashDeals from '../../Svg/SvgFlashDeals/SvgFlashDeals';

interface GetAllProductHourProps {
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

  const ContainerFlexOfferRef = useRef<HTMLDivElement | null>(null);

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

    if (ContainerFlexOfferRef.current === null) return;

    const containerFlexOfferRef = ContainerFlexOfferRef.current;

    // containerFlexOfferMainRef.style.marginBottom = '200px';

    document.body.style.overflowY = 'scroll';
    containerFlexOfferRef.style.marginBottom = '300px';

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

  const onMouseEnterContainerCategoryMore = () => {
    if (RefSvgArrowBottom.current === null) return;

    const svg = RefSvgArrowBottom.current;

    svg.style.rotate = '180deg';
  };

  const onMouseLeaveEnterContainerCategoryMore = () => {
    if (RefSvgArrowBottom.current === null) return;

    const svg = RefSvgArrowBottom.current;

    svg.style.rotate = '0deg';
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
      setGetAllProductHourProps(value);
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

  const functionForPriceOriginal = (obj: GetAllProductHourProps): string => {
    const priceOriginal = obj.priceProduct / (1 - obj.discountPercentage / 100);
    // console.log(priceOriginal.toFixed(2));

    return 'R$' + priceOriginal.toFixed(2).replace('.', ',');
  };

  return (
    <Styled.ContainerMain>
      <HeaderMain></HeaderMain>
      <Styled.ContainerFlexOfferMain>
        <Styled.ContainerFlexOffer ref={ContainerFlexOfferRef}>
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
            <Styled.ContainerCategory
              $clickedCategory={objClickedCategory === 1}
              onClick={() => onClickCategory(1)}
            >
              <Styled.Span>Mais Populares</Styled.Span>
            </Styled.ContainerCategory>
            <Styled.ContainerCategory
              $clickedCategory={objClickedCategory === 2}
              onClick={() => onClickCategory(2)}
            >
              <Styled.Span>Lojas Oficiais</Styled.Span>
            </Styled.ContainerCategory>
            <Styled.ContainerCategory
              $clickedCategory={objClickedCategory === 3}
              onClick={() => onClickCategory(3)}
            >
              <Styled.Span>Top Ofertas</Styled.Span>
            </Styled.ContainerCategory>
            <Styled.ContainerCategory
              $clickedCategory={objClickedCategory === 4}
              onClick={() => onClickCategory(4)}
            >
              <Styled.Span>Moda</Styled.Span>
            </Styled.ContainerCategory>
            <Styled.ContainerCategory
              $clickedCategory={objClickedCategory === 5}
              onClick={() => onClickCategory(5)}
            >
              <Styled.Span>Beleza e Cuidado Pessoal</Styled.Span>
            </Styled.ContainerCategory>
            <Styled.ContainerCategory
              $clickedCategory={objClickedCategory === 6}
              onClick={() => onClickCategory(6)}
            >
              <Styled.Span>Ofertas Internacionais</Styled.Span>
            </Styled.ContainerCategory>
            <Styled.ContainerCategory
              $clickedCategory={false}
              onClick={() => onClickCategory(0)}
              onMouseEnter={onMouseEnterContainerCategoryMore}
              onMouseLeave={onMouseLeaveEnterContainerCategoryMore}
            >
              <Styled.Span>Mais</Styled.Span>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="shopee-svg-icon icon-down-arrow-filled"
                ref={RefSvgArrowBottom}
              >
                <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z"></path>
              </svg>
            </Styled.ContainerCategory>
          </Styled.ContainerCategoryProduct>

          <Styled.ContainerAllProductHourMain>
            {getAllProductHourProps.length > 0 &&
              getAllProductHourProps.map((el) => (
                <Styled.ContainerProductFlashOffer key={el.id}>
                  <Styled.ContainerProductHour>
                    <Styled.Img src={el.imgProduct} alt="img-sdlvjk" />
                  </Styled.ContainerProductHour>
                  <Styled.ContainerInfoAboutProductFlashOffer>
                    <Styled.H1>{el.title}</Styled.H1>
                    <Styled.ContainerDiscountPercentageMain>
                      <Styled.Span>{functionForPriceOriginal(el)}</Styled.Span>
                      <Styled.ContainerDiscountPercentage>
                        <SvgFlashDeals />
                        <Styled.Span>-{el.discountPercentage}%</Styled.Span>
                      </Styled.ContainerDiscountPercentage>
                    </Styled.ContainerDiscountPercentageMain>
                  </Styled.ContainerInfoAboutProductFlashOffer>
                </Styled.ContainerProductFlashOffer>
              ))}
          </Styled.ContainerAllProductHourMain>
        </Styled.ContainerFlexOffer>
      </Styled.ContainerFlexOfferMain>
    </Styled.ContainerMain>
  );
};

export default FlashSale;
