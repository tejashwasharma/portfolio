import { VStack, Text } from 'rendr-components';
import { Section } from '../ui/Section';
import { RichText } from '../ui/RichText';
import { summary } from '../../data/profile';

export function Summary() {
  return (
    <Section id="summary" eyebrow="// identity.summary" title="What I do">
      <VStack spacing={4}>
        <Text size="md" lineHeight="relaxed">
          {summary.lead}
        </Text>
        <VStack spacing={2.5}>
          {summary.facets.map((facet) => (
            <Text key={facet.title} size="sm" lineHeight="relaxed">
              <Text weight="semibold">{facet.title}</Text> — <RichText text={facet.body} />
            </Text>
          ))}
        </VStack>
        <Text size="md" lineHeight="relaxed">
          {summary.closing}
        </Text>
      </VStack>
    </Section>
  );
}
