import * as Styled from './styled';

const OrderUpdates = () => {
  return (
    <Styled.ContainerMain>
      <Styled.ContainerImgNoOrderUpdate>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728557470/img-shopee/4e653cf704e352fd_tgtols.png"
          alt="no-order-update"
        />
      </Styled.ContainerImgNoOrderUpdate>
      <Styled.H1>Nenhuma atualização de pedido ainda</Styled.H1>
    </Styled.ContainerMain>
  );
};

export default OrderUpdates;
