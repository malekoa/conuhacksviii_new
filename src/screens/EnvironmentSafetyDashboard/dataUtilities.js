import data from "../../data/master.json";

const isPostalCodeExist = (postal_code) => {
  const found = data.some((entry) => entry["Postal code"].toUpperCase() === postal_code.toUpperCase());
  return found;
}

const getPostalCodeData = (postal_code) => {
  const entry = data.find((item) => item["Postal code"].toUpperCase() === postal_code.toUpperCase());

  if (entry) {
    // data from dictionary
    const publicTrees = entry["Number of public trees"];
    const communityGardens = entry["Community gardens"];

    console.log(`Public Trees: ${publicTrees}, Community Gardens: ${communityGardens}`);
    return { publicTrees, communityGardens };
  } else {
    console.log(`Postal code ${postal_code} does not exist.`);
    return null;
  }
};

export { isPostalCodeExist, getPostalCodeData };
