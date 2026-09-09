/**
 * Renders a string with `**bold**` spans, without dangerouslySetInnerHTML.
 * Used for résumé bullets where a few phrases carry emphasis.
 */
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}
