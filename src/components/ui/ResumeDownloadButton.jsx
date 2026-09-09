import { profile } from '../../data/profile';
import styles from './ResumeDownloadButton.module.css';

function DownloadIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 12 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

/**
 * Résumé download CTA.
 *  - `variant`: 'compact' (top bar) | 'prominent' (hero / large CTA)
 *  - `tone`:    'solid'   (accent-filled, pulsing halo — the default)
 *               'hollow'  (outlined, fills with accent on hover — used on the
 *                          contact section over the photo)
 */
export function ResumeDownloadButton({ variant = 'compact', tone = 'solid' }) {
  return (
    <a
      className={`${styles.button} ${styles[variant]} ${styles[tone]}`}
      href={profile.resumeFile}
      download={profile.resumeDownloadName}
    >
      {tone === 'solid' && <span className={styles.pulse} aria-hidden="true" />}
      <DownloadIcon />
      <span>Download résumé</span>
    </a>
  );
}
