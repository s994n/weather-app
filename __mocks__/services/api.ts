export const getCityCurrentWeather = jest.fn(() =>
  Promise.resolve({
    // Mocked weather data
    temp_c: "20",
    wind_kph: "10",
    humidity: "88",
    // ... other weather properties
  })
);
