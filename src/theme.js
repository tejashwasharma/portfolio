/**
 * Brand theme overrides, passed straight to <ThemeProvider theme={...}>.
 *
 * Deliberately NOT built with `createTheme()` — that deep-merges onto the
 * full default *light* theme and returns a complete theme object. Passing a
 * complete object (rather than a sparse partial) as ThemeProvider's shared
 * `theme` prop clobbers dark mode's semantic colors (text, textMuted, …)
 * with light-theme values, since ThemeProvider merges the same `theme` prop
 * onto both its light and dark bases. Keeping this a plain partial object
 * means only the keys listed here ever override either mode.
 */
export const theme = {
  colors: {
    palette: {
      primary: {
        50: '#e9f3f0',
        100: '#cfe6de',
        200: '#a4cec0',
        300: '#78b6a1',
        400: '#4a9c82',
        500: '#1f6f5c',
        600: '#195c4c',
        700: '#14493c',
        800: '#0f362c',
        900: '#0a241d',
      },
    },
    // Only bg/surface — read as light mode's values (this `theme` prop
    // applies to both modes, but `darkOverrides` below redefines both keys
    // again for dark, taking precedence there).
    semantic: {
      bg: '#f3f1ec',
      surface: '#faf9f6',
    },
  },
  fonts: {
    body: "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
    heading: "'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace",
  },
};

/** Dark-mode-only overrides, passed as <ThemeProvider darkTheme={...}>. */
export const darkOverrides = {
  colors: {
    palette: {
      primary: {
        50: '#0e241f',
        100: '#123830',
        200: '#184e42',
        300: '#226958',
        400: '#358a71',
        500: '#57bd9f',
        600: '#7ecdb5',
        700: '#a5ddcb',
        800: '#c9ece0',
        900: '#e6f6f0',
      },
    },
    semantic: {
      bg: '#141618',
      surface: '#1c1f21',
    },
  },
};
