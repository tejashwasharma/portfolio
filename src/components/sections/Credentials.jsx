import { Grid, VStack, Text } from 'rendr-components';
import { Section } from '../ui/Section';
import { education, certifications } from '../../data/credentials';

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="// credentials" title="Education & certifications">
      <Grid columns={{ base: 1, sm: 2 }} gap={5}>
        <VStack spacing={1.5} align="flex-start">
          <Text weight="semibold" size="sm">
            Education
          </Text>
          <Text size="sm">
            {education.school} — {education.degree}
          </Text>
          <Text size="xs" color="textMuted">
            {education.detail}
          </Text>
        </VStack>

        <VStack spacing={1.5} align="flex-start">
          <Text weight="semibold" size="sm">
            Certifications
          </Text>
          {certifications.map((cert) => (
            <Text key={cert.name} size="sm">
              {cert.name} <Text color="textMuted">({cert.year})</Text>
            </Text>
          ))}
        </VStack>
      </Grid>
    </Section>
  );
}
