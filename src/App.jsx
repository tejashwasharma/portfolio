import { useState } from 'react';
import { ThemeProvider, ToastProvider } from 'rendr-components';
import { theme, darkOverrides } from './theme';
import { BackgroundLayer } from './components/ui/BackgroundLayer';
import { TopBar } from './components/layout/TopBar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Impact } from './components/sections/Impact';
import { Summary } from './components/sections/Summary';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Work } from './components/sections/Work';
import { Interests } from './components/sections/Interests';
import { Credentials } from './components/sections/Credentials';
import { Contact } from './components/sections/Contact';

const STORAGE_KEY = 'portfolio-theme-mode';

function readStoredMode() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : 'dark';
  } catch {
    return 'dark';
  }
}

function persistMode(mode) {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* storage unavailable — the in-memory state still drives the UI */
  }
}

export default function App() {
  const [mode, setMode] = useState(readStoredMode);

  const handleModeChange = (next) => {
    setMode(next);
    persistMode(next);
  };

  return (
    <ThemeProvider theme={theme} darkTheme={darkOverrides} colorMode={mode} onModeChange={handleModeChange}>
      <ToastProvider>
        <BackgroundLayer />
        <TopBar />
        <main>
          <Hero />
          <Impact />
          <Summary />
          <Experience />
          <Skills />
          <Work />
          <Interests />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </ToastProvider>
    </ThemeProvider>
  );
}
