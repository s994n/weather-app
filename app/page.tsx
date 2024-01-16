import Image from "next/image";
import styles from "./page.module.css";

import { SearchCityCurrentWeather } from "@components/organisms";

import { StyledHeader } from "@components/atoms";

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
