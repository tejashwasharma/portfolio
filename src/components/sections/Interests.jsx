import { Box, Grid, Card, VStack, Text } from 'rendr-components';
import { Section } from '../ui/Section';
import { interests, instagram } from '../../data/interests';

export function Interests() {
  return (
    <Section id="interests" eyebrow="// off-the-clock" title="Off the clock">
      <Grid columns={{ base: 1, sm: 2 }} gap={3}>
        {interests.map((interest) => (
          <Card key={interest.title} variant="outline" padding={4}>
            <VStack spacing={1.5} align="flex-start">
              <Text weight="semibold" size="sm">
                {interest.title}
              </Text>
              <Text size="sm" color="textMuted" lineHeight="relaxed">
                {interest.body}
                {interest.link ? (
                  <>
                    {' '}
                    Work lives at{' '}
                    <Text href={interest.link.href} hrefAttrs={{ target: '_blank', rel: 'noopener noreferrer' }} color="primary">
                      {interest.link.label}
                    </Text>
                    .
                  </>
                ) : null}
              </Text>
            </VStack>
          </Card>
        ))}
      </Grid>

      <Box mt={4}>
        <Text
          href={instagram.href}
          hrefAttrs={{ target: '_blank', rel: 'noopener noreferrer' }}
          font="mono"
          size="sm"
          color="primary"
        >
          Instagram · {instagram.handle} ↗
        </Text>
      </Box>
    </Section>
  );
}
