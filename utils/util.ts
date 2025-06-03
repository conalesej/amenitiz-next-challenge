/**
 * Convert a UNIX timestamp (in seconds) to "Month Day, Year at HH:MM:SS AM/PM"
 * Example: 1714444126 → "April 29, 2025 at 09:28:46 PM"
 *
 * @param {number} unixSeconds
 * @returns {string}
 */
export function formatTimestamp(unixSeconds: number): string {
  const date = new Date(unixSeconds * 1000);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  if (hours === 0) hours = 12;
  const hourString = String(hours).padStart(2, "0");

  return `${monthName} ${day}, ${year} at ${hourString}:${minutes}:${seconds} ${ampm}`;
}

/**
 * Returns the full country name for a given ISO 3166-1 alpha-2 country code.
 * Uses the Intl.DisplayNames API.
 *
 * @param {string} countryCode - Two-letter country code (e.g., "US", "IN", "GB").
 * @returns {string} - Full country name (e.g., "United States", "India", "United Kingdom").
 */
export function getCountryName(countryCode: string): string {
  if (!countryCode || typeof countryCode !== "string") {
    return "";
  }

  // Ensure uppercase
  const code = countryCode.toUpperCase();

  // Intl.DisplayNames is supported in modern environments
  if (typeof Intl !== "undefined" && Intl.DisplayNames) {
    try {
      const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
      return regionNames.of(code) || code;
    } catch {
      // Fallback to returning the code itself if Intl fails
      return code;
    }
  }

  // Fallback: return the code if Intl.DisplayNames isn't available
  return code;
}

/**
 * Extracts the last non-empty segment of a URL or path string.
 *
 * @param {string} str - The URL or path (e.g., "https://…/member/username").
 * @returns {string} - The last segment (e.g., "username").
 */
export function getIdentifier(str: string): string {
  if (typeof str !== "string") return "";
  // Split on "/" and filter out empty segments (handles trailing slash)
  const parts = str.split("/").filter((segment) => segment.length > 0);
  return parts.length ? parts[parts.length - 1] : "";
}
