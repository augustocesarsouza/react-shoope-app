import CryptoJS from 'crypto-js';

export const GetCountdonwTimeFromLocalStorage = (): IResultGetCountdowntimeFromLocalStorage => {
  const countdowntimeLocalStorage = localStorage.getItem('countdowntime');

  const ResultGetCountdowntimeFromLocalStorage: IResultGetCountdowntimeFromLocalStorage = {
    isNullUserLocalStorage: false,
    countdowntime: null,
  };

  if (countdowntimeLocalStorage) {
    let secretKey = import.meta.env.VITE__APP_SECRET_KEY_COUNTDOWN;

    if (secretKey === undefined) {
      return ResultGetCountdowntimeFromLocalStorage;
    }

    try {
      const bytes = CryptoJS.AES.decrypt(countdowntimeLocalStorage, secretKey);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

      const decryptedData = JSON.parse(decryptedString);
      ResultGetCountdowntimeFromLocalStorage.countdowntime = decryptedData;

      return ResultGetCountdowntimeFromLocalStorage;
    } catch (error) {
      console.error('Erro ao converter os dados descriptografados:', error);
      return ResultGetCountdowntimeFromLocalStorage;
    }
  } else {
    ResultGetCountdowntimeFromLocalStorage.isNullUserLocalStorage = true;
    return ResultGetCountdowntimeFromLocalStorage;
  }
};

export interface IResultGetCountdowntimeFromLocalStorage {
  isNullUserLocalStorage: boolean;
  countdowntime: string | null;
}
