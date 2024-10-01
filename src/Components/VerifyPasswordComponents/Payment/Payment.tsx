import * as Styled from './styled';

const Payment = () => {
  return (
    <Styled.ContainerPayment>
      <Styled.H1>PAGAMENTO</Styled.H1>
      <Styled.ContainerImgPayment>
        <Styled.ContainerImg>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942719/Payment-Shopee/Visa_dof3zu.png"
            alt="visa"
          />
        </Styled.ContainerImg>
        <Styled.ContainerImg>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942713/Payment-Shopee/Pix_txx66w.png"
            alt="pix"
          />
        </Styled.ContainerImg>
        <Styled.ContainerImg>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942689/Payment-Shopee/MasterCard_vzo0gv.png"
            alt="mastercard"
          />
        </Styled.ContainerImg>
        <Styled.ContainerImg>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942682/Payment-Shopee/Hipercard_fom6py.png"
            alt="hipercard"
          />
        </Styled.ContainerImg>
        <Styled.ContainerImg>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942675/Payment-Shopee/Elo_ptbvrm.png"
            alt="elo"
          />
        </Styled.ContainerImg>
        <Styled.ContainerImg>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942667/Payment-Shopee/Boleto_sm7nnr.png"
            alt="boleto"
          />
        </Styled.ContainerImg>

        <Styled.ContainerImg>
          <img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942659/Payment-Shopee/AmericanExpress_km1tkn.png"
            alt="AmericanExpress"
          />
        </Styled.ContainerImg>
      </Styled.ContainerImgPayment>
    </Styled.ContainerPayment>
  );
};

export default Payment;
