import * as Styled from './styled';
import SvgAddresses from '../../SvgMyAccount/SvgAddresses/SvgAddresses';

const DontHaveAnyAddresses = () => {
  return (
    <Styled.ContainerSvgThereIsNoAddresses className="container-svg-address">
      <SvgAddresses></SvgAddresses>
      <Styled.Span>Você ainda não tem endereços.</Styled.Span>
    </Styled.ContainerSvgThereIsNoAddresses>
  );
};

export default DontHaveAnyAddresses;
