import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeaderSecond from './HeaderSecond';
import { screen } from '@testing-library/dom';

describe('HeaderFirst', () => {
  it('should render HeaderFirst Component', () => {
    const { container } = render(<HeaderSecond />);

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
