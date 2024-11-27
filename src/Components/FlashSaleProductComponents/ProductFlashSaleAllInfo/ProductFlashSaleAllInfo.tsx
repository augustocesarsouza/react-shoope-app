import * as Styled from './styled';
import { useState, useEffect } from 'react';
import { Url } from '../../../Utils/Url';
import { useNavigate } from 'react-router-dom';
import ProductFlashSaleFirstPart from '../ProductFlashSaleAllInfoComponenet/ProductFlashSaleFirstPart/ProductFlashSaleFirstPart';
import ProductFlashSaleSecondPart from '../ProductFlashSaleAllInfoComponenet/ProductFlashSaleSecondPart/ProductFlashSaleSecondPart';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';

interface ProductFlashSaleAllInfoProps {
  getFlashSaleProduct: GetFlashSaleProductProps;
  idProductClicked: string;
}

export interface GetFlashSaleProductProps {
  id: string;
  productsOfferFlashDTO: ProductsOfferFlashDTOProps;
  productReviewsRate: number;
  quantitySold: number;
  favoriteQuantity: number;
  quantityAvaliation: number;
  coins: number;
  creditCard: string;
  voltage: string;
  quantityPiece: number;
  productHaveInsurance: boolean;
}

export interface ProductsOfferFlashDTOProps {
  altValue: string;
  discountPercentage: number;
  imgPartBottom: string;
  imgProduct: string;
  priceProduct: number;
  title: string;
}

export interface ProductOptionImageProps {
  id: string;
  imageUrl: string;
  imgAlt: string;
  optionType: string;
  titleOptionType: string;
}

const ProductFlashSaleAllInfo = ({
  getFlashSaleProduct,
  idProductClicked,
}: ProductFlashSaleAllInfoProps) => {
  const nav = useNavigate();

  const [productOptionImageAll, setProductOptionImageAll] = useState<
    ProductOptionImageProps[] | null
  >(null);

  const [productOptionImageColor, setProductOptionImageColor] = useState<
    ProductOptionImageProps[] | null
  >(null);

  const [allTheOptionsThatExists, setAllTheOptionsThatExists] = useState<
    ProductOptionImageProps[] | null
  >(null);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    if (!objUser.isNullUserLocalStorage && objUser.user) {
      GetByListFlashSaleProductImageAllId(idProductClicked, objUser.user);
    }
  }, [idProductClicked]);

  const GetByListFlashSaleProductImageAllId = async (idProductClicked: string, user: ObjUser) => {
    const res = await fetch(
      `${Url}/product-option-image/get-by-list-flash-sale-product-image-all-id/${idProductClicked}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          uid: user.id,
          'Content-Type': 'application/json',
        },
      }
    );

    // Colocar as imagens, do "MINECRAFT"

    if (res.status === 200) {
      const json = await res.json();
      let getDate: ProductOptionImageProps[] = json.data;

      let allTheColorsThatExists = getDate.filter((el) => el.optionType === 'Color');

      if (allTheColorsThatExists) {
        setProductOptionImageColor(allTheColorsThatExists);
      }

      let allTheOptionsThatExists = getDate.filter((el) => el.optionType === 'Option');

      if (allTheOptionsThatExists) {
        setAllTheOptionsThatExists(allTheOptionsThatExists);
      }

      let arrayElement = [];

      for (let i = 0; i < getDate.length; i++) {
        arrayElement.push(getDate[i]);
      }

      setProductOptionImageAll(arrayElement);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
  };

  return (
    <Styled.ContainerImageProductAndDescription>
      {productOptionImageAll && (
        <ProductFlashSaleFirstPart
          productOptionImageAll={productOptionImageAll}
          getFlashSaleProduct={getFlashSaleProduct}
        />
      )}

      {productOptionImageColor && allTheOptionsThatExists && (
        <ProductFlashSaleSecondPart
          productOptionImageColor={productOptionImageColor}
          allTheOptionsThatExists={allTheOptionsThatExists}
          getFlashSaleProduct={getFlashSaleProduct}
        />
      )}
    </Styled.ContainerImageProductAndDescription>
  );
};

export default ProductFlashSaleAllInfo;
