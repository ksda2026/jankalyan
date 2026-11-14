export const serifAccent = "font-serif font-normal italic tracking-normal";

type HighlightTextProps = {
  text: string;
  highlight?: string;
  className?: string;
};

export function HighlightText({ text, highlight, className }: HighlightTextProps) {
  const index = highlight ? text.indexOf(highlight) : -1;

  if (!highlight || index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className={className}>{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}
