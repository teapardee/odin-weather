let weather = (() => {
  let apiKey = '31817d8418b51762cc493df2ffec8f38';

  async function retrieveCoords(zipcode) {
    try {
      const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${apiKey}`;
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) {
        throw new Error('Invalid Zip Code. Please Re-enter');
      }
      const location = await response.json();
      return location;
    } catch (error) {
      alert(error);
    }
  }

  async function retrieveData(zipcode) {
    try {
      const location = await retrieveCoords(zipcode);
      const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
      console.log(url);
      const response = await fetch(url, { mode: 'cors' });
      if (!response.ok) {
        throw new Error('Invalid URL');
      }
      const weatherData = await response.json();
      return weatherData;
    } catch (error) {
      alert(error);
    }
  }

  return {
    retrieveCoords,
    retrieveData,
  };
})();

export { weather };
