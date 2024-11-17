import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderFlashSaleMain from '../HeaderFlashSaleComponents/HeaderFlashSaleMain/HeaderFlashSaleMain';

const FlashSaleProduct = () => {
  const obj = useParams();

  useEffect(() => {
    const { id } = obj;
    console.log(id);
  }, []);

  return (
    <div>
      <HeaderFlashSaleMain></HeaderFlashSaleMain>
      <h1>Product Clicked Seila</h1>
    </div>
  );
};

export default FlashSaleProduct;
