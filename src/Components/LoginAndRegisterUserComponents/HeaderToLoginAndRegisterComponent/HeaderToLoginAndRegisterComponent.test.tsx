import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderToLoginAndRegisterComponent from './HeaderToLoginAndRegisterComponent';

describe('HeaderToLoginAndRegisterComponent', () => {
  it('should render HeaderLoginComponent Component', () => {
    let valueToSpan = 'seila';
    const { container } = render(<HeaderToLoginAndRegisterComponent valueToSpan={valueToSpan} />);

    const allSvgs = container.querySelectorAll('svg');
    expect(allSvgs.length).toEqual(1);

    const span1 = screen.getByText(valueToSpan);
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Precisa de ajuda?');
    expect(span2).toBeInTheDocument();

    expect.assertions(3);
  });
});
