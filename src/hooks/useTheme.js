import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';
const VALID = ['light', 'dark'];

/** Read a persisted explicit theme choice, tolerating unavailable storage. */
function readStoredTheme() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return VALID.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function systemPrefersDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Theme controller for the three-state model:
 *  - `null` stored  => follow the OS (no data-theme attribute)
 *  - 'light'/'dark'  => explicit override (data-theme attribute set)
 *
 * Returns the *effective* theme plus a toggle that always flips to the
 * opposite of what the viewer currently sees.
 */
export function useTheme() {
  const [override, setOverride] = useState(readStoredTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (override) {
      root.setAttribute('data-theme', override);
    } else {
      root.removeAttribute('data-theme');
    }

    try {
      if (override) {
        window.localStorage.setItem(STORAGE_KEY, override);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      /* storage unavailable — the in-memory state still drives the UI */
    }
  }, [override]);

  const effectiveTheme = override ?? (systemPrefersDark() ? 'dark' : 'light');

  const toggleTheme = useCallback(() => {
    setOverride((current) => {
      const seen = current ?? (systemPrefersDark() ? 'dark' : 'light');
      return seen === 'dark' ? 'light' : 'dark';
    });
  }, []);

  return { theme: effectiveTheme, toggleTheme };
}
