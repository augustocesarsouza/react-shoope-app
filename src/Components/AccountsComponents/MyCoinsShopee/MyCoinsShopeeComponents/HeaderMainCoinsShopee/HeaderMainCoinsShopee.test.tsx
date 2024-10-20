import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderMainCoinsShopee from './HeaderMainCoinsShopee';

describe('HeaderMainCoinsShopee', () => {
  it('should render HeaderMainCoinsShopee Component', async () => {
    const { container } = render(<HeaderMainCoinsShopee />);

    const span1 = screen.getByText('0');
    expect(span1).toBeInTheDocument();

    const img = await screen.findByAltText('img-coins');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729346258/img-shopee-my-coins-shopee/75efaf1b556a8e2fac6a_gbqphv.png'
    );

    const span2 = screen.getByText('Moedas disponíveis');
    expect(span2).toBeInTheDocument();

    const containerSpanAndSvgQuestionMark = container.querySelector(
      '.container-span-and-svg-question-mark'
    ) as HTMLElement;
    const svgQuestionMark = containerSpanAndSvgQuestionMark.lastChild as SVGElement;
    expect(svgQuestionMark).toBeInTheDocument();

    const span3 = screen.getByText('0 moedas que expiram em');
    expect(span3).toBeInTheDocument();

    const containerSpanAndSvgArrowRight = container.querySelector(
      '.container-span-and-svg-arrow-right'
    ) as HTMLElement;
    const svgArrowRight = containerSpanAndSvgArrowRight.lastChild as SVGElement;
    expect(svgArrowRight).toBeInTheDocument();

    const header1 = screen.getByRole('heading', { name: /Ganhe mais moedas/ });
    expect(header1).toBeInTheDocument();

    const containerSecondHeader = container.querySelector(
      '.container-second-header'
    ) as HTMLElement;
    const svgArrowRight2 = containerSecondHeader.lastChild as SVGElement;
    expect(svgArrowRight2).toBeInTheDocument();

    expect.assertions(9);
  });
});
