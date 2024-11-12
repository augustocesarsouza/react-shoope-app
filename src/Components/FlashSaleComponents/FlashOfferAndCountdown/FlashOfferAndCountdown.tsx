import { useEffect, useState } from 'react';
import * as Styled from './styled';

interface FlashOfferAndCountdownProps {
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeLeftProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const FlashOfferAndCountdown = ({ hours, minutes, seconds }: FlashOfferAndCountdownProps) => {
  const [totalTimeInMillis] = useState(
    hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000
  );
  const [targetTime] = useState(new Date().getTime() + totalTimeInMillis);

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    let timeLeft: TimeLeftProps = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft.seconds <= 0) {
      window.location.reload();
    }
  }, [timeLeft]);

  return (
    <Styled.ContainerFlashDealsMain>
      <Styled.ContainerFlashDealsHeader>
        <Styled.ContainerFlashDealsImg>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729512130/img-flash-deals/2c66c570e9bc4309bc51_eb0lw4.png"
            alt="img-about-flesh-offer"
          />
        </Styled.ContainerFlashDealsImg>
      </Styled.ContainerFlashDealsHeader>
      <Styled.ContainerFinishIn>
        <Styled.ContainerChronometer>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730893687/flash-offer-img/3b9d94a588dd77fd5ec6_wlo4sr.png"
            alt="img-chronometer"
          />
        </Styled.ContainerChronometer>
        <Styled.H1>TERMINA EM</Styled.H1>
      </Styled.ContainerFinishIn>
      <Styled.CountdownContainer>
        <Styled.DigitBox>{String(timeLeft.hours || '00').padStart(2, '0')}</Styled.DigitBox>
        <Styled.DigitBox>{String(timeLeft.minutes || '00').padStart(2, '0')}</Styled.DigitBox>
        <Styled.DigitBox>{String(timeLeft.seconds || '00').padStart(2, '0')}</Styled.DigitBox>
      </Styled.CountdownContainer>
    </Styled.ContainerFlashDealsMain>
  );
};

export default FlashOfferAndCountdown;
