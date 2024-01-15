export const getCityCurrentWeather = async (city: string) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching weather data:", error.message);
      throw error;
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
