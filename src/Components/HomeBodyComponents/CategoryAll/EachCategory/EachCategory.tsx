import * as Styled from './styled';

interface EachCategoryProps {
  img: string;
  alt: string;
  title: string;
}

const EachCategory = ({ img, alt, title }: EachCategoryProps) => {
  return (
    <Styled.ContainerCategoryProp>
      <Styled.Img src={img} alt={alt} />
      <Styled.Span>{title}</Styled.Span>
    </Styled.ContainerCategoryProp>
  );
};

export default EachCategory;
