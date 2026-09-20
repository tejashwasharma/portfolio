import { Box, VStack, Text } from 'rendr-components';
import { Section } from '../ui/Section';
import aura from '../../assets/images/aura.jpg';
import { contactLinks, profile } from '../../data/profile';
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton';

const FOOTER_LINKS = contactLinks.filter((link) => link.label !== 'email' && link.label !== 'instagram');
const emailLink = contactLinks.find((link) => link.label === 'email');

// Fixed (theme-independent) colors — this card is a photo overlay, not a
// themed surface, so it always reads as a dark-scrim-on-photo panel with
// white text and a drop shadow, regardless of light/dark mode.
const shadow = { textShadow: '0 1px 5px rgba(0, 0, 0, 0.6)' };

export function Contact() {
  return (
    <Section id="contact" eyebrow="// access.request" title="Get in touch">
      <Box position="relative" rounded="lg" shadow="sm" overflow="hidden" style={{ maxWidth: 480 }}>
        <Box
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${aura})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        />
        <Box
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(160deg, rgba(10,12,13,0.88) 0%, rgba(10,12,13,0.62) 45%, rgba(10,12,13,0.78) 100%)',
          }}
        />

        <Box position="relative" p={5}>
          <Text size="sm" lineHeight="relaxed" mb={5} style={{ ...shadow, color: '#e4e0d6' }}>
            Open to remote work and relocation — always happy to talk backend, platform, and identity engineering.
          </Text>

          <VStack spacing={3} align="flex-start" mb={5}>
            <Text href={emailLink.href} weight="semibold" style={{ ...shadow, color: '#ffffff' }}>
              {emailLink.display}
            </Text>
            <ResumeDownloadButton variant="compact" tone="hollow" />
          </VStack>

          <VStack spacing={1.5} align="flex-start">
            {FOOTER_LINKS.map((link) => (
              <Text
                key={link.label}
                href={link.href}
                hrefAttrs={link.external ? { target: '_blank', rel: 'noopener noreferrer' } : undefined}
                size="sm"
                font="mono"
                style={{ ...shadow, color: '#ece8de' }}
              >
                {link.display}
              </Text>
            ))}
            <Text size="sm" font="mono" style={{ ...shadow, color: '#ece8de' }}>
              {profile.location}
            </Text>
          </VStack>
        </Box>
      </Box>
    </Section>
  );
}
