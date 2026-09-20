import { Box, Card, VStack, HStack, Heading, Text } from 'rendr-components';
import aura from '../../assets/images/aura.jpg';
import { contactLinks, profile } from '../../data/profile';
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton';

const FOOTER_LINKS = contactLinks.filter((link) => link.label !== 'email' && link.label !== 'instagram');
const emailLink = contactLinks.find((link) => link.label === 'email');

// Fixed (theme-independent) colors — this is a photo overlay, not a themed
// card, so it always reads as a dark-scrim-on-photo panel with white text
// and a drop shadow, regardless of light/dark mode.
const shadow = { textShadow: '0 1px 5px rgba(0, 0, 0, 0.6)' };

export function Contact() {
  return (
    <Box id="contact" position="relative" w="100%" minH={630} overflow="hidden" mt={{ base: 8, md: 12 }}>
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
            'linear-gradient(to bottom, rgba(10,12,13,0.9) 0%, rgba(10,12,13,0.6) 24%, rgba(10,12,13,0.36) 46%, rgba(10,12,13,0.3) 70%, rgba(10,12,13,0.68) 100%)',
        }}
      />

      <Box position="relative" w="100%" maxW={1060} mx="auto" px={4} pt={{ base: 8, md: 12 }} pb={{ base: 6, md: 8 }}>
        <Card variant="elevated" padding={5} style={{ maxWidth: 480 }}>
          <Text font="mono" size="xs" uppercase mb={2} style={{ ...shadow, color: '#9bd9c7' }}>
            {'// access.request'}
          </Text>
          <Heading level={2} mb={3} style={{ ...shadow, color: '#ffffff' }}>
            Get in touch
          </Heading>
          <Text size="sm" lineHeight="relaxed" mb={5} style={{ ...shadow, color: '#e4e0d6' }}>
            Open to remote work and relocation — always happy to talk backend, platform, and identity engineering.
          </Text>

          <HStack spacing={3} wrap="wrap" mb={5}>
            <Text href={emailLink.href} weight="semibold" style={{ ...shadow, color: '#ffffff' }}>
              {emailLink.display}
            </Text>
            <ResumeDownloadButton variant="compact" tone="hollow" />
          </HStack>

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
        </Card>
      </Box>
    </Box>
  );
}
