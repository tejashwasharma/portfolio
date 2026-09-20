import { Box, Text, Heading } from 'rendr-components';

/**
 * A page band: a small monospace eyebrow, an optional heading, and the
 * section body — centered in the page's reading column.
 */
export function Section({ id, eyebrow, title, children }) {
  return (
    <Box id={id} w="100%" maxW={840} mx="auto" px={4} py={{ base: 8, md: 12 }}>
      {eyebrow ? (
        <Text font="mono" size="sm" color="textMuted" uppercase letterSpacing={0.5} mb={2}>
          {eyebrow}
        </Text>
      ) : null}
      {title ? (
        <Heading level={2} mb={5}>
          {title}
        </Heading>
      ) : null}
      {children}
    </Box>
  );
}
