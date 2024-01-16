// Components
import { StyledHeader } from "@/components/atoms";

// Styles
import styles from "./styles.module.scss";

export interface WeatherInfoItemProps {
  key: string
  title: string;
  value: string | number;
  unit?: string;
}

export const WeatherInfoItem = ({ title, value, unit }: WeatherInfoItemProps) => {
  return (
    <section className={styles["weather-info-item"]} aria-labelledby="weather-info-title">
      <StyledHeader variant="subheader" id="weather-info-title">
        {title}: {value} {unit}
      </StyledHeader>
    </section>
  );
};
