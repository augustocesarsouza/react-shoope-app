import HeaderFlashSaleFirst from '../HeaderFlashSaleFirst/HeaderFlashSaleFirst';
import HeaderFlashSaleSecond from '../HeaderFlashSaleSecond/HeaderFlashSaleSecond';
import * as Styled from './styled';

const HeaderFlashSaleMain = () => {
  return (
    <Styled.HeaderMain>
      <HeaderFlashSaleFirst></HeaderFlashSaleFirst>
      <HeaderFlashSaleSecond></HeaderFlashSaleSecond>
    </Styled.HeaderMain>
  );
};

export default HeaderFlashSaleMain;
