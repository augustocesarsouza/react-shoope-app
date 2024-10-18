import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import AddCupomInput from './AddCupomInput';

describe('AddCupomInput', () => {
  it('should render AddCupomInput Component', async () => {
    render(<AddCupomInput />);

    const span1 = screen.getByText('Adicionar Cupom');
    expect(span1).toBeInTheDocument();

    const InputInsertCode = screen.getByPlaceholderText('Insira o código do cupom aqui');
    expect(InputInsertCode).toBeInTheDocument();

    const buttonRescue = screen.getByRole('button', { name: 'Resgatar' });
    expect(buttonRescue).toBeInTheDocument();

    expect.assertions(3);
  });
});
