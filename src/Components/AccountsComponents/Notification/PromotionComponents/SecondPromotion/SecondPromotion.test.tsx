import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SecondPromotion from './SecondPromotion';
import { PromotionProps } from '../PromotionComponents/Promotion/Promotion';
import { FormatDataPromotion } from '../FirstPromotion/FormatDataPromotion';

describe('SecondPromotion', () => {
  it('should render SecondPromotion Component', async () => {
    const PromotionDTO = {
      whatIsThePromotion: 1,
      title: 'Frete Grátis exclusivo para você ���',
      description:
        'Aproveite já seu cupom de FRETE GRÁTIS sem valor mínimo na sua 1ª compra. Confira já! 👉',
      date: '2024-10-07T12:02:00Z',
      img: 'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/img-shopee/ibzfrizxtywj0qfekzcm',
      imgInnerFirst:
        'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/img-shopee/kttn9uplz9u16dn54j3n',
      altImgInnerFirst: 'AltImgInnerFirst04',
      imgInnerSecond:
        'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/img-shopee/ba3mvexihcs0umj9ege6',
      altImgInnerSecond: 'AltImgInnerSecond05',
      imgInnerThird:
        'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/img-shopee/gjrauzipqflb8ykwmai6',
      altImgInnerThird: 'AltImgInnerThird06',
    };

    const obj: PromotionProps = {
      id: '21dfd3hd-747a-465f-9c5a-595d78a70e4d',
      promotionDTO: PromotionDTO,
    };

    render(<SecondPromotion secondPromotion={obj} />);

    let stringDateAndHour = FormatDataPromotion(obj.promotionDTO.date);

    const img1 = screen.getByAltText(obj.promotionDTO.title);
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', obj.promotionDTO.img);

    const heading1 = screen.getByRole('heading', { name: obj.promotionDTO.title });
    expect(heading1).toBeInTheDocument();

    const span1 = screen.getByText(obj.promotionDTO.description);
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText(stringDateAndHour);
    expect(span2).toBeInTheDocument();

    const img2 = screen.getByAltText(obj.promotionDTO.altImgInnerFirst);
    expect(img2).toBeInTheDocument();
    expect(img2).toHaveAttribute('src', obj.promotionDTO.imgInnerFirst);

    const img3 = screen.getByAltText(obj.promotionDTO.altImgInnerSecond);
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute('src', obj.promotionDTO.imgInnerSecond);

    const img4 = screen.getByAltText(obj.promotionDTO.altImgInnerThird);
    expect(img4).toBeInTheDocument();
    expect(img4).toHaveAttribute('src', obj.promotionDTO.imgInnerThird);

    const button = screen.getByRole('button', { name: /Ver Detalhes/ });
    expect(button).toBeInTheDocument();

    expect.assertions(12);
  });
});
