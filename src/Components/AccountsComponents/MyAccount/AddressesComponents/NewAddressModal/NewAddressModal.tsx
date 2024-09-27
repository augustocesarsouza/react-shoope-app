import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { IAddresses } from '../../Interface/IAddresses/IAddresses';
import { Url } from '../../../../../Utils/Url';
import Inputmask from 'inputmask';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';

enum InputsNames {
  FullName = 'fullName',
  NumberPhone = 'numberPhone',
  Cep = 'cep',
  StateCity = 'stateCity',
  Neighborhood = 'neighborhood',
  Street = 'street',
  Number = 'number',
  Complement = 'complement',
}

interface NewAddressModalProps {
  userLogin: ObjUser;
  changeValueNewAddressModal: (value: boolean) => void;
}

const NewAddressModal = ({ userLogin, changeValueNewAddressModal }: NewAddressModalProps) => {
  const [whatWasClickSave, setWhatWasClickSave] = useState('');

  const RefContainerNameFull = useRef<HTMLDivElement | null>(null);
  const RefContainerNamberPhone = useRef<HTMLDivElement | null>(null);
  const RefContainerCep = useRef<HTMLDivElement | null>(null);
  const RefContainerStateCity = useRef<HTMLDivElement | null>(null);
  const RefContainerNeighborhood = useRef<HTMLDivElement | null>(null);
  const RefContainerStreet = useRef<HTMLDivElement | null>(null);
  const RefContainerNumber = useRef<HTMLDivElement | null>(null);
  const RefContainerComplement = useRef<HTMLDivElement | null>(null);

  const RefInputNameFull = useRef<HTMLInputElement | null>(null);
  const RefInputNumberPhone = useRef<HTMLInputElement | null>(null);
  const RefInputCep = useRef<HTMLInputElement | null>(null);
  const RefInputStateCity = useRef<HTMLInputElement | null>(null);
  const RefInputNeighborhood = useRef<HTMLInputElement | null>(null);
  const RefInputStreetAvenue = useRef<HTMLInputElement | null>(null);
  const RefInputNumberHome = useRef<HTMLInputElement | null>(null);
  const RefInputComplement = useRef<HTMLInputElement | null>(null);

  const RefContainerAllNameFull = useRef<HTMLDivElement | null>(null);
  const RefContainerAllNamberPhone = useRef<HTMLDivElement | null>(null);
  const RefContainerAllCep = useRef<HTMLDivElement | null>(null);
  const RefContainerAllStateCity = useRef<HTMLDivElement | null>(null);
  const RefContainerAllNeighborhood = useRef<HTMLDivElement | null>(null);
  const RefContainerAllStreet = useRef<HTMLDivElement | null>(null);
  const RefContainerAllNumber = useRef<HTMLDivElement | null>(null);
  const RefContainerAllComplement = useRef<HTMLDivElement | null>(null);

  const setValueInputStyled = (
    input: EventTarget & HTMLInputElement,
    refContainerNameFull: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    if (refContainerNameFull === null || refContainerNameFull.current === null || input === null)
      return;

    if (input.value.length <= 0) {
      refContainerNameFull.current.style.display = 'none';
    } else {
      refContainerNameFull.current.style.display = 'block';
    }
  };

  const [inputCepIsLessThanEight, setInputCepIsLessThanEight] = useState(false);
  const [errorCepIsInvalid, setErrorCepIsInvalid] = useState(false);
  const [cannotTypeInputStateCity, setCannotTypeInputStateCity] = useState(false);
  const [errorStreetAvenue, setErrorStreetAvenue] = useState(false);
  const [errorNameMustBeenGreaterThanTwo, setErrorNameMustBeenGreaterThanTwo] = useState(false);
  const [alreadyClickedSendDb, setAlreadyClickedSendDb] = useState(false);
  const [errorCelPhone, setErrorCelPhone] = useState(false);
  const [errorNeighborhood, setErrorNeighborhood] = useState(false);
  const [cepIsInvalid, setCepIsInvalid] = useState(false);

  const [placeholderColorNameFull, setPlaceholderColorNameFull] = useState('rgb(0 0 0 / 43%)');
  const [placeholderColorNamberPhone, setPlaceholderColorNamberPhone] =
    useState('rgb(0 0 0 / 43%)');
  const [placeholderColorCep, setPlaceholderColorCep] = useState('rgb(0 0 0 / 43%)');
  const [placeholderColorStateCity, setPlaceholderColorStateCity] = useState('rgb(0 0 0 / 43%)');
  const [placeholderColorNeighborhood, setPlaceholderColorNeighborhood] =
    useState('rgb(0 0 0 / 43%)');
  const [placeholderColorStreet, setPlaceholderColorStreet] = useState('rgb(0 0 0 / 43%)');
  const [placeholderColorNumber, setPlaceholderColorNumber] = useState('rgb(0 0 0 / 43%)');
  const [placeholderColorComplement, setPlaceholderColorComplement] = useState('rgb(0 0 0 / 43%)');

  const [valueInputStateCity, setValueInputStateCity] = useState('');
  const [valueInputNumberHouse, setValueInputNumberHouse] = useState('');

  const onChangeInputNameFull = async (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    e.preventDefault();
    if (
      RefContainerNameFull === null ||
      RefContainerNameFull.current === null ||
      e.target === null ||
      RefContainerAllNeighborhood.current === null ||
      RefContainerAllStreet.current === null ||
      RefContainerAllNameFull.current === null ||
      RefContainerAllNamberPhone.current === null ||
      RefInputCep.current === null ||
      RefInputStateCity.current === null ||
      RefInputNeighborhood.current === null ||
      RefInputStreetAvenue.current === null
    )
      return;
    setAlreadyClickedSendDb(true);
    let input = e.target as HTMLInputElement;

    if (inputName === InputsNames.FullName) {
      if (input.value.length <= 1) {
        RefContainerAllNameFull.current.style.borderColor = 'red';
        setPlaceholderColorNameFull('red');
        setErrorNameMustBeenGreaterThanTwo(true);
      } else {
        RefContainerAllNameFull.current.style.borderColor = 'rgb(0 0 0 / 43%)';
        setPlaceholderColorNameFull('#222');
        setErrorNameMustBeenGreaterThanTwo(false);
      }

      setValueInputStyled(input, RefContainerNameFull);
    } else if (inputName === InputsNames.NumberPhone) {
      if (input.value.length <= 1) {
        ContainerNumberPhonePutColor('red', 'red');
      } else {
        ContainerNumberPhonePutColor('rgb(0 0 0 / 43%', '#222');
      }

      setValueInputStyled(input, RefContainerNamberPhone);
    } else if (inputName === InputsNames.Cep) {
      if (RefContainerAllCep.current === null) return;
      if (input.value.length > 0) {
        ContainerCepPutColor('rgb(0 0 0 / 43%)', 'rgb(0 0 0 / 43%)');
        setInputCepIsLessThanEight(false);

        verifyCepUser(input.value);
      } else {
        ContainerCepPutColor('red', 'red');
        setInputCepIsLessThanEight(true);
      }
      setValueInputStyled(input, RefContainerCep);
    } else if (inputName === InputsNames.StateCity) {
      if (!cannotTypeInputStateCity) {
        setValueInputStateCity(input.value);
      }

      setValueInputStyled(input, RefContainerStateCity);
    } else if (inputName === InputsNames.Neighborhood) {
      if (input.value.length <= 1) {
        ContainerNeighborhoodPutColor('red', 'red');
        setErrorNeighborhood(true);
      } else {
        ContainerNeighborhoodPutColor('rgb(0 0 0 / 43%)', '#222');
        setErrorNeighborhood(false);
      }

      setValueInputStyled(input, RefContainerNeighborhood);
    } else if (inputName === InputsNames.Street) {
      if (input.value.length <= 1) {
        RefContainerAllStreet.current.style.borderColor = 'red';
        setPlaceholderColorStreet('red');
        setErrorStreetAvenue(true);
      } else {
        RefContainerAllStreet.current.style.borderColor = 'rgb(0 0 0 / 43%)';
        setPlaceholderColorStreet('#222');
        setErrorStreetAvenue(false);
      }

      setValueInputStyled(input, RefContainerStreet);
    } else if (inputName === InputsNames.Number) {
      const nativeEvent = e.nativeEvent as InputEvent;
      let value = Number(nativeEvent.data);

      if (!isNaN(value)) {
        setValueInputNumberHouse(e.target.value);
      }

      setValueInputStyled(input, RefContainerNumber);
    } else if (inputName === InputsNames.Complement) {
      setValueInputStyled(input, RefContainerComplement);
    }
  };

  const ContainerNumberPhonePutColor = (colorBorder: string, colorPlaceholder: string) => {
    if (RefContainerAllNamberPhone === null || RefContainerAllNamberPhone.current === null) return;

    RefContainerAllNamberPhone.current.style.borderColor = colorBorder;
    setPlaceholderColorNamberPhone(colorPlaceholder);
  };

  const ContainerCepPutColor = (colorBorder: string, colorPlaceholder: string) => {
    if (RefContainerAllCep === null || RefContainerAllCep.current === null) return;

    RefContainerAllCep.current.style.borderColor = colorBorder;
    setPlaceholderColorCep(colorPlaceholder);
  };

  const ContainerNeighborhoodPutColor = (colorBorder: string, colorPlaceholder: string) => {
    if (RefContainerAllNeighborhood === null || RefContainerAllNeighborhood.current === null)
      return;

    RefContainerAllNeighborhood.current.style.borderColor = colorBorder;
    setPlaceholderColorNeighborhood(colorPlaceholder);
  };

  const verifyCepUser = async (cepValue: string) => {
    if (
      RefInputStateCity.current === null ||
      RefContainerAllStreet.current === null ||
      RefInputNeighborhood.current === null ||
      RefInputStreetAvenue.current === null
    )
      return;

    let cep = cepValue;
    cep = cep.replace(/\D/g, '');
    let validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      let res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      let json: any = await res.json();

      let cepIsValid = Boolean(json.erro);
      setCepIsInvalid(cepIsValid);

      if (!cepIsValid) {
        setValueInputStateCity(`${json.estado} - ${json.localidade}`);
        RefInputStateCity.current.style.color = '#bbb';
        RefInputStateCity.current.style.caretColor = 'transparent';
        setCannotTypeInputStateCity(true);

        ContainerNeighborhoodPutColor('rgb(0 0 0 / 43%)', 'rgb(0 0 0 / 43%)');
        RefContainerAllStreet.current.style.borderColor = 'rgb(0 0 0 / 43%)';
        setPlaceholderColorStreet('#222');
        RefInputNeighborhood.current.value = json.bairro;
        RefInputStreetAvenue.current.value = json.logradouro;

        setErrorCepIsInvalid(false);
        changeCepColorsSuccess();
      } else {
        setErrorCepIsInvalid(true);
        changeCepColorsFail();
      }
    } else {
      setInputCepIsLessThanEight(true);
      changeCepColorsFail();
    }
  };

  useEffect(() => {
    if (RefContainerAllNumber.current === null || !alreadyClickedSendDb) return;

    if (valueInputNumberHouse.length <= 0) {
      RefContainerAllNumber.current.style.borderColor = 'red';
      setPlaceholderColorNumber('red');
    } else {
      RefContainerAllNumber.current.style.borderColor = 'rgb(0 0 0 / 43%)';
      setPlaceholderColorNumber('#222');
    }
  }, [valueInputNumberHouse, alreadyClickedSendDb]);

  const onClickSaveHome = () => {
    setWhatWasClickSave('home');
  };

  const onClickSaveWork = () => {
    setWhatWasClickSave('work');
  };

  const changeCepColorsSuccess = () => {
    if (RefContainerAllCep.current === null) return;

    ContainerCepPutColor('rgb(0 0 0 / 43%)', 'rgb(0 0 0 / 43%)');
  };

  const changeCepColorsFail = () => {
    if (RefContainerAllCep.current === null) return;

    ContainerCepPutColor('red', 'red');
  };

  useEffect(() => {
    if (RefInputStateCity.current === null) return;

    RefInputStateCity.current.style.color = '#bbb';
    RefInputStateCity.current.style.caretColor = 'transparent';
    RefInputStateCity.current.style.cursor = 'auto';
  }, []);

  const onClickSendToDb = async () => {
    if (
      RefInputNameFull.current === null ||
      RefContainerAllNameFull.current === null ||
      RefInputNumberPhone.current === null ||
      RefContainerAllNamberPhone.current === null ||
      RefInputCep.current === null ||
      RefContainerAllCep.current === null ||
      RefInputNeighborhood.current === null ||
      RefContainerAllNeighborhood.current === null ||
      RefInputStreetAvenue.current === null ||
      RefContainerAllStreet.current === null ||
      RefInputNumberHome.current === null ||
      RefContainerAllNumber.current === null ||
      RefInputComplement.current === null ||
      RefContainerAllComplement.current === null ||
      RefInputStateCity.current === null ||
      RefContainerNeighborhood.current === null ||
      userLogin === null
    )
      return;

    if (RefInputNameFull.current.value.length <= 0) {
      RefContainerAllNameFull.current.style.borderColor = 'red';
      setPlaceholderColorNameFull('red');
    }

    if (RefInputNumberPhone.current.value.length <= 0) {
      ContainerNumberPhonePutColor('red', 'red');
    }

    if (RefInputNeighborhood.current.value.length <= 0) {
      ContainerNeighborhoodPutColor('red', 'red');
    }

    if (RefInputStreetAvenue.current.value.length <= 0) {
      RefContainerAllStreet.current.style.borderColor = 'red';
      setPlaceholderColorStreet('red');
    }

    if (RefInputNumberHome.current.value.length <= 0) {
      RefContainerAllNumber.current.style.borderColor = 'red';
      setPlaceholderColorNumber('red');
    }

    let inputNameFull = RefInputNameFull.current;
    let inputNumberPhone = RefInputNumberPhone.current;
    let inputCep = RefInputCep.current;
    let inputStateCity = RefInputStateCity.current;
    let inputNeighborhood = RefInputNeighborhood.current;
    let inputStreetAvenue = RefInputStreetAvenue.current;
    let inputNumberHome = RefInputNumberHome.current;
    let inputComplement = RefInputComplement.current;

    let valurInputNumberPhone = inputNumberPhone.value.replace('(', '').replace(')', '');
    valurInputNumberPhone = valurInputNumberPhone.replace(/\D/g, '');

    let canSendToDbInner = false;

    if (inputNameFull.value.length <= 1) {
      canSendToDbInner = false;
    } else {
      canSendToDbInner = true;
    }

    if (inputNumberPhone.value.length <= 1) {
      canSendToDbInner = false;
    } else {
      canSendToDbInner = true;
    }

    if (!cepIsInvalid) {
      canSendToDbInner = true;
    } else {
      canSendToDbInner = false;
    }

    if (valurInputNumberPhone.length < 11) {
      canSendToDbInner = false;

      ContainerNumberPhonePutColor('red', 'red');
      setErrorCelPhone(true);
    } else {
      canSendToDbInner = true;

      ContainerNumberPhonePutColor('rgb(0 0 0 / 43%', '#222');
      setErrorCelPhone(false);
    }

    if (inputNeighborhood.value.length <= 1) {
      canSendToDbInner = false;
      ContainerNeighborhoodPutColor('red', 'red');
    } else {
      canSendToDbInner = true;
      ContainerNeighborhoodPutColor('rgb(0 0 0 / 43%)', '#222');
    }

    if (inputStreetAvenue.value.length <= 1) {
      canSendToDbInner = false;

      RefContainerAllStreet.current.style.borderColor = 'red';
      setPlaceholderColorStreet('red');
    } else {
      canSendToDbInner = true;
      RefContainerAllStreet.current.style.borderColor = 'rgb(0 0 0 / 43%)';
      setPlaceholderColorStreet('#222');
    }

    if (inputNumberHome.value.length <= 0) {
      canSendToDbInner = false;
      RefContainerAllNumber.current.style.borderColor = 'red';
      setPlaceholderColorNumber('red');
    } else {
      canSendToDbInner = true;
      RefContainerAllNumber.current.style.borderColor = 'rgb(0 0 0 / 43%)';
      setPlaceholderColorNumber('#222');
    }

    if (cepIsInvalid) {
      canSendToDbInner = false;
    }

    verifyCepUser(inputCep.value);

    if (canSendToDbInner) {
      let objAddress = {
        fullName: inputNameFull.value,
        phoneNumber: inputNumberPhone.value,
        cep: inputCep.value,
        stateCity: inputStateCity.value,
        neighborhood: inputNeighborhood.value,
        street: inputStreetAvenue.value,
        numberHome: inputNumberHome.value,
        complement: inputComplement.value,
        userId: userLogin.id,
      };

      const res = await fetch(`${Url}/public/address/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objAddress),
      });

      if (res.status === 200) {
        const json = await res.json();
        let address: IAddresses = json.data;
        changeValueNewAddressModal(false);
      }

      if (res.status === 400) {
        const json = await res.json();
        console.log(json);
      }
    } else {
      console.log('não pode mandar');
    }
  };

  const onClickCancelNewAddress = () => {
    changeValueNewAddressModal(false);
  };

  useEffect(() => {
    let inputCepNewAddress = document.getElementById('input-cep-new-address');

    if (inputCepNewAddress) {
      let mask = Inputmask({
        mask: '99999-999',
        placeholder: '_____-___',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputCepNewAddress);
    }

    let inputNumberPhone = document.getElementById('input-number-telephone');

    if (inputNumberPhone) {
      let mask = Inputmask({
        mask: '(+99) 99 99999 9999',
        placeholder: '(+__) __ _____ ____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputNumberPhone);
    }
  }, []);

  const [showNumberOfTheUser, setShowNumberOfTheUser] = useState(false);
  const [mouseOverContainerPhoneUser, setMouseOverContainerPhoneUser] = useState(false);

  const onFocusInputNumberPhone = () => {
    if (RefInputNumberPhone.current === null) return;

    let inputNumberPhone = RefInputNumberPhone.current;

    if (inputNumberPhone.value.length <= 0) {
      setShowNumberOfTheUser(true);
    }
  };

  const onBlurInputNumberPhone = () => {
    if (RefInputNumberPhone.current === null || mouseOverContainerPhoneUser) return;

    setShowNumberOfTheUser(false);
  };

  const onClickNumberPhone = () => {
    if (RefInputNumberPhone.current === null || userLogin === null) return;

    RefInputNumberPhone.current.value = userLogin.phone;
    ContainerNumberPhonePutColor('rgb(0 0 0 / 43%', '#222');
    setErrorCelPhone(false);
    setShowNumberOfTheUser(false);
  };

  const onMouseEnterContainerNumberPhone = () => {
    setMouseOverContainerPhoneUser(true);
  };

  const onMouseLeaveContainerNumberPhone = () => {
    setMouseOverContainerPhoneUser(false);
  };

  return (
    <Styled.ContainerModalNewAddress>
      <Styled.ContainerModalInner>
        <Styled.Span>Novo Endereço</Styled.Span>
        <Styled.ContainerAllInputs>
          <Styled.ContainerCpfAndErrors>
            <Styled.ContainerInputAll $width="100%" ref={RefContainerAllNameFull}>
              <Styled.ContainerNameInput ref={RefContainerNameFull}>
                Nome Completo
              </Styled.ContainerNameInput>
              <Styled.Input
                type="text"
                autoComplete="off"
                placeholder="Nome Completo"
                ref={RefInputNameFull}
                $placeholdercolor={placeholderColorNameFull}
                onChange={(e) => onChangeInputNameFull(e, InputsNames.FullName)}
              ></Styled.Input>
            </Styled.ContainerInputAll>
            {errorNameMustBeenGreaterThanTwo && (
              <Styled.Span>O nome é muito curto. Ele deve ter 2 caracteres ou mais.</Styled.Span>
            )}
          </Styled.ContainerCpfAndErrors>
          <Styled.ContainerCpfAndErrors>
            <Styled.ContainerInputAll $width="100%" ref={RefContainerAllNamberPhone}>
              <Styled.ContainerNameInput ref={RefContainerNamberPhone}>
                Número de Telefone
              </Styled.ContainerNameInput>
              <Styled.Input
                type="text"
                autoComplete="new-password"
                placeholder="Número de Telefone"
                id="input-number-telephone"
                ref={RefInputNumberPhone}
                $placeholdercolor={placeholderColorNamberPhone}
                onChange={(e) => onChangeInputNameFull(e, InputsNames.NumberPhone)}
                onFocus={onFocusInputNumberPhone}
                onBlur={onBlurInputNumberPhone}
              ></Styled.Input>
            </Styled.ContainerInputAll>
            {showNumberOfTheUser && (
              <Styled.ContainerShowNumberPhoneUser
                onClick={onClickNumberPhone}
                onMouseEnter={onMouseEnterContainerNumberPhone}
                onMouseLeave={onMouseLeaveContainerNumberPhone}
              >
                <Styled.Span>{userLogin?.phone}</Styled.Span>
                <Styled.Container>Usar</Styled.Container>
              </Styled.ContainerShowNumberPhoneUser>
            )}
            {errorCelPhone && <Styled.Span>erro complete o numero de telefone</Styled.Span>}
          </Styled.ContainerCpfAndErrors>
        </Styled.ContainerAllInputs>
        <Styled.ContainerAllInputs>
          <Styled.ContainerCpfAndErrors>
            <Styled.ContainerInputAll $width="100%" ref={RefContainerAllCep}>
              <Styled.ContainerNameInput ref={RefContainerCep}>CEP</Styled.ContainerNameInput>
              <Styled.Input
                type="text"
                autoComplete="off"
                placeholder="CEP"
                id="input-cep-new-address"
                ref={RefInputCep}
                $placeholdercolor={placeholderColorCep}
                onChange={(e) => onChangeInputNameFull(e, InputsNames.Cep)}
              ></Styled.Input>
            </Styled.ContainerInputAll>
            {inputCepIsLessThanEight && (
              <Styled.Span>Você deve digitar o valor todo do CPF!</Styled.Span>
            )}
            {errorCepIsInvalid && <Styled.Span>CEP inválido</Styled.Span>}
          </Styled.ContainerCpfAndErrors>
        </Styled.ContainerAllInputs>
        <Styled.ContainerAllInputs>
          <Styled.ContainerInputAll $width="100%" ref={RefContainerAllStateCity}>
            <Styled.ContainerNameInput ref={RefContainerStateCity}>
              Estado - Cidade
            </Styled.ContainerNameInput>
            <Styled.Input
              type="text"
              autoComplete="off"
              placeholder="Estado - Cidade"
              value={valueInputStateCity}
              ref={RefInputStateCity}
              $placeholdercolor={placeholderColorStateCity}
              onChange={(e) => onChangeInputNameFull(e, InputsNames.StateCity)}
            ></Styled.Input>
          </Styled.ContainerInputAll>
        </Styled.ContainerAllInputs>
        <Styled.ContainerAllInputs>
          <Styled.ContainerCpfAndErrors>
            <Styled.ContainerInputAll $width="100%" ref={RefContainerAllNeighborhood}>
              <Styled.ContainerNameInput ref={RefContainerNeighborhood}>
                Bairro
              </Styled.ContainerNameInput>
              <Styled.Input
                type="text"
                autoComplete="off"
                placeholder="Bairro"
                ref={RefInputNeighborhood}
                $placeholdercolor={placeholderColorNeighborhood}
                onChange={(e) => onChangeInputNameFull(e, InputsNames.Neighborhood)}
              ></Styled.Input>
            </Styled.ContainerInputAll>
            {errorNeighborhood && (
              <Styled.Span>Bairro precisa conter no mínimo 2 caracteres</Styled.Span>
            )}
          </Styled.ContainerCpfAndErrors>
        </Styled.ContainerAllInputs>
        <Styled.ContainerAllInputs>
          <Styled.ContainerCpfAndErrors>
            <Styled.ContainerInputAll $width="100%" ref={RefContainerAllStreet}>
              <Styled.ContainerNameInput ref={RefContainerStreet}>
                Rua / Avenida
              </Styled.ContainerNameInput>
              <Styled.Input
                type="text"
                autoComplete="off"
                placeholder="Rua / Avenida"
                ref={RefInputStreetAvenue}
                $placeholdercolor={placeholderColorStreet}
                onChange={(e) => onChangeInputNameFull(e, InputsNames.Street)}
              ></Styled.Input>
            </Styled.ContainerInputAll>
            {errorStreetAvenue && (
              <Styled.Span>
                Rua / Avenida is too short. The Rua / Avenida must be 2 characters or more.
              </Styled.Span>
            )}
          </Styled.ContainerCpfAndErrors>
          <Styled.ContainerInputAll $width="35%" ref={RefContainerAllNumber}>
            <Styled.ContainerNameInput ref={RefContainerNumber}>Número</Styled.ContainerNameInput>
            <Styled.Input
              type="text"
              autoComplete="off"
              placeholder="Número"
              ref={RefInputNumberHome}
              $placeholdercolor={placeholderColorNumber}
              onChange={(e) => onChangeInputNameFull(e, InputsNames.Number)}
              value={valueInputNumberHouse}
            ></Styled.Input>
          </Styled.ContainerInputAll>
        </Styled.ContainerAllInputs>
        <Styled.ContainerAllInputs>
          <Styled.ContainerInputAll $width="100%" ref={RefContainerAllComplement}>
            <Styled.ContainerNameInput ref={RefContainerComplement}>
              Complemento/Referências Próx./Descrição do Prédio
            </Styled.ContainerNameInput>
            <Styled.Input
              type="text"
              autoComplete="off"
              placeholder="Complemento/Referências Próx./Descrição do Prédio"
              ref={RefInputComplement}
              $placeholdercolor={placeholderColorComplement}
              onChange={(e) => onChangeInputNameFull(e, InputsNames.Complement)}
            ></Styled.Input>
          </Styled.ContainerInputAll>
        </Styled.ContainerAllInputs>
        <Styled.ContainerSaveAs>
          <Styled.Span>Salvar Como:</Styled.Span>
          <Styled.ContainerSaveHomeWork>
            <Styled.ContainerSaveHome
              onClick={onClickSaveHome}
              $whatwasclicksave={whatWasClickSave}
            >
              <Styled.Span>Casa</Styled.Span>
            </Styled.ContainerSaveHome>
            <Styled.ContainerSaveWork
              onClick={onClickSaveWork}
              $whatwasclicksave={whatWasClickSave}
            >
              <Styled.Span>Trabalho</Styled.Span>
            </Styled.ContainerSaveWork>
          </Styled.ContainerSaveHomeWork>
        </Styled.ContainerSaveAs>
        <Styled.ContainerTwoButton>
          <Styled.ButtonCancel onClick={onClickCancelNewAddress}>Cancelar</Styled.ButtonCancel>
          <Styled.ButtonSend onClick={onClickSendToDb}>Enviar</Styled.ButtonSend>
        </Styled.ContainerTwoButton>
      </Styled.ContainerModalInner>
    </Styled.ContainerModalNewAddress>
  );
};

export default NewAddressModal;
