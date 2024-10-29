import { render, screen } from '@testing-library/react';
import EachCategory from './EachCategory';

describe('EachCategory', () => {
  test('should render itens of the EachCategory', async () => {
    const category = {
      id: 'h929a8b1-455a-4g97-aee7-b250ed536042',
      imgCategory:
        'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva',
      altValue: 'altValue1',
      title: 'title1',
    };

    render(<EachCategory category={category} />);

    const img1 = screen.getByAltText(category.altValue);
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', category.imgCategory);

    const spanTitle = screen.getByText(category.title);
    expect(spanTitle).toBeInTheDocument();

    expect.assertions(3);
  });
});
