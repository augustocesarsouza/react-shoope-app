import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Promotion from './Promotion';

describe('Promotion', () => {
  it('should render Promotion Component', async () => {
    render(<Promotion />);

    const heading1 = screen.getByRole('heading', { name: /Marcar todas as mensagens como lidas/ });
    expect(heading1).toBeInTheDocument();

    expect.assertions(1);
  });
});
