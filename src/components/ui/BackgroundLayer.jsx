import { useEffect } from 'react';
import massif from '../../assets/images/massif.jpg';

/**
 * Renders the fixed, page-wide mountain backdrop. Kept as a real element (not a
 * body pseudo-element) so the bundler can fingerprint the image URL.
 */
export function BackgroundLayer() {
  useEffect(() => {
    // Nudge the browser to decode the backdrop image early.
    const img = new Image();
    img.src = massif;
  }, []);

  return (
    <div
      className="app-backdrop"
      style={{ backgroundImage: `url(${massif})` }}
      aria-hidden="true"
    />
  );
}
