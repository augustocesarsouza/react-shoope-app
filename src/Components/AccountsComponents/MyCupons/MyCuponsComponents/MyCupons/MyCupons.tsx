import { useEffect, useState } from 'react';
import * as Styled from './styled';
import CuponEach from '../CuponEach/CuponEach';
import ContainerTopicCupons from '../ContainerTopicCupons/ContainerTopicCupons';
import HeaderMyCupons from '../HeaderMyCupons/HeaderMyCupons';
import AddCupomInput from '../AddCupomInput/AddCupomInput';
import NoneCopunFound from '../NoneCopunFound/NoneCopunFound';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';
import { useLocation, useNavigate } from 'react-router-dom';
import { Url } from '../../../../../Utils/Url';

export interface CuponsProps {
  id: string;
  spanOne: string;
  headerOne: string;
  spanTwo: string;
  spanThree: string;
  quantityCupons: number;
  whatCuponNumber: number;
  secondImg: string | null;
  secondImgAlt: string | null;
}

export interface ObjQuantityCupons {
  id: string;
  whichCupon: number;
  quantityCupons: number;
  nameTopCupon: string;
}

export interface DataCuposProps {
  cuponDTO: CuponDTOProps;
}

interface CuponDTOProps {
  dateValidateCupon: string;
  firstText: string;
  id: string;
  quantityCupons: number;
  secondImg: string;
  secondImgAlt: string;
  secondText: string;
  thirdText: string;
  whatCuponNumber: number;
}

const MyCupons = () => {
  const [allObjCupon, setAllObjCupon] = useState<DataCuposProps[] | null>(null);
  const [objQuantityCupons, setObjQuantityCupons] = useState<ObjQuantityCupons[] | null>(null);
  const [userObj, setUserObj] = useState<ObjUser | null>(null);

  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const objState: ObjUser = location.state.user;
      setUserObj(objState);
      getCuponsByUserId(objState);
    }
  }, []);

  const getCuponsByUserId = async (objUser: ObjUser) => {
    if (objUser === null) return;

    const res = await fetch(`${Url}/get-all-cupon-by-user-id/${objUser.id}`);
    const json = await res.json();

    const dataCupos: DataCuposProps[] = json.data;
    // dataCupos.forEach((el) => {
    //   console.log(el.cuponDTO);
    // });

    const allObjCupon = dataCupos;

    let quantityTotalCupons = 0;
    let quantityCuponShopee = 0;
    let quantityCuponShop = 0;
    let quantityCuponDigitalPurchase = 0;
    let quantityPartner = 0;
    let quantityFinancialProducts = 0;

    allObjCupon.forEach((el) => {
      if (el.cuponDTO.whatCuponNumber === 2) {
        quantityCuponShopee += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 3) {
        quantityCuponShop += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 4) {
        quantityCuponDigitalPurchase += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 5) {
        quantityPartner += el.cuponDTO.quantityCupons;
      }

      if (el.cuponDTO.whatCuponNumber === 6) {
        quantityFinancialProducts += el.cuponDTO.quantityCupons;
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
  };

  const [allObjCuponsFilters, setAllObjCuponsFilters] = useState<DataCuposProps[]>([]);
  const [whichWasClickedCupon, setWhichWasClickedCupon] = useState(1);

  const whatTopicClicked = (numberClicked: number) => {
    if (objQuantityCupons === null || allObjCupon === null) return;
    const allObjCuponsFilters = allObjCupon.filter(
      (el) => el.cuponDTO.whatCuponNumber === numberClicked
    );
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
            <Styled.Container key={obj.cuponDTO.id}>
              <CuponEach objCupons={obj} />
            </Styled.Container>
          ))}

        {allObjCuponsFilters.length <= 0 &&
          whichWasClickedCupon === 1 &&
          allObjCupon &&
          allObjCupon.map((obj) => (
            <Styled.Container key={obj.cuponDTO.id}>
              <CuponEach objCupons={obj} />
            </Styled.Container>
          ))}

        {allObjCuponsFilters.length <= 0 && whichWasClickedCupon > 1 && <NoneCopunFound />}
      </Styled.ContainerCuponsFooter>
    </Styled.ContainerMain>
  );
};

export default MyCupons;
