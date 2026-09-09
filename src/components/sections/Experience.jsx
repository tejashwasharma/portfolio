import { Section } from '../ui/Section';
import { RichText } from '../ui/RichText';
import { experience } from '../../data/experience';
import styles from './Experience.module.css';

function BulletList({ bullets }) {
  return (
    <ul className={styles.bullets}>
      {bullets.map((bullet) => (
        <li key={bullet}>
          <RichText text={bullet} />
        </li>
      ))}
    </ul>
  );
}

function Role({ role }) {
  return (
    <article className={styles.role}>
      <header className={styles.head}>
        <span className={styles.company}>{role.company}</span>
        <span className={styles.location}>{role.location}</span>
        <span className={styles.period}>{role.period}</span>
      </header>

      <div className={styles.titles}>
        {role.titles.map((entry) => (
          <span key={entry.title}>
            <b>{entry.title}</b> · {entry.period}
          </span>
        ))}
      </div>

      {role.groups
        ? role.groups.map((group) => (
            <div key={group.heading}>
              <h4 className={styles.groupHeading}>{group.heading}</h4>
              <BulletList bullets={group.bullets} />
            </div>
          ))
        : <BulletList bullets={role.bullets} />}

      {role.awards ? (
        <ul className={styles.awards}>
          {role.awards.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="// experience.log" title="Experience">
      {experience.map((role) => (
        <Role key={role.company} role={role} />
      ))}
    </Section>
  );
}
