import { Surface, Box, HStack, Text } from 'rendr-components';
import { navItems } from '../../data/navigation';
import { ResumeDownloadButton } from '../ui/ResumeDownloadButton';
import { ThemeToggle } from '../ui/ThemeToggle';

export function TopBar() {
  return (
    <Surface
      variant="sheet"
      rounded="none"
      shadow="sm"
      style={{ position: 'sticky', top: 0, zIndex: 20 }}
    >
      <Box
        direction="row"
        align="center"
        justify="space-between"
        gap={4}
        w="100%"
        maxW={1060}
        mx="auto"
        px={4}
        py={2.5}
      >
        <Text
          href="https://linkedin.com/in/tejashwasharma"
          hrefAttrs={{ target: '_blank', rel: 'noopener noreferrer' }}
          font="mono"
          weight="semibold"
          size="sm"
        >
          tejashwasharma
        </Text>

        <HStack
          accessibilityRole="navigation"
          accessibilityLabel="Section navigation"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
        >
          {navItems.map((item) => (
            <Text key={item.id} href={`#${item.id}`} size="sm" color="textMuted" font="mono">
              {item.label}
            </Text>
          ))}
        </HStack>

        <HStack spacing={2}>
          <Box display={{ base: 'none', sm: 'flex' }}>
            <ResumeDownloadButton variant="compact" />
          </Box>
          <ThemeToggle />
        </HStack>
      </Box>
    </Surface>
  );
}
