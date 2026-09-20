import { Grid, Surface, Text } from 'rendr-components';
import { Section } from '../ui/Section';
import { metrics } from '../../data/metrics';

export function Impact() {
  return (
    <Section id="impact" eyebrow="// impact.metrics" title="Numbers I’ve moved">
      <Grid columns={{ base: 1, sm: 2, lg: 3 }} gap={3}>
        {metrics.map((metric) => (
          <Surface key={metric.label} variant="sheet" rounded="lg" shadow="sm" p={4}>
            <Text size="xs" color="textMuted" uppercase mb={1.5}>
              {metric.label}
            </Text>
            <Text size="lg" weight="bold" color="primary">
              {metric.prefix ? `${metric.prefix} ` : null}
              {metric.emphasis}
            </Text>
            {metric.suffix ? (
              <Text size="xs" color="textMuted">
                {metric.suffix}
              </Text>
            ) : null}
          </Surface>
        ))}
      </Grid>
    </Section>
  );
}
