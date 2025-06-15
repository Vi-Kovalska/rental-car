export const cityConverting = (string) => {
  const arrayAdress = string.split(",");
  const city = arrayAdress[1];
  return city;
};
export const countryConverting = (string) => {
  const arrayAdress = string.split(",");
  const country = arrayAdress[2];
  return country;
};
export const mileageUIConverting = (number) => {
  const arrayNumbers = String(number).split("");
  const firstNum = arrayNumbers.shift();
  const mileageUI = `${firstNum} ${arrayNumbers.join("")} km`;
  return mileageUI;
};
