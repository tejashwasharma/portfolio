import { useEffect } from 'react';
import { Box, useColorMode } from 'rendr-components';
import massif from '../../assets/images/massif.jpg';

/**
 * Fixed, page-wide mountain backdrop the glass UI shows through. A
 * theme-aware scrim keeps body copy readable over it.
 */
export function BackgroundLayer() {
  const { mode } = useColorMode();

  useEffect(() => {
    // Nudge the browser to decode the backdrop image early.
    const img = new Image();
    img.src = massif;
  }, []);

  return (
    <>
      <div className="app-backdrop" style={{ backgroundImage: `url(${massif})` }} aria-hidden="true" />
      <Box
        aria-hidden="true"
        position="absolute"
        style={{ position: 'fixed', inset: 0, zIndex: -1 }}
        bg="bg"
        opacity={mode === 'dark' ? 0.89 : 0.85}
      />
    </>
  );
}
