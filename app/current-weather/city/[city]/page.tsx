import React from "react";
import Error from "next/error";

// Components
import { StyledHeader } from "@/components/atoms";
import { WeatherInfoItems } from "@/components/organisms";

// Services
import { getCityCurrentWeather } from "@/services/api";

const CityCurrentWeather = async ({ params }: { params: { city: string } }) => {
  const currentWeather = await getCityCurrentWeather(params.city);

  return (
    <main>
      <StyledHeader variant="hero" caps>
        Current Weather for {params.city}
      </StyledHeader>
      <WeatherInfoItems weatherData={currentWeather} />
      {/* TODO DISPLAY WEATHER DATA */}
    </main>
  );
};

export default CityCurrentWeather;
