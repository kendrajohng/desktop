"use client";

import { useEffect, useState } from "react";

const LOCATION_LABEL = "Salt Lake City";
const LATITUDE = 40.7608;
const LONGITUDE = -111.891;

const WEATHER_ICONS: Record<number, string> = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  61: "🌧️",
  71: "🌨️",
  80: "🌦️",
  95: "⛈️",
};

export function Weather() {
  const [temp, setTemp] = useState<number | null>(null);
  const [icon, setIcon] = useState("🌤️");

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto`,
      { signal: controller.signal },
    )
      .then((res) => res.json())
      .then((data) => {
        const current = data?.current;
        if (typeof current?.temperature_2m === "number") {
          setTemp(Math.round(current.temperature_2m));
        }
        if (typeof current?.weather_code === "number") {
          setIcon(WEATHER_ICONS[current.weather_code] ?? "🌤️");
        }
      })
      .catch(() => {
        // Keep the placeholder state on network/CORS failure.
      });

    return () => controller.abort();
  }, []);

  return (
    <span className="flex items-center gap-1.5 font-heading text-sm font-medium">
      <span aria-hidden>{icon}</span>
      <span>{temp !== null ? `${temp}°` : "—°"}</span>
      <span className="hidden sm:inline">{LOCATION_LABEL}</span>
    </span>
  );
}
