const setInLocalStorage = (key: string, value: any) => {
  const stringifyData = JSON.stringify(value);
  localStorage.setItem('data', stringifyData);
};

const getFromLocalStorage = (key: string, defaultValue: any) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};

const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

const clearFromLocalStorage = () => {
  localStorage.clear();
};

const objectToExport = {
  setInLocalStorage: setInLocalStorage,
  getFromLocalStorage: getFromLocalStorage,
  removeFromLocalStorage: removeFromLocalStorage,
  clearFromLocalStorage: clearFromLocalStorage,
};

// Exportamos el objeto para que pueda ser usado desde App
export default objectToExport;
