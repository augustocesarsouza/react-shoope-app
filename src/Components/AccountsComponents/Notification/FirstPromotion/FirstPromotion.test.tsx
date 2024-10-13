import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import FirstPromotion from './FirstPromotion';
import { PromotionProps } from '../Promotion/Promotion';
import { FormatDataPromotion } from './FormatDataPromotion';

describe('FirstPromotion', () => {
  it('should render FirstPromotion Component', async () => {
    const PromotionDTO = {
      whatIsThePromotion: 1,
      title: 'Frete Grátis exclusivo para você ���',
      description:
        'Aproveite já seu cupom de FRETE GRÁTIS sem valor mínimo na sua 1ª compra. Confira já! 👉',
      date: '2024-10-09T06:15:00Z',
      img: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/img-shopee/ibzfrizxtywj0qfekzcm',
      imgInnerFirst: '',
      altImgInnerFirst: 'AltImgInnerFirst07',
      imgInnerSecond: '',
      altImgInnerSecond: 'AltImgInnerSecond08',
      imgInnerThird: '',
      altImgInnerThird: 'AltImgInnerThird09',
    };

    const obj: PromotionProps = {
      id: '58c82e8c-78f0-4008-a64e-d2287059f3df',
      promotionDTO: PromotionDTO,
    };

    render(<FirstPromotion firstPromotion={obj} />);

    let stringDateAndHour = FormatDataPromotion(obj.promotionDTO.date);

    const img3 = screen.getByAltText(obj.promotionDTO.title);
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute('src', obj.promotionDTO.img);

    const heading1 = screen.getByRole('heading', { name: obj.promotionDTO.title });
    expect(heading1).toBeInTheDocument();

    const span1 = screen.getByText(obj.promotionDTO.description);
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText(stringDateAndHour);
    expect(span2).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Ver Detalhes/ });
    expect(button).toBeInTheDocument();

    expect.assertions(6);
  });
});
