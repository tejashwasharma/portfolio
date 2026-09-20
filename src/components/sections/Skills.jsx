import { VStack, HStack, Text, Badge } from 'rendr-components';
import { Section } from '../ui/Section';
import { skillGroups } from '../../data/skills';

export function Skills() {
  return (
    <Section id="skills" eyebrow="// skills.stack" title="Stack">
      <VStack spacing={5}>
        {skillGroups.map((group) => (
          <VStack key={group.title} spacing={2}>
            <Text weight="semibold" size="sm">
              {group.title}
            </Text>
            <HStack spacing={1.5} wrap="wrap">
              {group.items.map((item) => (
                <Badge key={item} variant="outline" colorScheme="neutral" size="md" rounded="full" uppercase={false}>
                  {item}
                </Badge>
              ))}
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Section>
  );
}
