import data from "../../data/master.json";

const isPostalCodeExist = (postal_code) => {
  const found = data.some((entry) => entry["Postal code"].toUpperCase() === postal_code.toUpperCase());
  return found;
}

const getPostalCodeData = (postal_code) => {
  const entry = data.find((item) => item["Postal code"].toUpperCase() === postal_code.toUpperCase());

  if (entry) {
    // data from dictionary
    const trafficLights = entry["Pedestrian traffic lights"];
    const evChargers = entry["Electric vehicle chargers"];


    console.log(`Number of Traffic Lights: ${trafficLights}, Number of EV Chargers: ${evChargers}`);
    return { trafficLights, evChargers };
  } else {
    console.log(`Postal code ${postal_code} does not exist.`);
    return null;
  }
};

export { isPostalCodeExist, getPostalCodeData };
