"use server";

import { redirect } from "next/navigation";

export async function searchCityCurrentWeather(formData: FormData) {
  // TODO Implement error handling
  const location = formData.get("location");

  if (!location || typeof location !== "string" || location.trim() === "") {
    throw new Error("Location is required");
  }

  redirect(`/current-weather/city/${location}`);
}
