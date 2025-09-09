import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Sync with current DOM state on mount
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const next = !dark;
    html.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300
                 bg-white text-gray-800 shadow transition
                 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
                 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        /* Sun icon */
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.464 6.464 5.05 5.05m12.9 0-1.414 1.414M6.464 17.536l-1.414 1.414" />
        </svg>
      ) : (
        /* Moon icon */
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
