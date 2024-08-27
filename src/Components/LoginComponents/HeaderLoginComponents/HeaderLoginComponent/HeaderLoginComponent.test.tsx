import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderLoginComponent from './HeaderLoginComponent';

describe('HeaderLoginComponent', () => {
  it('should render HeaderLoginComponent Component', () => {
    const { container } = render(<HeaderLoginComponent />);

    const allSvgs = container.querySelectorAll('svg');
    expect(allSvgs.length).toEqual(1);

    const span1 = screen.getByText('Cadastrar');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Precisa de ajuda?');
    expect(span2).toBeInTheDocument();

    expect.assertions(3);
  });
});
