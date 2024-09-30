import SvgPlus from '../../../../Svg/SvgPlus/SvgPlus';
import * as Styled from './styled';

interface HeaderAddressProps {
  onClickInsertNewAddress: () => void;
}

const HeaderAddress = ({ onClickInsertNewAddress }: HeaderAddressProps) => {
  return (
    <Styled.ContainerMainAddresses>
      <Styled.H1>Meus endereços</Styled.H1>
      <Styled.ContainerInsertAddressMain>
        <Styled.ContainerInsertAddress onClick={onClickInsertNewAddress}>
          <Styled.ContainerSvgPlus className="container-svg-plus">
            <SvgPlus></SvgPlus>
          </Styled.ContainerSvgPlus>
          <Styled.Span>Inserir novo endereço</Styled.Span>
        </Styled.ContainerInsertAddress>
      </Styled.ContainerInsertAddressMain>
    </Styled.ContainerMainAddresses>
  );
};

export default HeaderAddress;
