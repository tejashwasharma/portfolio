import { Accordion, Box, HStack, VStack, Text, Badge } from 'rendr-components';
import { Section } from '../ui/Section';
import { RichText } from '../ui/RichText';
import { experience } from '../../data/experience';

function BulletList({ bullets }) {
  return (
    <VStack spacing={2}>
      {bullets.map((bullet) => (
        <Text key={bullet} size="sm" lineHeight="relaxed" style={{ paddingLeft: 16, textIndent: -16 }}>
          <Text color="primary">→ </Text>
          <RichText text={bullet} />
        </Text>
      ))}
    </VStack>
  );
}

function Role({ role }) {
  return (
    <Accordion.Item value={role.company}>
      <Accordion.Button>
        <VStack spacing={0.5}>
          <Text weight="semibold">{role.company}</Text>
          <HStack spacing={2} wrap="wrap">
            <Text size="xs" color="textMuted">
              {role.location}
            </Text>
            <Text size="xs" color="textMuted">
              · {role.period}
            </Text>
          </HStack>
        </VStack>
      </Accordion.Button>
      <Accordion.Panel>
        <VStack spacing={4}>
          <VStack spacing={1}>
            {role.titles.map((entry) => (
              <Text key={entry.title} size="sm">
                <Text weight="semibold">{entry.title}</Text>
                <Text color="textMuted"> · {entry.period}</Text>
              </Text>
            ))}
          </VStack>

          {role.groups
            ? role.groups.map((group) => (
                <VStack key={group.heading} spacing={2}>
                  <Text weight="semibold" size="sm" color="primary">
                    {group.heading}
                  </Text>
                  <BulletList bullets={group.bullets} />
                </VStack>
              ))
            : role.bullets
              ? <BulletList bullets={role.bullets} />
              : null}

          {role.awards ? (
            <Box>
              <Text size="xs" color="textMuted" uppercase mb={1.5}>
                Recognition
              </Text>
              <VStack spacing={1.5}>
                {role.awards.map((award) => (
                  <Badge key={award} variant="subtle" colorScheme="primary" size="md" uppercase={false} alignSelf="flex-start">
                    {award}
                  </Badge>
                ))}
              </VStack>
            </Box>
          ) : null}
        </VStack>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="// experience.log" title="Experience">
      <Accordion variant="separated" defaultValue={experience[0]?.company}>
        {experience.map((role) => (
          <Role key={role.company} role={role} />
        ))}
      </Accordion>
    </Section>
  );
}
