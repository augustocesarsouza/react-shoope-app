import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderFlashSaleMain from '../HeaderFlashSaleComponents/HeaderFlashSaleMain/HeaderFlashSaleMain';
import { Url } from '../../../Utils/Url';
import * as Styled from './styled';
import SvgArrowBottom from '../../Svg/SvgArrowBottom/SvgArrowBottom';
import HeartRed from '../../Svg/HeartRed/HeartRed';

interface GetFlashSaleProductProps {
  id: string;
  productReviewsRate: number;
  productsOfferFlashDTO: ProductsOfferFlashDTOProps;
  quantitySold: number;
  favoriteQuantity: number;
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

  const funcFormatFavoriteQuantity = (favoriteQuantity: number) => {
    if (favoriteQuantity >= 1000) {
      // Divide por 1000 e formata com uma casa decimal

      const formattedQuantity = (favoriteQuantity / 1000).toFixed(1).replace('.', ',');
      return `Favoritar (${formattedQuantity}mil)`;
    } else {
      // Retorna o número sem formatação especial
      return `Favoritar (${favoriteQuantity})`;
    }
  };

  const funcFormatTitleProduct = (productsOfferFlashTitle: string) => {
    let stringTitle = productsOfferFlashTitle.slice(0, 120) + '...';

    return stringTitle;
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

            <Styled.ContainerImageProductAndDescription>
              <Styled.ContainerImageProductAndAllImagePartBottom>
                <Styled.ContainerImageProduct>
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />

                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgPartBottom}
                    alt="img-part-bottom-floating"
                  />
                </Styled.ContainerImageProduct>

                <Styled.ContainerAllImagePartBottom>
                  {/* criar uma tabela para colocar as imagens de baixo! - que pega o id do "product" e nessa tabela
                      vai ter o id ai eu pucho todas as "imagens" dessa tabela com a imagens */}
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                </Styled.ContainerAllImagePartBottom>

                <Styled.ContainerToShareMain>
                  <Styled.ContainerToShare>
                    <Styled.H1>Compartilhar:</Styled.H1>
                    <Styled.Button></Styled.Button>
                    <Styled.Button></Styled.Button>
                    <Styled.Button></Styled.Button>
                    <Styled.Button></Styled.Button>
                  </Styled.ContainerToShare>

                  <Styled.ContainerFavoriteQuantity>
                    <HeartRed />

                    <Styled.Span>
                      {funcFormatFavoriteQuantity(getFlashSaleProduct.favoriteQuantity)}
                    </Styled.Span>
                  </Styled.ContainerFavoriteQuantity>
                </Styled.ContainerToShareMain>
              </Styled.ContainerImageProductAndAllImagePartBottom>

              <Styled.ContainerProductFlashSaleDescription>
                <Styled.H1>
                  {funcFormatTitleProduct(getFlashSaleProduct.productsOfferFlashDTO.title)}
                </Styled.H1>
              </Styled.ContainerProductFlashSaleDescription>
            </Styled.ContainerImageProductAndDescription>
          </Styled.ContainerProductWasClicked>
        )}
      </Styled.ContainerProductWasClickedMain>
    </Styled.ContainerMain>
  );
};

export default FlashSaleProduct;
