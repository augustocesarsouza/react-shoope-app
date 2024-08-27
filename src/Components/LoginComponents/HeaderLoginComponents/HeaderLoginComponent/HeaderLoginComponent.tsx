import SvgShopee from '../../AllSvgLogin/SvgShopee/SvgShopee';
import * as Styled from './styled';

const HeaderLoginComponent = () => {
  return (
    <Styled.ContainerHeaderLoginComponentMain>
      <Styled.ContainerHeaderLoginComponent>
        <Styled.ContainerSvgShopeeAndSpanRegister>
          <Styled.ContainerSvgShopeeLogin>
            <SvgShopee></SvgShopee>
          </Styled.ContainerSvgShopeeLogin>
          <Styled.Span>Cadastrar</Styled.Span>
        </Styled.ContainerSvgShopeeAndSpanRegister>
        <Styled.ContainerNeedHelp>
          <Styled.Span>Precisa de ajuda?</Styled.Span>
        </Styled.ContainerNeedHelp>
      </Styled.ContainerHeaderLoginComponent>
    </Styled.ContainerHeaderLoginComponentMain>
  );
};

export default HeaderLoginComponent;
