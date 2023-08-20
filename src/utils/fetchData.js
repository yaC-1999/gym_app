export const exercisesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "668e0e5d03msh61fd2d71ae93a95p160ae8jsn7a2a0dbed022",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "668e0e5d03msh61fd2d71ae93a95p160ae8jsn7a2a0dbed022",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch(error) {
    console.error(error);
  }
};
