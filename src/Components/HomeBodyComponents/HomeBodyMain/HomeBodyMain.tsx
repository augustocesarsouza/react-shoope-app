import { useEffect, useState } from 'react';
import CategoryItensBar from '../CategoryItensBar/CategoryItensBar';
import HeaderBodyHomeShopee from '../HeaderBodyHomeShopee/HeaderBodyHomeShopee';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import ProductFlashDeals from '../ProductFlashDeals/ProductFlashDeals';
import CategoryAllMan from '../CategoryAll/CategoryAllMan/CategoryAllMan';

const HomeBodyMain = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [userLogged, setUserLogged] = useState<ObjUser | null>(null);

  useEffect(() => {
    const objState = location.state;
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    const userLogged = JSON.parse(userLocalStorage);
    setUserLogged(userLogged);
  }, []);

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

        <Styled.ContainerCategorys>
          <Styled.H1>Categorias</Styled.H1>

          <CategoryAllMan />
        </Styled.ContainerCategorys>
      </Styled.ContainerWithForAll>
    </Styled.ContainerMain>
  );
};

export default HomeBodyMain;
