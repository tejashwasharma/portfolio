import styles from './Section.module.css';

/**
 * A page band: a monospace "eyebrow" key in a sticky left rail and the section
 * body in the main column. Collapses to a single column below 820px.
 */
export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`${styles.section} ${className}`.trim()}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <div className={styles.body}>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
