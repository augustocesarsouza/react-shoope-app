import { useNavigate, useParams } from 'react-router-dom';
import * as Styled from './styled';
import { Url } from '../../../Utils/Url';
import { useEffect, useRef, useState } from 'react';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { IProductDescription } from '../../InterfaceAll/IProductDescription/IProductDescription';

const ProductDescription = () => {
  const obj = useParams();
  const nav = useNavigate();

  const RefContainerMainProductDescription = useRef<HTMLDivElement | null>(null);

  const [productDescriptionObj, setProductDescriptionObj] = useState<IProductDescription | null>(
    null
  );

  useEffect(() => {
    const { id } = obj;

    const objUser = GetUserFromLocalStorage();

    if (id && objUser.user) {
      getUserSellerProductIdByProductId(id, objUser.user);
    }
  }, []);

  const getUserSellerProductIdByProductId = async (productFlashSaleId: string, user: ObjUser) => {
    const res = await fetch(
      `${Url}/product-description/get-product-description-by-product-id/${productFlashSaleId}`,
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
      let getDate: IProductDescription | null = json.data;

      if (getDate) {
        let containerMain = RefContainerMainProductDescription.current;

        if (containerMain === null) return;

        containerMain.style.display = 'flex';

        setProductDescriptionObj(getDate);
      }
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
    // ESSA PARTE DA DESCRIÇÃO DO PRODUCT É MELHOR QUE ELA ESTEJA NA HORA QUE A PESSOA ESTIVER
    // CRIANDO O PRODUCT PARA POSTAR AI VAI TER UM CAMPO PARA O USUARIO COLOCAR TODAS AS DESCRIÇÃO DO PRODUCT
    // DELE SEU EU PRECISAR SABER QUAL OS CAMPO ELE QUER COLOCAR ELE PODE EDITAR DO JEITO QUE ELE COLOCAR!
  };

  return (
    <Styled.ContainerMain ref={RefContainerMainProductDescription}>
      {productDescriptionObj && (
        <Styled.ContainerDescription>
          <Styled.H1>Descrição do Produto</Styled.H1>
          <Styled.Span>{productDescriptionObj.description}</Styled.Span>

          <Styled.ContainerCharacteristics>
            <Styled.H1>Características</Styled.H1>

            {productDescriptionObj &&
              productDescriptionObj.characteristics.map((el, i) => (
                <Styled.Span key={i}>:: {el}</Styled.Span>
              ))}
          </Styled.ContainerCharacteristics>
        </Styled.ContainerDescription>
      )}
    </Styled.ContainerMain>
  );
};

export default ProductDescription;
