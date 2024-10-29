import { CategoriesProps } from '../CategoryAllMan/CategoryAllMan';
import * as Styled from './styled';

interface EachCategoryProps {
  category: CategoriesProps;
}

const EachCategory = ({ category }: EachCategoryProps) => {
  return (
    <Styled.ContainerCategoryProp>
      <Styled.Img src={category.imgCategory} alt={category.altValue} />
      <Styled.Span>{category.title}</Styled.Span>
    </Styled.ContainerCategoryProp>
  );
};

export default EachCategory;
