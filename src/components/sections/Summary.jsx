import { Section } from '../ui/Section';
import { RichText } from '../ui/RichText';
import { summary } from '../../data/profile';
import styles from './Summary.module.css';

export function Summary() {
  return (
    <Section id="summary" eyebrow="// identity.summary" title="What I do">
      <p>{summary.lead}</p>
      <ul className={styles.facets}>
        {summary.facets.map((facet) => (
          <li key={facet.title}>
            <b>{facet.title}</b> — <RichText text={facet.body} />
          </li>
        ))}
      </ul>
      <p>{summary.closing}</p>
    </Section>
  );
}
