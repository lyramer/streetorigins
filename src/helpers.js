const dataMap = {
  origin: {
    "1": "British",
    "2": "Canadian",
    "3": "Scottish",
    "4": "Australian",
    "5": "Irish",
    "6": "French",
    "7": "Celtic",
    "8": "Spanish",
    "9": "American",
    "10": "Native"
  },
  type: {
    "1": "Location",
    "2": "Place",
    "3": "Arboreal",
    "4": "Historical",
    "5": "Person",
    "6": "Ship",
    "7": "Cohort",
    "8": "Estate"
  },
  occ: {
    "1": "Proprietor",
    "2": "Daughter",
    "3": "Military",
    "4": "Explorer",
    "5": "Politician",
    "6": "Judge",
    "7": "Resident",
    "8": "Doctor",
    "9": "Captain",
    "10": "Engineer",
    "11": "Banker",
    "12": "Surveyor",
    "13": "Journalist",
    "14": "Wife",
    "15": "Poet",
    "16": "Druggist",
    "17": "Lawyer",
    "18": "Mayor",
    "19": "Mariner",
    "20": "Contractor",
    "21": "Pharmacist",
    "22": "Farmer",
    "23": "Architect",
    "24": "HBC",
    "25": "Governor"
  }
};

export function fetchOrigin(val) {
  if (val === null) return "Unknown";
  return dataMap.origin[val];
}

export function fetchStory(val) {
  if (val === null) return "Unknown";
  return val;
}
