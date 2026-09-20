import { Box, Text } from 'rendr-components';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box w="100%" py={5} px={4}>
      <Text align="center" size="xs" font="mono" color="textMuted">
        {`// built from the résumé repo — ${year}`}
      </Text>
    </Box>
  );
}
