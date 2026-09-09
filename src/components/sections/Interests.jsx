import { Section } from '../ui/Section';
import { interests, instagram } from '../../data/interests';
import styles from './Interests.module.css';

export function Interests() {
  return (
    <Section id="interests" eyebrow="// off-the-clock" title="Off the clock">
      <div className={styles.grid}>
        {interests.map((interest) => (
          <div key={interest.title}>
            <h3>{interest.title}</h3>
            <p>
              {interest.body}
              {interest.link ? (
                <>
                  {' '}
                  Work lives at{' '}
                  <a href={interest.link.href} target="_blank" rel="noopener noreferrer">
                    {interest.link.label}
                  </a>
                  .
                </>
              ) : null}
            </p>
          </div>
        ))}
      </div>

      <a
        className={styles.igLink}
        href={instagram.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram · {instagram.handle} ↗
      </a>
    </Section>
  );
}
