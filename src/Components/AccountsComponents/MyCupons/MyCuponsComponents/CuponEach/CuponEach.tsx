import SvgExitRed from '../../../../Svg/SvgExitRed/SvgExitRed';
import { CuponDTOProps } from '../MyCupons/MyCupons';
import * as Styled from './styled';

export interface CuponEachProps {
  objCupons: CuponDTOProps;
}

const CuponEach = ({ objCupons }: CuponEachProps) => {
  const formatDateString = () => {
    let date = objCupons.dateValidateCupon.split('T');
    let firstPartDate = date[0];

    let secondPartDate = firstPartDate.split('-');
    let stringFullDate = `Válido até: ${secondPartDate[2]}/${secondPartDate[1]}/${secondPartDate[0]}`;

    return stringFullDate;
  };

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
          {objCupons.secondImg && objCupons.secondImgAlt && (
            <Styled.ContainerImgExclusive>
              <Styled.Img src={objCupons.secondImg} alt={objCupons.secondImgAlt} />
            </Styled.ContainerImgExclusive>
          )}
        </Styled.ContainerImgHeader>
        <Styled.ContainerTitleDescriptionCupon>
          <Styled.Span>{objCupons.firstText}</Styled.Span>
          <Styled.H1>{objCupons.secondText}</Styled.H1>
          <Styled.Span>{objCupons.thirdText}</Styled.Span>
        </Styled.ContainerTitleDescriptionCupon>
      </Styled.ContainerCuponHeader>
      <Styled.ContainerBorder></Styled.ContainerBorder>
      <Styled.ContainerCuponFooter>
        <Styled.ContainerCuponBottomFirst>
          <Styled.Span>{formatDateString()}</Styled.Span>
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
