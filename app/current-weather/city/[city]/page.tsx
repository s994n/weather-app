import React from "react";
import { Metadata } from "next";

// Components
import { StyledHeader } from "@/components/atoms";
import { WeatherInfoItems } from "@/components/organisms";

// Services
import { getCityCurrentWeather } from "@/services/api";

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = params.city;
  return {
    title: `${city} current weather`,
    description: `The current weather for ${city}`,
  };
}

const CityCurrentWeather = async ({ params }: { params: { city: string } }) => {
  const city = params.city;
  let currentWeather;
  try {
    currentWeather = await getCityCurrentWeather(city);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }

  return (
    <main>
      <StyledHeader variant="hero" caps>
        Current Weather for {city}
      </StyledHeader>
      <WeatherInfoItems weatherData={currentWeather} />
    </main>
  );
};

export default CityCurrentWeather;
