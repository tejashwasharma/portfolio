import { Button, useColorMode } from 'rendr-components';

export function ThemeToggle() {
  const { mode, toggle } = useColorMode();
  const next = mode === 'dark' ? 'light' : 'dark';

  return (
    <Button
      variant="outline"
      colorScheme="neutral"
      size="sm"
      rounded="full"
      onPress={toggle}
      accessibilityLabel={`Switch to ${next} theme`}
    >
      {next === 'light' ? '☀️' : '🌙'}
    </Button>
  );
}
