import { useEffect, useState } from 'react';
import * as Styled from './styled';
import CuponEach from '../CuponEach/CuponEach';
import ContainerTopicCupons from '../ContainerTopicCupons/ContainerTopicCupons';
import HeaderMyCupons from '../HeaderMyCupons/HeaderMyCupons';
import AddCupomInput from '../AddCupomInput/AddCupomInput';
import NoneCopunFound from '../NoneCopunFound/NoneCopunFound';

export interface CuponsProps {
  id: string;
  spanOne: string;
  headerOne: string;
  spanTwo: string;
  spanThree: string;
  quantityCupons: number;
  whatCuponNumber: number;
  secondImg: string;
  secondImgAlt: string;
}

export interface ObjQuantityCupons {
  id: string;
  whichCupon: number;
  quantityCupons: number;
  nameTopCupon: string;
}

const MyCupons = () => {
  const [allObjCupon, setAllObjCupon] = useState<CuponsProps[] | null>(null);
  const [objQuantityCupons, setObjQuantityCupons] = useState<ObjQuantityCupons[] | null>(null);

  useEffect(() => {
    const obj1 = {
      id: 'e3a9bb90-6c7f-4bb5-bfd2-367e62184d7e',
      spanOne: 'Para você',
      headerOne: 'Frete Grátis',
      spanTwo: 'Sem valor mínimo',
      spanThree: 'Termina em: 1 dia',
      quantityCupons: 1,
      whatCuponNumber: 2,
      secondImg:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728989982/img-shopee/sg-11134004-23010-lk448laa7gmv1e_v9lfyz.png',
      secondImgAlt: 'second-img-1',
    };

    const obj2 = {
      id: '0fed561e-fa48-49c5-afee-939726463fd2',
      spanOne: 'Pontos',
      headerOne: 'Cupom de pontos Shopee',
      spanTwo: '100 pontos',
      spanThree: 'Termina em: 2 dia',
      quantityCupons: 2,
      whatCuponNumber: 2,
      secondImg:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728989982/img-shopee/sg-11134004-23010-lk448laa7gmv1e_v9lfyz.png',
      secondImgAlt: 'second-img-2',
    };

    const obj3 = {
      id: '05807704-581e-41d3-96eb-c4d39247ab7f',
      spanOne: 'PRODUTOS COM SELO',
      headerOne: 'Cupom de Frete Grátis',
      spanTwo: 'Compras acima de R$19',
      spanThree: 'Válido até: 31/10/2024',
      quantityCupons: 5,
      whatCuponNumber: 3,
      secondImg:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729004270/img-shopee/br-11134004-7r98o-lzp5gg598n51ca_okvwcz.png',
      secondImgAlt: 'second-img-3',
    };

    const obj4 = {
      id: 'adddc87e-710c-4b05-ad4e-879052992f4b',
      spanOne: 'PRODUTOS COM SELO',
      headerOne: 'Cupom de Frete Grátis',
      spanTwo: 'Compras acima de R$19',
      spanThree: 'Válido até: 31/10/2024',
      quantityCupons: 5,
      whatCuponNumber: 3,
      secondImg:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729004270/img-shopee/br-11134004-7r98o-lzp5gg598n51ca_okvwcz.png',
      secondImgAlt: 'second-img-3',
    };

    const obj5 = {
      id: '5d8d6fc5-99b2-424f-9b3a-6750ff504ff9',
      spanOne: 'TODAS AS LOJAS',
      headerOne: '50% OFF no Frete',
      spanTwo: 'Confira condições',
      spanThree: 'Válido até: 15/05/2024',
      quantityCupons: 2,
      whatCuponNumber: 4,
      secondImg:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729004270/img-shopee/br-11134004-7r98o-lzp5gg598n51ca_okvwcz.png',
      secondImgAlt: 'second-img-3',
    };

    const allObjCupon = [obj1, obj2, obj3, obj4, obj5];

    let quantityTotalCupons = 0;
    let quantityCuponShopee = 0;
    let quantityCuponShop = 0;
    let quantityCuponDigitalPurchase = 0;
    let quantityPartner = 0;
    let quantityFinancialProducts = 0;

    allObjCupon.forEach((el) => {
      if (el.whatCuponNumber === 2) {
        quantityCuponShopee += el.quantityCupons;
      }

      if (el.whatCuponNumber === 3) {
        quantityCuponShop += el.quantityCupons;
      }

      if (el.whatCuponNumber === 4) {
        quantityCuponDigitalPurchase += el.quantityCupons;
      }

      if (el.whatCuponNumber === 5) {
        quantityPartner += el.quantityCupons;
      }

      if (el.whatCuponNumber === 6) {
        quantityFinancialProducts += el.quantityCupons;
      }
    });

    const objCuponTotal = {
      id: 'f9200fe0-e2be-47ef-84ed-a47430844b7c',
      whichCupon: 1,
      quantityCupons: quantityTotalCupons,
      nameTopCupon: 'Todos',
    };

    const objCuponShopee = {
      id: 'e9591fd8-c01e-4f72-ad9c-420ae558b513',
      whichCupon: 2,
      quantityCupons: quantityCuponShopee,
      nameTopCupon: 'Shopee',
    };

    const objCuponShop = {
      id: '0a33522e-8ba5-4fdd-8039-829b4f5cec8b',
      whichCupon: 3,
      quantityCupons: quantityCuponShop,
      nameTopCupon: 'Loja',
    };

    const objCuponDigitalPurchase = {
      id: '78abbca1-bd14-4f4c-8b9b-2bdd10e7d2f9',
      whichCupon: 4,
      quantityCupons: quantityCuponDigitalPurchase,
      nameTopCupon: 'Compra Digital',
    };

    const objCuponDigital5 = {
      id: '78abgca1-bd14-4f4c-8b9b-2bdd10e7d2f9',
      whichCupon: 5,
      quantityCupons: quantityPartner,
      nameTopCupon: 'Parceiro',
    };

    const objCuponDigital6 = {
      id: '78abgca1-by14-4f4c-8b9b-2bdd10e7d2f9',
      whichCupon: 6,
      quantityCupons: quantityFinancialProducts,
      nameTopCupon: 'Produtos financeiros',
    };

    let quantityCupons =
      quantityCuponShopee +
      quantityCuponShop +
      quantityCuponDigitalPurchase +
      quantityPartner +
      quantityFinancialProducts;

    objCuponTotal.quantityCupons = quantityCupons;

    const allWhechCupon = [
      objCuponTotal,
      objCuponShopee,
      objCuponShop,
      objCuponDigitalPurchase,
      objCuponDigital5,
      objCuponDigital6,
    ];

    setObjQuantityCupons(allWhechCupon);
    setAllObjCupon(allObjCupon);
  }, []);

  const [allObjCuponsFilters, setAllObjCuponsFilters] = useState<CuponsProps[]>([]);
  const [whichWasClickedCupon, setWhichWasClickedCupon] = useState(1);

  const whatTopicClicked = (numberClicked: number) => {
    if (objQuantityCupons === null || allObjCupon === null) return;
    const allObjCuponsFilters = allObjCupon.filter((el) => el.whatCuponNumber === numberClicked);
    setAllObjCuponsFilters(allObjCuponsFilters);
    setWhichWasClickedCupon(numberClicked);
  };

  return (
    <Styled.ContainerMain>
      <HeaderMyCupons />
      <AddCupomInput />

      <Styled.ContainerTopicsMyCupons>
        {objQuantityCupons &&
          objQuantityCupons.map((el) => (
            <Styled.ContainerTopicCupons $whichCupon={el.whichCupon} key={el.id}>
              <ContainerTopicCupons el={el} whatTopicClicked={whatTopicClicked} />
            </Styled.ContainerTopicCupons>
          ))}
      </Styled.ContainerTopicsMyCupons>

      <Styled.ContainerCuponsFooter>
        {allObjCuponsFilters &&
          allObjCuponsFilters.length > 0 &&
          allObjCuponsFilters.map((obj) => (
            <Styled.Container key={obj.id}>
              <CuponEach objCupons={obj} />
            </Styled.Container>
          ))}

        {allObjCuponsFilters.length <= 0 &&
          whichWasClickedCupon === 1 &&
          allObjCupon &&
          allObjCupon.map((obj) => (
            <Styled.Container key={obj.id}>
              <CuponEach objCupons={obj} />
            </Styled.Container>
          ))}

        {allObjCuponsFilters.length <= 0 && whichWasClickedCupon > 1 && <NoneCopunFound />}
      </Styled.ContainerCuponsFooter>
    </Styled.ContainerMain>
  );
};

export default MyCupons;
