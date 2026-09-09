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

export default function App() {
  return (
    <>
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
    </>
  );
}
