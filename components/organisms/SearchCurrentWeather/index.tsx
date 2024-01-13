
// Utils
import { searchCurrentWeather } from "@/utils/actions";

// Constants
import { ButtonVariants, InputFieldVariants } from "@/constants";

// Components
import { SingleInputForm } from "../../molecules";

const SearchCurrentWeather: React.FC = () => {

  return (
    <SingleInputForm
      inputFieldType="text"
      inputFieldVariant={InputFieldVariants.default}
      id="location"
      name="location"
      placeholder="City name"
      buttonVariant={ButtonVariants.default}
      buttonAriaLabel="Search for current weather"
      buttonLabel="Search current weather"
      action={searchCurrentWeather}
    />
  );
};

export default SearchCurrentWeather;
