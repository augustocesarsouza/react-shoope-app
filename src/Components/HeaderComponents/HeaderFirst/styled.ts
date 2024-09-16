import styled from 'styled-components';

export const span = styled.span``;

export const HeaderNavFirstMain = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 21px;
  margin-top: 6px;

  position: relative;
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

interface LinkProps {
  $borderRight: boolean;
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  color: #fff;
  /* border-right: 1px solid #c7c7c76e; */
  border-right: ${props => props.$borderRight ? "1px solid #c7c7c76e" : ""};
  padding-right: 6px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #c9c9c9;
  }
`;

export const LinkLanguage = styled.a`
  text-decoration: none;
  color: #fff;
  /* border-right: 1px solid #c7c7c76e; */
  border-right: "";
  cursor: pointer;
  user-select: none;

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

export const ContainerUserMain = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ContainerImgUser = styled.div`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  margin-right: 5px;

  svg {
    width: 15px;
    height: 15px;
    fill: #fff;

    stroke: #c6c6c6;
    font-size: 1.5rem;
    font-weight: 400;
    left: 50%;
    line-height: 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-font-smoothing: antialiased;
  }
`;

export const ContainerAccountOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  right: 10px;
  top: 27px;
  background-color: #fff;
  color: black;
  font-weight: 500;
  padding: 10px 10px;
  font-size: 14px;
  width: 14rem;
  height: 11rem;
  border: 1px solid #00000026;

  >svg {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    top: -10px;
    color: #fff;
  }

  >span {
    cursor: pointer;
  }
`;