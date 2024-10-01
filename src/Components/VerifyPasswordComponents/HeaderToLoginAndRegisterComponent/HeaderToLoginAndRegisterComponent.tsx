import SvgShopee from '../../HeaderComponents/AllSvgHeader/SvgShopee/SvgShopee';
import * as Styled from './styled';

interface HeaderToLoginAndRegisterComponentComponent {
  valueToSpan: string;
}

const HeaderToLoginAndRegisterComponent = ({
  valueToSpan,
}: HeaderToLoginAndRegisterComponentComponent) => {
  return (
    <Styled.ContainerHeaderLoginComponentMain>
      <Styled.ContainerHeaderLoginComponent>
        <Styled.ContainerSvgShopeeAndSpanRegister>
          <Styled.ContainerSvgShopeeLogin>
            <SvgShopee></SvgShopee>
          </Styled.ContainerSvgShopeeLogin>
          {/* <Styled.Span>Cadastrar</Styled.Span> */}
          <Styled.Span>{valueToSpan}</Styled.Span>
        </Styled.ContainerSvgShopeeAndSpanRegister>
        <Styled.ContainerNeedHelp>
          <Styled.Span>Precisa de ajuda?</Styled.Span>
        </Styled.ContainerNeedHelp>
      </Styled.ContainerHeaderLoginComponent>
    </Styled.ContainerHeaderLoginComponentMain>
  );
};

export default HeaderToLoginAndRegisterComponent;
