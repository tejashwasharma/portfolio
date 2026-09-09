import { Section } from '../ui/Section';
import { work } from '../../data/work';
import styles from './Work.module.css';

export function Work() {
  return (
    <Section id="work" eyebrow="// work.selected" title="Selected client work">
      <div className={styles.cards}>
        {work.map((item) => (
          <article key={item.name} className={styles.card}>
            <h3>{item.name}</h3>
            <p>{item.blurb}</p>
            <span className={styles.tag}>{item.tag}</span>
          </article>
        ))}
      </div>
    </Section>
  );
}
