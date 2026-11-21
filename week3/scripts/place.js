document.getElementById("currentyear").textContent =
  `© ${new Date().getFullYear()} Richmond Amankwah-Ghana`;

document.getElementById("lastModified").textContent =
  `Last modified: ${document.lastModified}`;

const temperature = 8;
const windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
  let chill = 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16));
  return chill.toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
  document.getElementById("windchill").textContent =
    `Wind Chill: ${calculateWindChill(temperature, windSpeed)} °C`;
}