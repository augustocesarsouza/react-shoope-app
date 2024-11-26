import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderFlashSaleSecond from './HeaderFlashSaleSecond';

describe('HeaderFlashSaleFirst', () => {
  it('should render HeaderFlashSaleFirst Component', () => {
    const { container } = render(<HeaderFlashSaleSecond />);

    const allSvgs = container.querySelectorAll('svg');
    expect(allSvgs.length).toBe(3);

    // const inputElement = container.querySelector('.input-search-shoppe') as HTMLElement;
    const inputElement = screen.getByPlaceholderText('Buscar na Shopee') as HTMLElement;
    expect(inputElement).toBeInTheDocument();

    inputElement.textContent = 'seila';
    expect(inputElement.textContent).toBe('seila');

    expect.assertions(3);
  });
});
