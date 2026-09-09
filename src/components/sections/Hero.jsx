import avatar from '../../assets/images/profile.jpg';
import { profile, contactLinks, quickFacts } from '../../data/profile';
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton';
import styles from './Hero.module.css';

const HERO_LINKS = contactLinks.filter((link) =>
  ['email', 'linkedin', 'github', 'phone'].includes(link.label),
);

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <img
          className={styles.avatar}
          src={avatar}
          width="74"
          height="74"
          alt={`Portrait of ${profile.name}`}
        />
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.thesis}>{profile.thesis}</p>

        <div className={styles.cta}>
          <ResumeDownloadButton variant="prominent" />
        </div>

        <div className={styles.links}>
          {HERO_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label === 'phone' ? link.display : link.label}
            </a>
          ))}
        </div>
      </div>

      <aside className={styles.facts} aria-label="Quick facts">
        <span className={styles.factsCap}>// quick facts</span>
        <dl>
          {quickFacts.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
