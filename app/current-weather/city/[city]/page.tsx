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
  // TODO: Needs a refactor to abstract functionality for replacing certain characters
  const replaceSpaceCharacters = (city: string) => {
    return city.replace(/%20/g, "+");
  };

  const city = replaceSpaceCharacters(params.city);

  const currentWeather = await getCityCurrentWeather(city);

  return (
    <main>
      <StyledHeader variant="hero" caps>
        Current Weather for {city.replace(/\+/g, " ")}
      </StyledHeader>
      <WeatherInfoItems weatherData={currentWeather} />
    </main>
  );
};

export default CityCurrentWeather;
