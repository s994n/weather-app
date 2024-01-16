import { NetworkError, DataValidationError } from "@/utils/errors";

export const getCityCurrentWeather = async (city: string) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = process.env.WEATHER_API_BASE_URL;

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

    const data = await response.json();
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
