import HeaderFirst from '../HeaderFirst/HeaderFirst';
import HeaderSecond from '../HeaderSecond/HeaderSecond';
import * as Styled from './styled';

const HeaderMain = () => {
  return (
    <Styled.HeaderMain>
      <HeaderFirst></HeaderFirst>
      <HeaderSecond></HeaderSecond>
    </Styled.HeaderMain>
  );
};

export default HeaderMain;
