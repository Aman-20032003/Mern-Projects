const baseUrl = "https://api.weatherapi.com/v1/current.json?key=86f9438e97464621b3293511252407";

export const getWheatherDataForCity = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  return await response.json();
};
export const getWheatherDataForLocation = async (lat,lon) => {
  const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
