import SvgExitRed from '../../../../Svg/SvgExitRed/SvgExitRed';
import { CuponsProps } from '../MyCupons/MyCupons';
import * as Styled from './styled';

export interface CuponEachProps {
  objCupons: CuponsProps;
}

const CuponEach = ({ objCupons }: CuponEachProps) => {
  return (
    <Styled.ContainerCuponMain>
      <Styled.ContainerQuantityCupons>
        <Styled.ContainerSvgQuantityX>
          <SvgExitRed fill={'#EE4D2D'} />
          <Styled.Span>{objCupons.quantityCupons}</Styled.Span>
        </Styled.ContainerSvgQuantityX>
      </Styled.ContainerQuantityCupons>
      <Styled.ContainerCuponHeader>
        <Styled.ContainerImgHeader>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728988707/img-shopee/br-11134004-7r98o-lsikizwd3q4ta6_phkhk8.png"
            alt="img-cupon"
          />
          <Styled.ContainerImgExclusive>
            <Styled.Img src={objCupons.secondImg} alt={objCupons.secondImgAlt} />
          </Styled.ContainerImgExclusive>
        </Styled.ContainerImgHeader>
        <Styled.ContainerTitleDescriptionCupon>
          <Styled.Span>{objCupons.spanOne}</Styled.Span>
          <Styled.H1>{objCupons.headerOne}</Styled.H1>
          <Styled.Span>{objCupons.spanTwo}</Styled.Span>
        </Styled.ContainerTitleDescriptionCupon>
      </Styled.ContainerCuponHeader>
      <Styled.ContainerBorder></Styled.ContainerBorder>
      <Styled.ContainerCuponFooter>
        <Styled.ContainerCuponBottomFirst>
          <Styled.Span>{objCupons.spanThree}</Styled.Span>
          <Styled.Span>Condições</Styled.Span>
        </Styled.ContainerCuponBottomFirst>

        <Styled.ContainerCuponBottomSecond>
          <Styled.Button>Usar</Styled.Button>
        </Styled.ContainerCuponBottomSecond>
      </Styled.ContainerCuponFooter>
    </Styled.ContainerCuponMain>
  );
};

export default CuponEach;
