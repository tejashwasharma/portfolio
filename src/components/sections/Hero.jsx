import { Box, VStack, HStack, Heading, Text, Avatar, Surface } from 'rendr-components';
import avatar from '../../assets/images/profile.jpg';
import { profile, contactLinks, quickFacts } from '../../data/profile';
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton';

const HERO_LINKS = contactLinks.filter((link) => ['email', 'linkedin', 'github', 'phone'].includes(link.label));

export function Hero() {
  return (
    <Box
      direction={{ base: 'column', lg: 'row' }}
      align={{ base: 'stretch', lg: 'flex-start' }}
      gap={8}
      w="100%"
      maxW={1060}
      mx="auto"
      px={4}
      pt={{ base: 10, md: 16 }}
      pb={{ base: 8, md: 12 }}
    >
      <VStack spacing={4} flex={1}>
        <Avatar src={avatar} name={profile.name} size="xl" />
        <Heading level={1}>{profile.name}</Heading>
        <Text size="lg" color="textMuted" weight="medium">
          {profile.role}
        </Text>
        <Text size="md" maxW={520}>
          {profile.thesis}
        </Text>

        <Box pt={2}>
          <ResumeDownloadButton variant="prominent" />
        </Box>

        <HStack spacing={4} wrap="wrap" pt={2}>
          {HERO_LINKS.map((link) => (
            <Text
              key={link.label}
              href={link.href}
              hrefAttrs={link.external ? { target: '_blank', rel: 'noopener noreferrer' } : undefined}
              font="mono"
              size="sm"
              color="primary"
            >
              {link.label === 'phone' ? link.display : link.label}
            </Text>
          ))}
        </HStack>
      </VStack>

      <Surface
        accessibilityRole="complementary"
        accessibilityLabel="Quick facts"
        variant="sheet"
        rounded="lg"
        shadow="md"
        p={5}
        w={{ base: '100%', lg: 320 }}
      >
        <Text font="mono" size="xs" color="textMuted" uppercase mb={3}>
          {'// quick facts'}
        </Text>
        <VStack spacing={3}>
          {quickFacts.map((fact) => (
            <Box key={fact.term}>
              <Text size="xs" color="textMuted" uppercase>
                {fact.term}
              </Text>
              <Text size="sm" weight="medium">
                {fact.value}
              </Text>
            </Box>
          ))}
        </VStack>
      </Surface>
    </Box>
  );
}
