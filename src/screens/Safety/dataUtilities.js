import data from "../../data/master.json";

const isPostalCodeExist = (postal_code) => {
  const found = data.some((entry) => entry["Postal code"].toUpperCase() === postal_code.toUpperCase());
  return found;
}

const getPostalCodeData = (postal_code) => {
  const entry = data.find((item) => item["Postal code"].toUpperCase() === postal_code.toUpperCase());

  if (entry) {
    // data from dictionary
    const homicides = entry["Homicides"];
    const intrusionsHome = entry["Breaking and enterings"];
    const robberies = entry["Robberies"];


    console.log(`Number of homicides: ${homicides}, Number of Breaking and enterings: ${intrusionsHome}, Number of robberies: ${robberies}`);
    return { homicides: homicides, intrusionsHome: intrusionsHome, robberies: robberies};
  } else {
    console.log(`Postal code ${postal_code} does not exist.`);
    return null;
  }
};

export { isPostalCodeExist, getPostalCodeData };
