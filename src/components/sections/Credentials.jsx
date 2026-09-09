import { Section } from '../ui/Section';
import { education, certifications } from '../../data/credentials';
import styles from './Credentials.module.css';

export function Credentials() {
  return (
    <Section
      id="credentials"
      eyebrow="// credentials"
      title="Education & certifications"
    >
      <div className={styles.grid}>
        <div>
          <h3>Education</h3>
          <p>
            {education.school} — {education.degree}
          </p>
          <p className={styles.sub}>{education.detail}</p>
        </div>
        <div>
          <h3>Certifications</h3>
          {certifications.map((cert) => (
            <p key={cert.name}>
              {cert.name} <span className={styles.sub}>({cert.year})</span>
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
