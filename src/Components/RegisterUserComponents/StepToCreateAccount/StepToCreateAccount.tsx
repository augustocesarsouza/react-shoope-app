import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import * as Styled from './styled';
import FirstStepCreateAccount from '../AllStepFollowToCreateAccount/FirstStepCreateAccount/FirstStepCreateAccount';
import SecondStepCreateAccount from '../AllStepFollowToCreateAccount/SecondStepCreateAccount/SecondStepCreateAccount';
import ThirdStepCreateAccount from '../AllStepFollowToCreateAccount/ThirdStepCreateAccount/ThirdStepCreateAccount';

interface StepToCreateAccountProps {
  numberToCreateAccount: string;
  valueInputPhone: string;
  changeValueShowStepToContinueCreateAccount: (value: boolean) => void;
}

const StepToCreateAccount = ({
  numberToCreateAccount,
  valueInputPhone,
  changeValueShowStepToContinueCreateAccount,
}: StepToCreateAccountProps) => {
  const [whatStepIsNow, setWhichStepIsNow] = useState(1);

  const changeValueWhatStepIsNow = (value: number) => {
    setWhichStepIsNow(value);
  };

  return (
    <Styled.ContainerStepOneMain>
      <Styled.ContainerHeaderCreateAccount>
        <Styled.ContainerFirstBall $colorgreen={true}>
          <Styled.Container>
            <Styled.Span>1</Styled.Span>
          </Styled.Container>
          <Styled.Span>Verifique número de telefone</Styled.Span>
        </Styled.ContainerFirstBall>
        <Styled.ContainerArrow $colorgreen={whatStepIsNow >= 2}></Styled.ContainerArrow>
        <Styled.ContainerFirstBall $colorgreen={whatStepIsNow >= 2}>
          <Styled.Container>
            <Styled.Span>2</Styled.Span>
          </Styled.Container>
          <Styled.Span>Criar senha</Styled.Span>
        </Styled.ContainerFirstBall>
        <Styled.ContainerArrow $colorgreen={whatStepIsNow >= 3}></Styled.ContainerArrow>
        <Styled.ContainerFirstBall $colorgreen={whatStepIsNow >= 3}>
          <Styled.Container>
            <FontAwesomeIcon icon={faCheck} />
          </Styled.Container>
          <Styled.Span>Concluído</Styled.Span>
        </Styled.ContainerFirstBall>
      </Styled.ContainerHeaderCreateAccount>
      {whatStepIsNow === 1 && (
        <FirstStepCreateAccount
          setWhichStepIsNow={setWhichStepIsNow}
          valueInputPhone={valueInputPhone}
          changeValueShowStepToContinueCreateAccount={changeValueShowStepToContinueCreateAccount}
        ></FirstStepCreateAccount>
      )}
      {whatStepIsNow === 2 && (
        <SecondStepCreateAccount
          changeValueWhatStepIsNow={changeValueWhatStepIsNow}
        ></SecondStepCreateAccount>
      )}
      {whatStepIsNow === 3 && (
        <ThirdStepCreateAccount
          numberToCreateAccount={numberToCreateAccount}
        ></ThirdStepCreateAccount>
      )}
    </Styled.ContainerStepOneMain>
  );
};

export default StepToCreateAccount;
