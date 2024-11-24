import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderFlashSaleMain from '../HeaderFlashSaleComponents/HeaderFlashSaleMain/HeaderFlashSaleMain';
import { Url } from '../../../Utils/Url';
import * as Styled from './styled';
import SvgArrowBottom from '../../Svg/SvgArrowBottom/SvgArrowBottom';
import ProductFlashSaleAllInfo, {
  GetFlashSaleProductProps,
} from '../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';
import MessageSvg from '../../Svg/MessageSvg/MessageSvg';
import PageStoreSvg from '../../Svg/PageStoreSvg/PageStoreSvg';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { IProductSeller } from '../../InterfaceAll/IProductSeller/IProductSeller';

const FlashSaleProduct = () => {
  const obj = useParams();
  const nav = useNavigate();
  const [getFlashSaleProduct, setGetFlashSaleProduct] = useState<GetFlashSaleProductProps | null>(
    null
  );

  const [objUser, setObjUser] = useState<ObjUser | null>(null);

  useEffect(() => {
    const { id } = obj;

    const objUser = GetUserFromLocalStorage();

    if (!objUser.isNullUserLocalStorage && objUser.user !== null) {
      setObjUser(objUser.user);
    }

    if (id && objUser.user) {
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

      console.log(getDate.userSellerProductDTO);
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

  const formatChatNow = (chatNow: string) => {
    let chatNowFormat = chatNow.slice(0, 12) + '...';

    return chatNowFormat;
  };

  const formatViewPageStore = (string: string) => {
    let stringFormat = string.slice(0, 13) + '...';

    return stringFormat;
  };

  return (
    <Styled.ContainerMain>
      <HeaderFlashSaleMain></HeaderFlashSaleMain>
      <Styled.ContainerProductWasClickedMain>
        {getFlashSaleProduct && (
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

            <ProductFlashSaleAllInfo getFlashSaleProduct={getFlashSaleProduct} />

            <Styled.ContainerAllInfoAboutUserWhoCreatedProduct>
              <Styled.ContainerUserCreatedProductInfo>
                <Styled.ContainerUserImg>
                  <Styled.Img
                    src="https://down-br.img.susercontent.com/file/c49fb4a09d3ea5ddbbfa10244c97e306@resize_w80_nl.webp"
                    alt="img-user-created"
                  />

                  <Styled.Img
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/eafc82fc786e2cf9ba66.png"
                    alt="official-store"
                  />
                </Styled.ContainerUserImg>

                <Styled.ContainerUserNameAndOtherInfos>
                  <Styled.H1>ENGAGE-ELETRO</Styled.H1>
                  <Styled.Span>Último login há 38 minutos</Styled.Span>

                  <Styled.ContainerChatAndViewStorePage>
                    <Styled.Container>
                      <MessageSvg />
                      <Styled.Span>{formatChatNow('Conversar Agora')}</Styled.Span>
                    </Styled.Container>

                    <Styled.Container>
                      <PageStoreSvg />
                      <Styled.Span>{formatViewPageStore('Ver Página Da Loja')}</Styled.Span>
                    </Styled.Container>
                  </Styled.ContainerChatAndViewStorePage>
                </Styled.ContainerUserNameAndOtherInfos>
              </Styled.ContainerUserCreatedProductInfo>

              <Styled.ContainerOtherInfoAboutAccountCreatedProduct>
                <Styled.ContainerReviewsRateChatResponseStoreDate $whatItIs={1}>
                  <Styled.Container>
                    <Styled.Span>Avaliações</Styled.Span>
                    <Styled.Span>15,7mil</Styled.Span>
                  </Styled.Container>

                  <Styled.Container>
                    <Styled.SpanChatResponseRate>
                      Taxa de resposta do chat
                    </Styled.SpanChatResponseRate>
                    <Styled.Span>66%</Styled.Span>
                  </Styled.Container>

                  <Styled.Container>
                    <Styled.Span>Loja Shopee desde</Styled.Span>
                    <Styled.Span>18 meses atrás</Styled.Span>
                  </Styled.Container>
                </Styled.ContainerReviewsRateChatResponseStoreDate>
                <Styled.ContainerReviewsRateChatResponseStoreDate $whatItIs={2}>
                  <Styled.Container>
                    <Styled.Span>Produtos</Styled.Span>
                    <Styled.Span>641</Styled.Span>
                  </Styled.Container>

                  <Styled.Container>
                    <Styled.SpanRespondsToChat>
                      Geralmente responde o chat em
                    </Styled.SpanRespondsToChat>
                    <Styled.Span>poucas horas</Styled.Span>
                  </Styled.Container>

                  <Styled.Container>
                    <Styled.Span>Seguidores</Styled.Span>
                    <Styled.Span>35,8mil</Styled.Span>
                  </Styled.Container>
                </Styled.ContainerReviewsRateChatResponseStoreDate>
              </Styled.ContainerOtherInfoAboutAccountCreatedProduct>
            </Styled.ContainerAllInfoAboutUserWhoCreatedProduct>
          </Styled.ContainerProductWasClicked>
        )}
      </Styled.ContainerProductWasClickedMain>
    </Styled.ContainerMain>
  );
};

export default FlashSaleProduct;
