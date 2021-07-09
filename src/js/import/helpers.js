const getNewUrl = (baseUrl, str) => {
  const newUrl = baseUrl + str;
  history.pushState(null, null, newUrl);
};

const randomNum = (min, max) => min + Math.random() * (max - min);

export { getNewUrl, randomNum };
