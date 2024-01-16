import { NetworkError, DataValidationError } from "@/utils/errors";
const apiKey = process.env.WEATHER_API_KEY;
const baseUrl = process.env.WEATHER_API_BASE_URL;

export const getCityCurrentWeather = async (city: string) => {
  if (!apiKey || !baseUrl) {
    throw new Error("Missing required environment variables");
  }

  try {
    const query = city.toLowerCase();
    const url = `${baseUrl}/current.json?key=${apiKey}&q=${query}&aqi=no`;
    const response = await fetch(url);

    if (!response.ok) {
      // Could parse response for detailed error message
      throw new NetworkError("Failed to fetch current weather data");
    }

    const data: any = await response.json();
    if(!checkIfCityExists(query, data)) {
      throw new DataValidationError("City not found");
    }
    if (!data?.current) {
      throw new DataValidationError("Current weather data is not available");
    }

    return data.current;
  } catch (error) {
    if (error instanceof NetworkError || error instanceof DataValidationError) {
      console.error("Error fetching weather data:", error.message);
      // Handle specific error types here if needed
      // Re-throw error to be handled by the error boundary (error page)
      throw error;
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }
};

export const checkIfCityExists = (searchedForCity: string, data: any) => {
  const cityFromAPI = data?.location?.name?.toLowerCase().trim();
  return searchedForCity === cityFromAPI;
};

