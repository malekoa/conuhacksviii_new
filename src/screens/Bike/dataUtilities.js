import data from "../../data/master.json";

const isPostalCodeExist = (postal_code) => {
  const found = data.some((entry) => entry["Postal code"].toUpperCase() === postal_code.toUpperCase());
  return found;
}

const getPostalCodeData = (postal_code) => {
  const entry = data.find((item) => item["Postal code"].toUpperCase() === postal_code.toUpperCase());

  if (entry) {
    // data from dictionary
    const collisionCyclist = entry["Collisions involving cyclists"];
    const bikeFixture = entry["Bicycle parking fixture"];


    console.log(`Number of collisions with cyclists: ${collisionCyclist}, Number of bike fixtures: ${bikeFixture}`);
    return { collisionCyclist, bikeFixture};
  } else {
    console.log(`Postal code ${postal_code} does not exist.`);
    return null;
  }
};

export { isPostalCodeExist, getPostalCodeData };
