import aura from '../../assets/images/aura.jpg';
import { contactLinks, profile } from '../../data/profile';
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton';
import styles from './Contact.module.css';

const FOOTER_LINKS = contactLinks.filter((link) => link.label !== 'email');

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      {/* Full, uncropped summit-pose photo at the section's full width. */}
      <img className={styles.photo} src={aura} alt="" aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.body}>
        <span className={styles.eyebrow}>// access.request</span>
        <h2 className={styles.title}>Get in touch</h2>
        <p className={styles.lead}>
          Open to senior software engineering, technical architect, and technical manager
          roles — backend, platform, and identity.
        </p>

        <div className={styles.actions}>
          <a className={styles.email} href="mailto:tejsharma407@gmail.com">
            tejsharma407@gmail.com
          </a>
          <ResumeDownloadButton variant="prominent" tone="hollow" />
        </div>

        <div className={styles.links}>
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.display}
            </a>
          ))}
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
