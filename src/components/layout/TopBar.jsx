import { navItems } from '../../data/navigation';
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton';
import { ThemeToggle } from '../ui/ThemeToggle';
import styles from './TopBar.module.css';

export function TopBar() {
  return (
    <header className={styles.bar}>
      <a
        className={styles.brand}
        href="https://linkedin.com/in/tejashwasharma"
        target="_blank"
        rel="noopener noreferrer"
      >
        tejashwasharma
      </a>

      <nav className={styles.nav} aria-label="Section navigation">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <ResumeDownloadButton variant="compact" />
        <ThemeToggle />
      </div>
    </header>
  );
}
