import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';
import { Url } from '../../../../../Utils/Url';
import SvgOk from '../../../../Svg/SvgOk/SvgOk';
import { UserUpdateData } from '../FillCpfAndBirthdate/FillCpfAndBirthdate';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';
import SvgUserBody from '../../../../HeaderComponents/AllSvgHeader/SvgUserBody/SvgUserBody';
import { GetUserFromLocalStorage } from '../../../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import CryptoJS from 'crypto-js';

const Perfil = () => {
  const [userObj, setUserObj] = useState<ObjUser | null>(null);
  const [valueInput, setValueInput] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [genderUser, setGenderUser] = useState('');

  const [showInsertEmail, setShowInsertEmail] = useState(false);
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [showMyPerfil, setShowMyPerfil] = useState(true);
  const [userUpdateCpfBirthdate, setUserUpdateCpfBirthdate] = useState<UserUpdateData | null>(null);
  const [birthdate, setBirthdate] = useState<string | null>(null);
  const [cpf, setCpf] = useState<string | null>(null);
  const RefInputNameUser = useRef<HTMLInputElement | null>(null);

  const nav = useNavigate();
  const location = useLocation();

  const emailToShowToUserMyPerfil = (email: string) => {
    if (!email) return;

    if (email.length <= 0) {
      setEmailUser('');

      return;
    }

    let emailNew = `${email[0]}${email[1]}`;
    let indexArroba = email.indexOf('@');

    for (let i = 0; i < indexArroba; i++) {
      if (i > 1) {
        emailNew += '*';
      }
    }

    emailNew += '@gmail.com';

    setEmailUser(emailNew);
  };

  const getInfoUser = async (userObj: ObjUser) => {
    let userId = userObj?.id;
    const res = await fetch(`${Url}/user/get-user-by-id/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userObj.token}`,
        uid: userObj.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();
      let data: ObjUser = json.data;

      setGenderUser(data.gender);
      emailToShowToUserMyPerfil(data.email);

      setUserObj(data);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      // nav('/login');
      return;
    }
  };

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    if (objUser.isNullUserLocalStorage) {
      nav('/login');
      return;
    }

    if (objUser.user === null) {
      localStorage.removeItem('user');

      nav('/login');
      return;
    }

    if (location.state) {
      const objState = location.state;

      setUserObj((prop) => {
        if (prop) {
          return {
            ...prop,
            email: objState.user.email,
          };
        }

        return prop;
      });

      setUserUpdateCpfBirthdate(objState.userUpdate);
      emailToShowToUserMyPerfil(objState.user.email);
    }

    let userJson = objUser.user;
    setUserObj(userJson);
    getInfoUser(userJson);
    // location.state.user = userJson;
    emailToShowToUserMyPerfil(userJson.email);
    setValueInput(userJson.name);

    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      document.body.style.overflowY = 'scroll';
    }, 100);

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  const onChangeInputNameUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    setValueInput(inputValue);
  };

  const onClickInsertEmail = () => {
    setShowInsertEmail(true);
    setShowMyPerfil(false);
  };

  const onClickChangeEmail = () => {
    setShowChangeEmail(true);
    setShowMyPerfil(false);
  };

  useEffect(() => {
    if (showInsertEmail) {
      nav('/user/account/email', { state: { user: userObj } });
    }
  }, [showInsertEmail]);

  useEffect(() => {
    if (showChangeEmail) {
      nav('/user/account/change-email', { state: { user: userObj } });
    }
  }, [showChangeEmail]);

  const [showChangeEmailLink, setShowChangeEmailLink] = useState(false);

  useEffect(() => {
    if (emailUser && emailUser.length > 0 && emailUser.includes('@')) {
      setShowChangeEmailLink(true);
    } else {
      setShowChangeEmailLink(false);
    }
  }, [emailUser]);

  const [emailToShowUser, setEmailToShowUser] = useState('');

  useEffect(() => {
    if (userObj && userObj.phone) {
      let emailSlice = userObj.phone.slice(6);
      let emailNew = '';

      for (let i = 0; i < emailSlice.length; i++) {
        if (i >= 11) {
          emailNew += emailSlice[i];
        } else {
          emailNew += '*';
        }
      }

      setEmailToShowUser(emailNew);
    }
  }, [userObj]);

  useEffect(() => {
    if (userUpdateCpfBirthdate) {
      // console.log(userUpdateCpfBirthdate);
    }

    if (userObj) {
      if (userObj.birthDate === null || userObj.birthDate === undefined) return;

      let birthdate = '**.**.****';
      let cpf = userObj.cpf;
      let newCpf = '';

      for (let i = 0; i < cpf.length; i++) {
        if (i < 7) {
          newCpf += '*';
        }

        if (i === 2 || i === 5) {
          newCpf += '.';
        }

        if (i >= 7) {
          newCpf += cpf[i];
        }

        if (i === 8) {
          newCpf += '-';
        }
      }
      setCpf(newCpf);

      setBirthdate(birthdate);
    }
  }, [userUpdateCpfBirthdate, userObj]);

  const onClickChangePhone = () => {
    nav('/user/account/phone', { state: { user: userObj } });
  };

  const onClickFillCpfBirthdate = () => {
    nav('/user/account/kyc', { state: { user: userObj } });
  };

  const [showCheckboxM, setShowCheckboxM] = useState(false);
  const [showCheckboxF, setShowCheckboxF] = useState(false);
  const [showCheckboxO, setShowCheckboxO] = useState(false);
  const [showUpdateSuccessfully, setShowUpdateSuccessfully] = useState<boolean | null>(false);
  const [base64StringImage, setBase64StringImage] = useState<string | null>(null);

  const onClickChoseGender = (gender: string) => {
    setGenderUser(gender);

    if (gender === 'm') {
      setShowCheckboxM(true);
    } else {
      setShowCheckboxM(false);
    }

    if (gender === 'f') {
      setShowCheckboxF(true);
    } else {
      setShowCheckboxF(false);
    }

    if (gender === 'o') {
      setShowCheckboxO(true);
    } else {
      setShowCheckboxO(false);
    }
  };

  const onClickSavePefil = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // aqui tem pegar todos os dados "nomeUser, email, phone, gender " e mandar para update
    if (RefInputNameUser.current === null) return;

    const objUser = GetUserFromLocalStorage();

    if (userObj === null || objUser === null || objUser.isNullUserLocalStorage) return;

    let inputValuNameUser = RefInputNameUser.current.value;
    let email = userObj.email;
    let gender = genderUser;
    let phone = userObj.phone;

    const userUpdate = {
      UserId: userObj.id,
      Name: inputValuNameUser,
      Email: email,
      Gender: gender,
      Phone: phone,
      Cpf: '',
      BirthDate: '',
      Base64StringImage: base64StringImage,
    };

    if (objUser.user === null) return;

    let userLogin = objUser.user;

    const res = await fetch(`${Url}/user/update-user-all`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${userLogin.token}`,
        uid: userLogin.id,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userUpdate),
    });

    if (res.status === 200) {
      const json = await res.json();
      let user: ObjUser = json.data;
      setShowUpdateSuccessfully(true);

      document.body.style.overflow = 'hidden';

      // const objUser = GetUserFromLocalStorage();

      // if (objUser.isNullUserLocalStorage) {
      //   nav('/login');
      //   return;
      // }

      // if (objUser.user === null) {
      //   localStorage.removeItem('user');

      //   nav('/login');
      //   return;
      // }

      // let userLocalStoage: ObjUser = objUser.user;

      // userLocalStoage.email = user.email;
      // userLocalStoage.id = user.id;
      // userLocalStoage.name = user.name;
      // userLocalStoage.phone = user.phone;

      let userLocalStoage = {
        id: objUser.user.id,
        name: user.name,
        email: user.email,
        gender: gender,
        phone: user.phone,
        cpf: '',
        birthDate: '',
        token: objUser.user.token,
        userImage: user.userImage,
      };

      const secretKey = import.meta.env.VITE__APP_SECRET_KEY_USER;

      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(userLocalStoage), secretKey).toString();

      localStorage.setItem('user', encrypted);
      // nav('/');

      // localStorage.setItem('user', JSON.stringify(userLocalStoage));
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (!genderUser) return;

    if (genderUser.length > 0) {
      if (genderUser === 'm') {
        setShowCheckboxM(true);
      } else {
        setShowCheckboxM(false);
      }

      if (genderUser === 'f') {
        setShowCheckboxF(true);
      } else {
        setShowCheckboxF(false);
      }

      if (genderUser === 'o') {
        setShowCheckboxO(true);
      } else {
        setShowCheckboxO(false);
      }
    }
  }, [genderUser]);

  const onClickContainerUpdateMain = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();

    document.body.style.overflowY = 'scroll';
    setShowUpdateSuccessfully(false);
  };

  const onClickButtonSelectionImage = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (target.files === null || target.files.length <= 0) return;

      const file = target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64String = reader.result as string;
        setBase64StringImage(base64String);
      };

      reader.onerror = (error) => {
        console.error('Erro ao ler o arquivo:', error);
      };
    });

    fileInput.click();
  };

  return (
    <>
      <Styled.ContainerMainMain>
        {showMyPerfil && (
          <>
            <Styled.ContainerPerfilMain>
              <Styled.ContainerOnlyPerfil>
                <Styled.H1>Meu perfil</Styled.H1>
                <Styled.Span>Gerenciar e proteger sua conta</Styled.Span>
              </Styled.ContainerOnlyPerfil>
              <Styled.ContainerMyPerfilInfo>
                <Styled.Form>
                  <Styled.Table>
                    <Styled.Tbody>
                      <Styled.Tr>
                        <Styled.Td>
                          <Styled.Label className="label">Nome de usuário</Styled.Label>
                        </Styled.Td>
                        <Styled.TdSecond>
                          <Styled.ContainerOnlyInputNameUser>
                            {userObj && (
                              <Styled.Input
                                type="text"
                                placeholder="Nome de usuário"
                                value={valueInput}
                                ref={RefInputNameUser}
                                onChange={(e) => onChangeInputNameUser(e)}
                              />
                            )}
                            <Styled.Span>
                              Nome do usuário pode ser alterado apenas uma vez.
                            </Styled.Span>
                          </Styled.ContainerOnlyInputNameUser>
                        </Styled.TdSecond>
                      </Styled.Tr>
                      <Styled.Tr>
                        <Styled.TdNome>
                          <Styled.Label className="label">Nome</Styled.Label>
                        </Styled.TdNome>
                        <Styled.TdSecond>
                          <Styled.ContainerOnlyInputNameUser>
                            <Styled.ContainerOnlyInputName>
                              <Styled.Input type="text" placeholder="Nome" />
                            </Styled.ContainerOnlyInputName>
                          </Styled.ContainerOnlyInputNameUser>
                        </Styled.TdSecond>
                      </Styled.Tr>
                      <Styled.Tr>
                        <Styled.TdNome>
                          <Styled.Label className="label">Email</Styled.Label>
                        </Styled.TdNome>
                        <Styled.TdSecond>
                          <Styled.ContainerLinkInsert>
                            {showChangeEmailLink && <Styled.Span>{emailUser}</Styled.Span>}
                            {!showChangeEmailLink && (
                              <Styled.Link onClick={() => onClickInsertEmail()}>
                                Inserir
                              </Styled.Link>
                            )}
                            {showChangeEmailLink && (
                              <Styled.Link onClick={() => onClickChangeEmail()}>Trocar</Styled.Link>
                            )}
                          </Styled.ContainerLinkInsert>
                        </Styled.TdSecond>
                      </Styled.Tr>
                      <Styled.Tr>
                        <Styled.TdNome>
                          <Styled.Label className="label">Número de telefone</Styled.Label>
                        </Styled.TdNome>
                        <Styled.TdSecond>
                          <Styled.ContainerCelPhone>
                            {emailToShowUser.length > 0 && (
                              <Styled.Container>{emailToShowUser}</Styled.Container>
                            )}
                            {emailToShowUser.length <= 0 && (
                              <Styled.Container>***********23</Styled.Container>
                            )}

                            {emailToShowUser.length > 0 && (
                              <Styled.Link onClick={() => onClickChangePhone()}>Trocar</Styled.Link>
                            )}
                            {emailToShowUser.length <= 0 && <Styled.Link>Inserir</Styled.Link>}
                          </Styled.ContainerCelPhone>
                        </Styled.TdSecond>
                      </Styled.Tr>
                      <Styled.Tr>
                        <Styled.TdNome>
                          <Styled.Label className="label">Sexo</Styled.Label>
                        </Styled.TdNome>
                        <Styled.TdSecond>
                          <Styled.ContainerMainInputs>
                            <Styled.ContainerInputs onClick={() => onClickChoseGender('m')}>
                              <Styled.InputCheckbox $showCheckbox={showCheckboxM}>
                                <Styled.CheckBox
                                  className="checkbox-gender"
                                  $showCheckbox={showCheckboxM}
                                ></Styled.CheckBox>
                              </Styled.InputCheckbox>
                              <Styled.Span>masculino</Styled.Span>
                            </Styled.ContainerInputs>
                            <Styled.ContainerInputs onClick={() => onClickChoseGender('f')}>
                              <Styled.InputCheckbox $showCheckbox={showCheckboxF}>
                                <Styled.CheckBox
                                  className="checkbox-gender"
                                  $showCheckbox={showCheckboxF}
                                ></Styled.CheckBox>
                              </Styled.InputCheckbox>
                              <Styled.Span>feminino</Styled.Span>
                            </Styled.ContainerInputs>
                            <Styled.ContainerInputs onClick={() => onClickChoseGender('o')}>
                              <Styled.InputCheckbox $showCheckbox={showCheckboxO}>
                                <Styled.CheckBox
                                  className="checkbox-gender"
                                  $showCheckbox={showCheckboxO}
                                ></Styled.CheckBox>
                              </Styled.InputCheckbox>
                              <Styled.Span>Outros</Styled.Span>
                            </Styled.ContainerInputs>
                          </Styled.ContainerMainInputs>
                        </Styled.TdSecond>
                      </Styled.Tr>
                      <Styled.Tr>
                        <Styled.TdNome>
                          <Styled.Label className="label">CPF/Data de nascimento</Styled.Label>
                        </Styled.TdNome>
                        <Styled.TdSecond>
                          <Styled.ContainerCelPhone>
                            {cpf !== null && birthdate !== null && (
                              <>
                                <Styled.Span>{cpf}</Styled.Span>
                                <Styled.Span>/</Styled.Span>
                                <Styled.Span>{birthdate}</Styled.Span>
                              </>
                            )}

                            {cpf === null && birthdate === null && (
                              <Styled.Link onClick={() => onClickFillCpfBirthdate()}>
                                Preencher agora
                              </Styled.Link>
                            )}

                            {cpf !== null && birthdate !== null && (
                              <Styled.Link onClick={() => onClickFillCpfBirthdate()}>
                                Alterar
                              </Styled.Link>
                            )}
                          </Styled.ContainerCelPhone>
                        </Styled.TdSecond>
                      </Styled.Tr>
                      <Styled.Tr>
                        <Styled.TdNome></Styled.TdNome>
                        <Styled.TdSecond>
                          <Styled.ContainerButtonSave>
                            <Styled.Button onClick={(e) => onClickSavePefil(e)}>
                              Gravar
                            </Styled.Button>
                          </Styled.ContainerButtonSave>
                        </Styled.TdSecond>
                      </Styled.Tr>
                    </Styled.Tbody>
                  </Styled.Table>
                </Styled.Form>
              </Styled.ContainerMyPerfilInfo>
            </Styled.ContainerPerfilMain>

            <Styled.ContainerSelectImage>
              <Styled.ContainerImgUser>
                <SvgUserBody />
              </Styled.ContainerImgUser>
              <Styled.Button onClick={onClickButtonSelectionImage}>
                Selecionar a Imagem
              </Styled.Button>
              <Styled.ContainerSpanInfoAboutSelectImage>
                <Styled.Span>Tamanho do arquivo: no máximo 1 MB</Styled.Span>
                <Styled.Span>Extensão de arquivo: .JPEG, .PNG</Styled.Span>
              </Styled.ContainerSpanInfoAboutSelectImage>
            </Styled.ContainerSelectImage>
          </>
        )}
      </Styled.ContainerMainMain>

      {showUpdateSuccessfully !== null && showUpdateSuccessfully && (
        <Styled.ContainerUpdateSuccessfully onClick={(e) => onClickContainerUpdateMain(e)}>
          <Styled.ContainerProfileUpdate>
            <SvgOk colorSvg="#6C0"></SvgOk>
            <Styled.Span>Perfil atualizado</Styled.Span>
          </Styled.ContainerProfileUpdate>
        </Styled.ContainerUpdateSuccessfully>
      )}

      <Outlet></Outlet>
    </>
  );
};

export default Perfil;
