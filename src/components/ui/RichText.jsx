import { Text } from 'rendr-components';

/**
 * Renders a string with `**bold**` spans as semibold inline `<Text>` nodes.
 * Meant to be used as the children of a surrounding <Text>.
 */
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <Text key={index} weight="semibold">
        {part.slice(2, -2)}
      </Text>
    ) : (
      part
    ),
  );
}
