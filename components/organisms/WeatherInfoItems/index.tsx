import { WeatherInfoItem, WeatherInfoItemProps } from "../../molecules";

interface WeatherInfoItemsProps {
  infoItems: WeatherInfoItemProps[];
}

type WeatherData = {
  [key: string]: number; // Adjust the type based on your actual API response
};

interface WeatherInfoProps {
  weatherData: WeatherData;
};


export const weatherDisplayConfig = [
  {
    title: "Last Updated at (local time)",
    key: "last_updated",
    unit: ""
  },
  {
    title: "Temperature",
    key: "temp_c",
    unit: "degrees Celsius"
  },
  {
    title: "Humidity",
    key: "humidity",
    unit: "%"
  },
  {
    title: "Wind",
    key: "wind_kph",
    unit: "kph"
  }
  // Add more configurations as needed
];

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
