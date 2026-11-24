// Renders text where **wrapped** fragments become highlighted metrics.
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="metric">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
