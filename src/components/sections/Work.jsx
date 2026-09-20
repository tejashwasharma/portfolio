import { Grid, Card, VStack, Text, Badge } from 'rendr-components';
import { Section } from '../ui/Section';
import { work } from '../../data/work';

export function Work() {
  return (
    <Section id="work" eyebrow="// work.selected" title="Selected client work">
      <Grid columns={{ base: 1, md: 2 }} gap={3}>
        {work.map((item) => (
          <Card key={item.name} variant="elevated" padding={4}>
            <VStack spacing={2} align="flex-start">
              <Text weight="semibold" size="md">
                {item.name}
              </Text>
              <Text size="sm" color="textMuted" lineHeight="relaxed">
                {item.blurb}
              </Text>
              <Badge variant="subtle" colorScheme="primary" size="sm">
                {item.tag}
              </Badge>
            </VStack>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
