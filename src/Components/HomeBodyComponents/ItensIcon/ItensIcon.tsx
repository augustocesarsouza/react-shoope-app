import * as Styled from './styled';

interface ItensIconProps {
  img: string;
  alt: string;
  title: string;
}

const ItensIcon = ({ img, alt, title }: ItensIconProps) => {
  const onMouseEnterContainerItensIcon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let containerItensIcon = e.target as HTMLElement;

    containerItensIcon.style.paddingBottom = '3px';
  };

  const onMouseLeaveContainerItensIcon = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let containerItensIcon = e.target as HTMLElement;

    containerItensIcon.style.paddingBottom = '0px';
  };

  return (
    <Styled.ContainerItensIcon
      onMouseEnter={(e) => onMouseEnterContainerItensIcon(e)}
      onMouseLeave={(e) => onMouseLeaveContainerItensIcon(e)}
    >
      <Styled.ContainerImgIcon>
        <Styled.Img src={img} alt={alt} />
      </Styled.ContainerImgIcon>
      <Styled.H1>{title}</Styled.H1>
    </Styled.ContainerItensIcon>
  );
};

export default ItensIcon;
