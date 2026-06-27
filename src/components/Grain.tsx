/** Fixed, pointer-events-none film-grain overlay for a physical, paper-like feel. */
export default function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.045] mix-blend-multiply grain-overlay"
    />
  );
}
