import { useEffect, useState } from 'react';
import SvgArrowBottom from '../../Svg/SvgArrowBottom/SvgArrowBottom';
import * as Styled from './styled';
import { Url } from '../../../Utils/Url';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { useNavigate } from 'react-router-dom';
import { IProductDetail } from '../../InterfaceAll/IProductDetail/IProductDetail';

interface ProductFlashSaleDetailsProps {
  productCategories: string[];
  idProductClicked: string;
}
const ProductFlashSaleDetails = ({
  productCategories,
  idProductClicked,
}: ProductFlashSaleDetailsProps) => {
  const nav = useNavigate();

  const [getProductDetail, setGetProductDetail] = useState<IProductDetail | null>(null);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    if (objUser.user) {
      getProductDetailByProductId(idProductClicked, objUser.user);
    }
  }, [idProductClicked]);

  const getProductDetailByProductId = async (idProductClicked: string, user: ObjUser) => {
    const res = await fetch(
      `${Url}/product-detail/get-product-detail-by-product-id/${idProductClicked}`,
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
      let getProductDetail: IProductDetail = json.data;
      setGetProductDetail(getProductDetail);
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
      <Styled.H1>Detalhes do Produto</Styled.H1>

      <Styled.ContainerAllPropertyProduct>
        <Styled.H1>Categoria</Styled.H1>
        <Styled.ContainerCategoryFor>
          {productCategories &&
            productCategories.map((el, i) => (
              <Styled.Container key={i}>
                <Styled.Span>{el}</Styled.Span>
                <SvgArrowBottom />
              </Styled.Container>
            ))}
        </Styled.ContainerCategoryFor>
      </Styled.ContainerAllPropertyProduct>

      {getProductDetail && (
        <>
          <Styled.ContainerAllPropertyProduct>
            <Styled.H1>Estoque Promocional</Styled.H1>
            <Styled.ContainerQuantityPromotionalStock>
              <Styled.Span>{getProductDetail.promotionalStock}</Styled.Span>
            </Styled.ContainerQuantityPromotionalStock>
          </Styled.ContainerAllPropertyProduct>
          <Styled.ContainerAllPropertyProduct>
            <Styled.H1>Estoque Total</Styled.H1>
            <Styled.ContainerQuantityPromotionalStock>
              <Styled.Span>{getProductDetail.totalStock}</Styled.Span>
            </Styled.ContainerQuantityPromotionalStock>
          </Styled.ContainerAllPropertyProduct>

          <Styled.ContainerAllPropertyProduct>
            <Styled.H1>Marca</Styled.H1>
            <Styled.ContainerMark>
              <Styled.Span>{getProductDetail.mark}</Styled.Span>
            </Styled.ContainerMark>
          </Styled.ContainerAllPropertyProduct>

          {getProductDetail.warrantlyDuration && (
            <Styled.ContainerAllPropertyProduct>
              <Styled.H1>Duração da Garantia</Styled.H1>
              <Styled.ContainerQuantityPromotionalStock>
                <Styled.Span>{getProductDetail.warrantlyDuration}</Styled.Span>
              </Styled.ContainerQuantityPromotionalStock>
            </Styled.ContainerAllPropertyProduct>
          )}

          {getProductDetail.warrantlyType && (
            <Styled.ContainerAllPropertyProduct>
              <Styled.H1>Tipo de Garantia</Styled.H1>
              <Styled.ContainerQuantityPromotionalStock>
                <Styled.Span>{getProductDetail.warrantlyType}</Styled.Span>
              </Styled.ContainerQuantityPromotionalStock>
            </Styled.ContainerAllPropertyProduct>
          )}

          {getProductDetail.productWeight && (
            <Styled.ContainerAllPropertyProduct>
              <Styled.H1>Peso do Produto</Styled.H1>
              <Styled.ContainerQuantityPromotionalStock>
                <Styled.Span>{getProductDetail.productWeight}</Styled.Span>
              </Styled.ContainerQuantityPromotionalStock>
            </Styled.ContainerAllPropertyProduct>
          )}

          {getProductDetail.energyConsumption && (
            <Styled.ContainerAllPropertyProduct>
              <Styled.H1>Consumo de Energia</Styled.H1>
              <Styled.ContainerQuantityPromotionalStock>
                <Styled.Span>{getProductDetail.energyConsumption}</Styled.Span>
              </Styled.ContainerQuantityPromotionalStock>
            </Styled.ContainerAllPropertyProduct>
          )}

          {getProductDetail.amount && (
            <Styled.ContainerAllPropertyProduct>
              <Styled.H1>Quantidade</Styled.H1>
              <Styled.ContainerQuantityPromotionalStock>
                <Styled.Span>{getProductDetail.amount}</Styled.Span>
              </Styled.ContainerQuantityPromotionalStock>
            </Styled.ContainerAllPropertyProduct>
          )}

          {getProductDetail.material && (
            <Styled.ContainerAllPropertyProduct>
              <Styled.H1>Material</Styled.H1>
              <Styled.ContainerQuantityPromotionalStock>
                <Styled.Span>{getProductDetail.material}</Styled.Span>
              </Styled.ContainerQuantityPromotionalStock>
            </Styled.ContainerAllPropertyProduct>
          )}

          {getProductDetail.sendingOf && (
            <Styled.ContainerAllPropertyProduct>
              <Styled.H1>Envio de</Styled.H1>
              <Styled.ContainerQuantityPromotionalStock>
                <Styled.Span>{getProductDetail.sendingOf}</Styled.Span>
              </Styled.ContainerQuantityPromotionalStock>
            </Styled.ContainerAllPropertyProduct>
          )}
        </>
      )}
    </Styled.ContainerMain>
  );
};

export default ProductFlashSaleDetails;
