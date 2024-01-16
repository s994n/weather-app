// Components
import { SearchCityCurrentWeather } from "@components/organisms";
import { StyledHeader } from "@components/atoms";

// Styles
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <StyledHeader variant="hero" caps>
        Weather App
      </StyledHeader>
      <SearchCityCurrentWeather />
    </main>
  );
}
