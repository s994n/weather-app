// Utils
import { weatherDisplayConfig } from "@/utils/weatherDisplayConfig";

// Components
import { WeatherInfoItem, WeatherInfoItemProps } from "../../molecules";

interface WeatherInfoItemsProps {
  infoItems: WeatherInfoItemProps[];
}

type WeatherData = {
  [key: string]: number | string;
};

interface WeatherInfoProps {
  weatherData: WeatherData;
}

const WeatherInfoItems: React.FC<WeatherInfoProps> = ({ weatherData }) => {
  return (
    <div>
      {weatherDisplayConfig.map((config) => {
        const { title, key, unit } = config;
        return (
          <WeatherInfoItem
            key={key}
            title={title}
            value={weatherData?.[key]}
            unit={unit}
          />
        );
      })}
    </div>
  );
};

export default WeatherInfoItems;
