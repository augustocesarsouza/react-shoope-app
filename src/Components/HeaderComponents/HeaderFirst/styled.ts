import styled from 'styled-components';

export const HeaderNavFirstMain = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 6px;
`;

export const HeaderNavFirst = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px;
  /* margin-right: 25px; */
  width: 1200px;
  font-size: 13px;
  font-weight: 300;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  border-right: 1px solid #c7c7c76e;
  padding-right: 6px;
  cursor: pointer;

  &:hover {
    color: #c9c9c9;
  }
`;

export const ContainerFirstNav = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerSecondNav = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerAllSvgSecondNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  > svg {
    fill: #fff;
  }
`;

export const ContainerFollowUs = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  gap: 5px;

  svg {
    width: 15px;
    height: 15px;
    fill: #fff;
  }
`;