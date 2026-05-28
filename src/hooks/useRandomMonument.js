import data from '../data/monuments.json';

export const useMonumentNumber = () => {
  const randomNumber = Math.ceil(Math.random() * data.length);

  return randomNumber;
};
