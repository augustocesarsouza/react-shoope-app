import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom';
import FillCpfAndBirthdate from './FillCpfAndBirthdate';

describe('FillCpfAndBirthdate', () => {
  it('should render FillCpfAndBirthdate Component', () => {
    const { container } = render(
      <MemoryRouter>
        <FillCpfAndBirthdate />
      </MemoryRouter>
    );

    const h1Text = screen.getByRole('heading', { name: 'Preencher CPF/Data de nascimento' });
    expect(h1Text).toBeInTheDocument();

    const label1 = screen.getByText('CPF');
    expect(label1).toBeInTheDocument();

    const inputCpf = screen.getByPlaceholderText(/CPF/);
    expect(inputCpf).toBeInTheDocument();

    const label2 = screen.getByText('Data de nascimento');
    expect(label2).toBeInTheDocument();

    const option1 = screen.getByText('Data');
    expect(option1).toBeInTheDocument();

    const optionMonth1 = screen.getByText('Mês');
    expect(optionMonth1).toBeInTheDocument();

    const optionMonth2 = screen.getByText('Janeiro');
    expect(optionMonth2).toBeInTheDocument();

    const optionMonth3 = screen.getByText('Fevereiro');
    expect(optionMonth3).toBeInTheDocument();

    const optionMonth4 = screen.getByText('Março');
    expect(optionMonth4).toBeInTheDocument();

    const optionMonth5 = screen.getByText('Maio');
    expect(optionMonth5).toBeInTheDocument();

    const optionMonth6 = screen.getByText('Junho');
    expect(optionMonth6).toBeInTheDocument();

    const optionMonth7 = screen.getByText('Julho');
    expect(optionMonth7).toBeInTheDocument();

    const optionMonth8 = screen.getByText('Agosto');
    expect(optionMonth8).toBeInTheDocument();

    const optionMonth9 = screen.getByText('Setembro');
    expect(optionMonth9).toBeInTheDocument();

    const optionMonth10 = screen.getByText('Outubro');
    expect(optionMonth10).toBeInTheDocument();

    const optionMonth11 = screen.getByText('Novembro');
    expect(optionMonth11).toBeInTheDocument();

    const optionMonth12 = screen.getByText('Dezembro');
    expect(optionMonth12).toBeInTheDocument();

    const allInputOptionYears = container.querySelectorAll('#option-years');
    expect(allInputOptionYears.length).toBe(125);

    const buttonVerifcy = screen.getByRole('button', { name: 'Verificar' });
    expect(buttonVerifcy).toBeInTheDocument();

    expect.assertions(19);
  });
});
