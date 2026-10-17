export type Theme = "light" | "dark" | "system";

const THEME_KEY = "theme";

// Save theme
export function saveTheme(theme: Theme): void {
  localStorage.setItem(THEME_KEY, theme);
}

// Read theme
export function getTheme(): Theme {
  const theme = localStorage.getItem(THEME_KEY);

  if (
    theme === "light" ||
    theme === "dark" ||
    theme === "system"
  ) {
    return theme;
  }

  return "system";
}

// Remove saved theme
export function removeTheme(): void {
  localStorage.removeItem(THEME_KEY);
}