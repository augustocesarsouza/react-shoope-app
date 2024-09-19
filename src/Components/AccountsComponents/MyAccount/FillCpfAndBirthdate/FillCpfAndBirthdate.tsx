import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';
import { ObjUser } from '../../../../Templates/Home/Home';
import { eachYearOfInterval, format, getDaysInMonth, getMonth, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Url } from '../../../../Utils/Url';
import Inputmask from 'inputmask';

export interface UserUpdateData {
  birthDate: string;
  cpf: string;
  email: string;
  name: string;
}

const FillCpfAndBirthdate = () => {
  const location = useLocation();

  const nav = useNavigate();
  const [userObj, setUserObj] = useState<ObjUser | null>(null);

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    if (location.state) {
      const objState = location.state;

      if (objState.user === null) {
        nav('/login');

        return;
      }
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObj(userJson);
    // setValueInput(userJson.name);
  }, []);

  const RefInputCpf = useRef<HTMLInputElement | null>(null);
  const RefButtonNext = useRef<HTMLButtonElement | null>(null);
  const refContainerInputEmail = useRef<HTMLDivElement | null>(null);

  const onMouseEnterButtonNext = () => {
    if (RefButtonNext.current === null) return;

    RefButtonNext.current.style.background = '#ee6449';
  };

  const onMouseLeaveButtonNext = () => {
    if (RefButtonNext.current === null) return;

    RefButtonNext.current.style.background = '#ee4d2d';
  };

  const [changeOptions, setChangeOption] = useState(false);
  const [changeOptionsYear, setChangeOptionYear] = useState(false);
  const [dayMes, setDaysMes] = useState<number[] | []>([]);
  const SelectMonthRef = useRef<HTMLSelectElement | null>(null);
  const SelectDayOfMonthRef = useRef<HTMLSelectElement | null>(null);
  const SelectYearRef = useRef<HTMLSelectElement | null>(null);
  const refYears = useRef<string[]>([]);
  const [birthday, setBirthday] = useState<string | null>(null);

  const [valueYear, setValueYear] = useState(0);

  const handleCLickOption = () => {
    setChangeOption((prev) => !prev);
  };

  const handleCLickOptionYear = () => {
    setChangeOptionYear((prev) => !prev);
  };

  const onClickMouseEnterSelectDay = () => {
    if (SelectDayOfMonthRef.current === null) return;

    let selectElement = SelectDayOfMonthRef.current;
    selectElement.style.border = '1px solid red';
  };

  const onClickMouseLeaveSelectDay = () => {
    if (SelectDayOfMonthRef.current === null) return;

    let selectElement = SelectDayOfMonthRef.current;
    selectElement.style.border = '1px solid #00000024';
  };

  const onClickMouseEnterSelectMonth = () => {
    if (SelectMonthRef.current === null) return;

    let selectElement = SelectMonthRef.current;
    selectElement.style.border = '1px solid red';
  };

  const onClickMouseLeaveSelectMonth = () => {
    if (SelectMonthRef.current === null) return;

    let selectElement = SelectMonthRef.current;
    selectElement.style.border = '1px solid #00000024';
  };

  const onClickMouseEnterSelectYear = () => {
    if (SelectYearRef.current === null) return;

    let selectElement = SelectYearRef.current;
    selectElement.style.border = '1px solid red';
  };

  const onClickMouseLeaveSelectYear = () => {
    if (SelectYearRef.current === null) return;

    let selectElement = SelectYearRef.current;
    selectElement.style.border = '1px solid #00000024';
  };

  useEffect(() => {
    if (SelectMonthRef.current === null) return;

    const dateActual = new Date().getFullYear();
    const mes = SelectMonthRef.current.value;
    const data = parse(mes, 'MMMM', new Date(), { locale: ptBR });
    let numberOfMes = getMonth(data);

    const date = new Date(dateActual, numberOfMes, 1);
    const daysInMonth = getDaysInMonth(date);
    const array = [];

    for (let i = 1; i <= daysInMonth; i++) {
      array.push(i);
    }

    setDaysMes(array);

    const startPeriod = new Date(1900, 0, 1);
    const endPeriod = new Date();

    const yearsPeriod = eachYearOfInterval({ start: startPeriod, end: endPeriod });
    if (refYears.current.length > 0) return;

    yearsPeriod.forEach((year) => {
      if (refYears.current !== null) {
        refYears.current.push(format(year, 'yyyy'));
      }
    });
  }, [changeOptions]);

  useEffect(() => {
    if (SelectDayOfMonthRef.current === null) return;
    if (SelectMonthRef.current === null) return;
    if (SelectYearRef.current === null) return;

    let day = parseInt(SelectDayOfMonthRef.current.value);
    let month = SelectMonthRef.current.value;
    let year = parseInt(SelectYearRef.current.value);
    const numberMonth = getMonthNumber(month);

    if (numberMonth > 0 && day > 0 && year >= 1900) {
      let stringConcat = '';
      if (day <= 9 && numberMonth <= 9) {
        stringConcat = `0${day}/0${numberMonth}/${year}`;
        setBirthday(stringConcat);
        return;
      }

      if (day <= 9) {
        stringConcat = `0${day}/${numberMonth}/${year}`;
        setBirthday(stringConcat);
        return;
      } else if (numberMonth <= 9) {
        stringConcat = `${day}/0${numberMonth}/${year}`;
        setBirthday(stringConcat);
        return;
      }

      stringConcat = `${day}/${numberMonth}/${year}`;
      setBirthday(stringConcat);
    } else {
      setBirthday('');
    }
  }, [SelectDayOfMonthRef, SelectMonthRef, SelectYearRef, changeOptionsYear, changeOptions]);

  const getMonthNumber = (month: string) => {
    let numberMonth = 0;

    switch (month) {
      case 'Janeiro':
        numberMonth = 1;
        break;
      case 'Fevereiro':
        numberMonth = 2;
        break;
      case 'Março':
        numberMonth = 3;
        break;
      case 'Abril':
        numberMonth = 4;
        break;
      case 'Maio':
        numberMonth = 5;
        break;
      case 'Junho':
        numberMonth = 6;
        break;
      case 'Julho':
        numberMonth = 7;
        break;
      case 'Agosto':
        numberMonth = 8;
        break;
      case 'Setembro':
        numberMonth = 9;
        break;
      case 'Outubro':
        numberMonth = 10;
        break;
      case 'Novembro':
        numberMonth = 11;
        break;
      case 'Dezembro':
        numberMonth = 12;
        break;
      default:
        numberMonth = -1;
        break;
    }
    return numberMonth;
  };

  const getMonthName = (month: number) => {
    let nameMonth = '';

    switch (month) {
      case 1:
        nameMonth = 'Janeiro';
        break;
      case 2:
        nameMonth = 'Fevereiro';
        break;
      case 3:
        nameMonth = 'Março';
        break;
      case 4:
        nameMonth = 'Abril';
        break;
      case 5:
        nameMonth = 'Maio';
        break;
      case 6:
        nameMonth = 'Junho';
        break;
      case 7:
        nameMonth = 'Julho';
        break;
      case 8:
        nameMonth = 'Agosto';
        break;
      case 9:
        nameMonth = 'Setembro';
        break;
      case 10:
        nameMonth = 'Outubro';
        break;
      case 11:
        nameMonth = 'Novembro';
        break;
      case 12:
        nameMonth = 'Dezembro';
        break;
      default:
        nameMonth = 'seila';
        break;
    }
    return nameMonth;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValueYear(Number(e.target.value));
  };

  const onClickSendCodeEmail = async () => {
    if (SelectDayOfMonthRef.current === null) return;
    if (SelectMonthRef.current === null) return;
    if (SelectYearRef.current === null) return;
    if (RefInputCpf.current === null) return;
    if (userObj === null) return;

    let inputDay = SelectDayOfMonthRef.current;
    let inputMonth = SelectMonthRef.current;
    let inputYear = SelectYearRef.current;
    let inputCpf = RefInputCpf.current;

    let valueCpf = '';

    for (let i = 0; i < inputCpf.value.length; i++) {
      if (inputCpf.value[i] !== '.') {
        valueCpf += inputCpf.value[i];
      }
    }

    valueCpf = valueCpf.replace('-', '');

    let numberMonth = getMonthNumber(inputMonth.value);
    let birthDateString = '';

    if (inputDay.value.length <= 1) {
      if (numberMonth < 10) {
        birthDateString = `0${inputDay.value}/0${numberMonth}/${inputYear.value}`;
      } else {
        birthDateString = `0${inputDay.value}/${numberMonth}/${inputYear.value}`;
      }
    } else {
      birthDateString = `${inputDay.value}/${numberMonth}/${inputYear.value}`;
    }

    const userUpdate = {
      UserId: userObj.id,
      Cpf: valueCpf,
      BirthDate: birthDateString,
    };

    const res = await fetch(`${Url}/public/user/update-user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userUpdate),
    }); // AMANHAR VER COMO O "SHOPEE" FAZ QUANDO ATUALIA O "FILL CPF"
    // https://github.com/farukaf/BrasilAPI-DotNet -> ISSO É PARA VERIFICAR SE O "CPF" é valido

    if (res.status === 200) {
      const json = await res.json();
      let userUpdate: UserUpdateData = json.data;

      nav('/user/account/profile', { state: { user: userObj, userUpdate: userUpdate } });
    }
  };

  useEffect(() => {
    let inputCpfFillBirthday = document.getElementById('input-cpf-fill-birthday');

    if (inputCpfFillBirthday) {
      let mask = new Inputmask({
        mask: '999.999.999-99',
        placeholder: '___.___.___-__',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCpfFillBirthday);
    }
  }, []);

  return (
    <Styled.ContainerShowInsertPhoneMain>
      <Styled.H1>Preencher CPF/Data de nascimento</Styled.H1>
      <Styled.ContainerLabelAndInput>
        <Styled.Label>CPF</Styled.Label>
        <Styled.ContainerInputCpfButtonCheckbox>
          <Styled.ContainerInputToCpfAndErrorIfPhoneAlreadyRegistered>
            <Styled.ContainerInputPhone ref={refContainerInputEmail}>
              <Styled.Input
                type="text"
                placeholder="CPF"
                id="input-cpf-fill-birthday"
                ref={RefInputCpf}
              />
            </Styled.ContainerInputPhone>
          </Styled.ContainerInputToCpfAndErrorIfPhoneAlreadyRegistered>
        </Styled.ContainerInputCpfButtonCheckbox>
      </Styled.ContainerLabelAndInput>
      <Styled.ContainerLabelAndInput>
        <Styled.Label>Data de nascimento</Styled.Label>
        <Styled.ContainerMainDayMonthYear>
          <Styled.ContainerBirthday>
            <Styled.Select
              ref={SelectDayOfMonthRef}
              onClick={() => handleCLickOption()}
              onMouseEnter={() => onClickMouseEnterSelectDay()}
              onMouseLeave={() => onClickMouseLeaveSelectDay()}
            >
              {dayMes.length > 0 ? (
                <>
                  {dayMes.map((number) => (
                    <Styled.Option key={number}>{number}</Styled.Option>
                  ))}
                </>
              ) : (
                <Styled.Option>Data</Styled.Option>
              )}
            </Styled.Select>
          </Styled.ContainerBirthday>
          <Styled.ContainerBirthday>
            <Styled.Select
              ref={SelectMonthRef}
              onClick={() => handleCLickOption()}
              onMouseEnter={() => onClickMouseEnterSelectMonth()}
              onMouseLeave={() => onClickMouseLeaveSelectMonth()}
            >
              <Styled.Option>Mês</Styled.Option>
              <Styled.Option>Janeiro</Styled.Option>
              <Styled.Option>Fevereiro</Styled.Option>
              <Styled.Option>Março</Styled.Option>
              <Styled.Option>Abril</Styled.Option>
              <Styled.Option>Maio</Styled.Option>
              <Styled.Option>Junho</Styled.Option>
              <Styled.Option>Julho</Styled.Option>
              <Styled.Option>Agosto</Styled.Option>
              <Styled.Option>Setembro</Styled.Option>
              <Styled.Option>Outubro</Styled.Option>
              <Styled.Option>Novembro</Styled.Option>
              <Styled.Option>Dezembro</Styled.Option>
            </Styled.Select>
          </Styled.ContainerBirthday>
          <Styled.ContainerBirthday>
            <Styled.Select
              ref={SelectYearRef}
              onClick={() => handleCLickOptionYear()}
              value={valueYear}
              onChange={(e) => handleChange(e)}
              onMouseEnter={() => onClickMouseEnterSelectYear()}
              onMouseLeave={() => onClickMouseLeaveSelectYear()}
            >
              <Styled.Option>Ano</Styled.Option>
              {refYears.current.map((year) => (
                <Styled.Option id="option-years" key={Number(year)}>
                  {year}
                </Styled.Option>
              ))}
            </Styled.Select>
          </Styled.ContainerBirthday>
        </Styled.ContainerMainDayMonthYear>
      </Styled.ContainerLabelAndInput>
      <Styled.ContainerLabelAndInput>
        <Styled.Label></Styled.Label>
        <Styled.ContainerInputCpfButtonCheckbox>
          <Styled.ButtonVerify
            onClick={() => onClickSendCodeEmail()}
            ref={RefButtonNext}
            onMouseEnter={() => onMouseEnterButtonNext()}
            onMouseLeave={() => onMouseLeaveButtonNext()}
          >
            Verificar
          </Styled.ButtonVerify>
        </Styled.ContainerInputCpfButtonCheckbox>
      </Styled.ContainerLabelAndInput>
    </Styled.ContainerShowInsertPhoneMain>
  );
};

export default FillCpfAndBirthdate;
