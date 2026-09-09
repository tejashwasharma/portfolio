import { Section } from '../ui/Section';
import { skillGroups } from '../../data/skills';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section id="skills" eyebrow="// skills.stack" title="Stack">
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <div className={styles.chips}>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
