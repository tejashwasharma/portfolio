import { Button } from 'rendr-components';
import { profile } from '../../data/profile';

/**
 * Résumé download CTA.
 *  - `variant`: 'compact' (top bar / inline) | 'prominent' (hero, larger)
 *  - `tone`:    'solid' (accent-filled, default) | 'hollow' (outlined —
 *               used on the contact section over the photo)
 */
export function ResumeDownloadButton({ variant = 'compact', tone = 'solid' }) {
  return (
    <Button
      href={profile.resumeFile}
      hrefAttrs={{ download: profile.resumeDownloadName }}
      variant={tone === 'hollow' ? 'outline' : 'solid'}
      size={variant === 'prominent' ? 'lg' : 'sm'}
      rounded="full"
      // 'hollow' is only used over the Contact section's photo — fixed white,
      // independent of light/dark theme, same as the rest of that overlay.
      style={tone === 'hollow' ? { backgroundColor: 'transparent', borderColor: '#ffffff' } : undefined}
      textStyle={tone === 'hollow' ? { color: '#ffffff' } : undefined}
    >
      Download résumé
    </Button>
  );
}
