export const getTheme = () => {
  // Safely check if running in a browser and retrieve the theme from localStorage
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'light'; // Default to light if not set
  }
  return 'light';
};

export const setTheme = (theme) => {
  if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme); // Set theme on <html>
    localStorage.setItem('theme', theme); // Save the theme in localStorage
  }
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme); // Toggle and set the new theme
};

export const initializeTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme); // Apply the saved theme or default to 'light'
  }
};
