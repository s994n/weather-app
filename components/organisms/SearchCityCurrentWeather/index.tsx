// Utils
import { searchCityCurrentWeather } from "@/utils/actions";

// Constants
import { ButtonVariants, InputFieldVariants } from "@/constants";

// Components
import { StyledHeader } from "../../atoms";
import { SingleInputForm } from "../../molecules";

const SearchCityCurrentWeather: React.FC = () => {
  return (
    <section className="search-section" aria-labelledby="city-current-weather-search-header">
      <StyledHeader variant="subheader" id="city-current-weather-search-header">
        Search for the current weather by city name
      </StyledHeader>
      <SingleInputForm
        inputFieldType="text"
        inputFieldVariant={InputFieldVariants.default}
        id="location"
        name="location"
        placeholder="City name"
        buttonVariant={ButtonVariants.default}
        buttonAriaLabel="Search for current weather"
        buttonLabel="Search current weather"
        action={searchCityCurrentWeather}
      />
    </section>
  );
};

export default SearchCityCurrentWeather;
