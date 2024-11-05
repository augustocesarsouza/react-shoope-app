import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { Url } from '../../../Utils/Url';
import { IProductFlashDeals } from '../../InterfaceAll/IProduct/IProductFlashDeals/IProductFlashDeals';
import HeaderMain from '../../HeaderComponents/HeaderMain/HeaderMain';

const FlashSale = () => {
  const [allProductFlashDeals, setAllProductFlashDeals] = useState<IProductFlashDeals[] | null>(
    null
  );
  const local = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    let localUser = local.state;
    let user: ObjUser = localUser.user;

    getProductOfferFlashAll(user);
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

  return (
    <Styled.ContainerMain>
      <HeaderMain></HeaderMain>
      <Styled.ContainerFlexOfferMain>
        <Styled.ContainerFlexOffer>
          <Styled.H1>OFERTAS RELAMPAGO</Styled.H1>
        </Styled.ContainerFlexOffer>
      </Styled.ContainerFlexOfferMain>
    </Styled.ContainerMain>
  );
};

export default FlashSale;
