import * as Styled from './styled';
import { ProductHighlightProps } from '../ProductHighlightsForYou/ProductHighlightsForYou';

interface ProductHighlightsInfoProps {
  product: ProductHighlightProps;
}

const ProductHighlightsInfo = ({ product }: ProductHighlightsInfoProps) => {
  return (
    <Styled.ContainerProductImgAndPrice key={product.id}>
      <Styled.ContainerProductImg>
        <Styled.Img src={product.imgTop} alt="img-top" />
        <Styled.Img src={product.imgProduct} alt={product.title} />
        <Styled.H1>Vendas mensais {product.quantitySold.toFixed(0)}mil+</Styled.H1>
      </Styled.ContainerProductImg>

      <Styled.H1>{product.title}</Styled.H1>
    </Styled.ContainerProductImgAndPrice>
  );
};

export default ProductHighlightsInfo;
