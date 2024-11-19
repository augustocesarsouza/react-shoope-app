import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderFlashSaleMain from '../HeaderFlashSaleComponents/HeaderFlashSaleMain/HeaderFlashSaleMain';
import { Url } from '../../../Utils/Url';
import * as Styled from './styled';

interface GetFlashSaleProductProps {
  id: string;
  productReviewsRate: number;
  productsOfferFlashDTO: ProductsOfferFlashDTOProps;
  quantitySold: number;
}

interface ProductsOfferFlashDTOProps {
  altValue: string;
  discountPercentage: number;
  imgPartBottom: string;
  imgProduct: string;
  priceProduct: number;
  title: string;
}

const FlashSaleProduct = () => {
  const obj = useParams();
  const nav = useNavigate();
  const [getFlashSaleProduct, setGetFlashSaleProduct] = useState<GetFlashSaleProductProps | null>(
    null
  );

  useEffect(() => {
    const { id } = obj;

    if (id) {
      getFlashSaleProductByProductFlashSaleId(id);
    }
  }, []);

  const getFlashSaleProductByProductFlashSaleId = async (productFlashSaleId: string) => {
    const res = await fetch(
      `${Url}/get-flash-sale-product-by-product-flash-sale-id/${productFlashSaleId}`
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

  return (
    <Styled.ContainerMain>
      <HeaderFlashSaleMain></HeaderFlashSaleMain>
      <Styled.ContainerProductWasClickedMain>
        <Styled.ContainerProductWasClicked>
          <Styled.ContainerProductLayers>
            <Styled.Span>Shopee</Styled.Span>
            <Styled.Span>{'>'}</Styled.Span>
            <Styled.Span>Saúde</Styled.Span>
            <Styled.Span>{'>'}</Styled.Span>
            <Styled.Span>Cuidados Pessoais</Styled.Span>
            <Styled.Span>{'>'}</Styled.Span>
            <Styled.Span>Cuidados Bucais</Styled.Span>
            <Styled.Span>{'>'}</Styled.Span>
            {getFlashSaleProduct && (
              <Styled.Span>
                {getFlashSaleProduct.productsOfferFlashDTO.title.substring(0, 50)}
              </Styled.Span>
            )}
          </Styled.ContainerProductLayers>
        </Styled.ContainerProductWasClicked>
      </Styled.ContainerProductWasClickedMain>
    </Styled.ContainerMain>
  );
};

export default FlashSaleProduct;
