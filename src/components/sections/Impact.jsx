import { Section } from '../ui/Section';
import { metrics } from '../../data/metrics';
import styles from './Impact.module.css';

export function Impact() {
  return (
    <Section id="impact" eyebrow="// impact.metrics" title="Numbers I’ve moved">
      <ul className={styles.metrics}>
        {metrics.map((metric) => (
          <li key={metric.label}>
            <span className={styles.key}>{metric.label}</span>
            <span className={styles.value}>
              {metric.prefix ? `${metric.prefix} ` : null}
              <b>{metric.emphasis}</b>
              {metric.suffix ? ` ${metric.suffix}` : null}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
