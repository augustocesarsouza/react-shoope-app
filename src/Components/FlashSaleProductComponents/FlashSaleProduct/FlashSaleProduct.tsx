import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderFlashSaleMain from '../HeaderFlashSaleComponents/HeaderFlashSaleMain/HeaderFlashSaleMain';
import { Url } from '../../../Utils/Url';
import * as Styled from './styled';
import SvgArrowBottom from '../../Svg/SvgArrowBottom/SvgArrowBottom';
import ProductFlashSaleAllInfo, {
  GetFlashSaleProductProps,
} from '../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { IProductSeller } from '../../InterfaceAll/IProductSeller/IProductSeller';
import UserSellerProduct from '../UserSellerProduct/UserSellerProduct';

const FlashSaleProduct = () => {
  const obj = useParams();
  const nav = useNavigate();
  const [getFlashSaleProduct, setGetFlashSaleProduct] = useState<GetFlashSaleProductProps | null>(
    null
  );

  const [userSellerProductDTO, setUserSellerProductDTO] = useState<IProductSeller | null>(null);

  const [idProductClicked, setIdProductClicked] = useState<string | null>(null);

  useEffect(() => {
    const { id } = obj;

    const objUser = GetUserFromLocalStorage();

    if (id && objUser.user) {
      setIdProductClicked(id);
      getFlashSaleProductByProductFlashSaleId(id, objUser.user);
      getUserSellerProductIdByProductId(id, objUser.user);
    }
  }, []);

  const getFlashSaleProductByProductFlashSaleId = async (
    productFlashSaleId: string,
    user: ObjUser
  ) => {
    const res = await fetch(
      `${Url}/get-flash-sale-product-by-product-flash-sale-id/${productFlashSaleId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          uid: user.id,
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.status === 200) {
      const json = await res.json();
      let getFlashSaleProduct: GetFlashSaleProductProps = json.data;
      setGetFlashSaleProduct(getFlashSaleProduct);
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

  const getUserSellerProductIdByProductId = async (productFlashSaleId: string, user: ObjUser) => {
    const res = await fetch(
      `${Url}/product-seller/get-user-seller-product-id/${productFlashSaleId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          uid: user.id,
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.status === 200) {
      const json = await res.json();
      let getDate: IProductSeller = json.data;
      setUserSellerProductDTO(getDate);
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
      <HeaderFlashSaleMain></HeaderFlashSaleMain>
      <Styled.ContainerProductWasClickedMain>
        {getFlashSaleProduct && idProductClicked !== null && (
          <Styled.ContainerProductWasClicked>
            <Styled.ContainerProductLayers>
              <Styled.Span>Shopee</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Saúde</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Cuidados Pessoais</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Cuidados Bucais</Styled.Span>
              <SvgArrowBottom />
              <Styled.H1>
                {getFlashSaleProduct.productsOfferFlashDTO.title.substring(0, 50)}
              </Styled.H1>
            </Styled.ContainerProductLayers>

            <ProductFlashSaleAllInfo
              getFlashSaleProduct={getFlashSaleProduct}
              idProductClicked={idProductClicked}
            />

            {userSellerProductDTO && (
              <UserSellerProduct userSellerProductDTO={userSellerProductDTO} />
            )}
          </Styled.ContainerProductWasClicked>
        )}
      </Styled.ContainerProductWasClickedMain>
    </Styled.ContainerMain>
  );
};

export default FlashSaleProduct;
