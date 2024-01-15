import React from "react";

// Components
import { StyledHeader } from "@/components/atoms";

// Services
import { getCityCurrentWeather } from "@/services/api";

const CityCurrentWeather = async ({ params }: { params: { city: string } }) => {
  const response = await getCityCurrentWeather(params.city);
  console.log(response);
  return (
    <main>
      <StyledHeader variant='hero' caps>
        Current Weather for {params.city}
      </StyledHeader>
      {/* TODO DISPLAY WEATHER DATA */}
    </main>
  );
};

export default CityCurrentWeather;
