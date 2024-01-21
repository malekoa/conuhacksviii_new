import data from "../../data/master.json";

const isPostalCodeExist = (postal_code) => {
  const found = data.some((entry) => entry["Postal code"].toUpperCase() === postal_code.toUpperCase());
  return found;
}

const getPostalCodeData = (postal_code) => {
  const entry = data.find((item) => item["Postal code"].toUpperCase() === postal_code.toUpperCase());

  if (entry) {
    // data from dictionary
    const theftInside = entry["Thefts inside motor vehicle"];
    const theftCar = entry["Thefts of motor vehicles"];


    console.log(`Number of thefts inside the motor vehicle: ${theftInside}, Number of theft of motor vehicles: ${theftCar}`);
    return { theftInside: theftInside, theftCar:theftCar};
  } else {
    console.log(`Postal code ${postal_code} does not exist.`);
    return null;
  }
};

export { isPostalCodeExist, getPostalCodeData };
