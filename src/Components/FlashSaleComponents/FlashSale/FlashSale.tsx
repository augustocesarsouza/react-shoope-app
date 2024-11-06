import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { Url } from '../../../Utils/Url';
import { IProductFlashDeals } from '../../InterfaceAll/IProduct/IProductFlashDeals/IProductFlashDeals';
import HeaderMain from '../../HeaderComponents/HeaderMain/HeaderMain';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import {
  ObjTimeFleshOffer,
  TimeEndPromotionFleshOffer,
} from '../../HomeBodyComponents/ProductFlashDeals/ProductFlashDeals';
import CryptoJS from 'crypto-js';
import FlashOfferAndCountdown from '../FlashOfferAndCountdown/FlashOfferAndCountdown';

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
    let timeEnd = localUser.timeEnd;
    functionGetTheValueTimeFleshOffer(timeEnd, user);

    // setObjTimeFlashDeals(timeWhereStopFlashOffer);

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

    const savedCountdown = localStorage.getItem('countdown');

    if (savedCountdown) {
      let secretKey = import.meta.env.VITE__APP_SECRET_KEY;

      if (secretKey === undefined) {
        return;
      }

      try {
        const bytes = CryptoJS.AES.decrypt(savedCountdown, secretKey);
        const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

        functionGetTheValueTimeFleshOffer(decryptedString, objUser.user);
      } catch (error) {
        console.error('Erro ao converter os dados descriptografados:', error);
      }
    } else {
      GetProductOfferFlashTimeend(objUser.user);
    }

    // getProductOfferFlashAll(userLogged);

    getProductOfferFlashAll(objUser.user);
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

  const GetProductOfferFlashTimeend = async (user: ObjUser) => {
    const res = await fetch(`${Url}/get-product-offer-flash-timeend/${user.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`,
        uid: user.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();
      let dataTime: TimeEndPromotionFleshOffer = json.data;

      const secretKey = import.meta.env.VITE__APP_SECRET_KEY;

      if (secretKey === undefined) return;

      const encrypted = CryptoJS.AES.encrypt(dataTime.timeEnd, secretKey).toString();

      localStorage.setItem('countdown', encrypted);

      functionGetTheValueTimeFleshOffer(dataTime.timeEnd, user);
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

  const functionGetTheValueTimeFleshOffer = (timeEnd: string, userLogged: ObjUser) => {
    const targetDateTime = new Date(timeEnd);
    const now = new Date();

    const diffInMilliseconds = targetDateTime.getTime() - now.getTime();

    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    // const days = Math.floor(diffInSeconds / (24 * 3600));
    const hours = Math.floor((diffInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((diffInSeconds % 3600) / 60);
    const seconds = diffInSeconds % 60;

    if (seconds < 0) {
      // AQUI VENCE O "TIMEEND" PROMOTIONFLESHOFFER -Aqui da para pegar novos Product Flesh Offer
      GetProductOfferFlashTimeend(userLogged);
      return;
    }

    const obj: ObjTimeFleshOffer = {
      hours,
      minutes,
      seconds,
    };

    setObjTimeFlashDeals(obj);
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
        </Styled.ContainerFlexOffer>
      </Styled.ContainerFlexOfferMain>
    </Styled.ContainerMain>
  );
};

export default FlashSale;
