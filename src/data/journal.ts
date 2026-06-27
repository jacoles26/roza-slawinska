/**
 * Lifestyle / Journal entries — the brand engine.
 * Rosie can add, edit or reorder these freely. Each `image` is a slug in
 * /public/images, each optional `video` is a slug in /public/video.
 */

export interface JournalEntry {
  id: string;
  kicker: string; // small category label
  title: string;
  blurb: string;
  image: string; // slug in /public/images
  video?: string; // optional slug in /public/video (autoplay loop)
}

export const journal: JournalEntry[] = [
  {
    id: "running",
    kicker: "Movement",
    title: "Miles before the day begins",
    blurb:
      "Running is the non-negotiable. It's where the head clears, the plans form, " +
      "and the discipline for everything else gets set. Coastlines are the reward.",
    image: "running-mountains",
    video: "forest-run",
  },
  {
    id: "travel",
    kicker: "Travel",
    title: "Collecting places, not things",
    blurb:
      "From the Riviera to quiet hill towns — travel is the syllabus. New light, " +
      "new streets, new ways of seeing. The camera comes everywhere.",
    image: "viewpoint",
    video: "village-walk",
  },
  {
    id: "culture",
    kicker: "Culture",
    title: "An eye trained on the beautiful",
    blurb:
      "Architecture, design, the way a city holds itself together. Culture is the " +
      "reference library that every shoot and every outfit borrows from.",
    image: "coffee-hat",
    video: "palace-kiss",
  },
  {
    id: "fitness",
    kicker: "Fitness",
    title: "Strong is the foundation",
    blurb:
      "The body is the instrument. Training, sea swims, long rides — staying fit " +
      "isn't vanity, it's the base layer that makes the rest of the life possible.",
    image: "sea-dive",
  },
  {
    id: "style",
    kicker: "Style",
    title: "Dress like you mean it",
    blurb:
      "Tailoring, neutrals, intention. Getting dressed well is a daily rehearsal " +
      "for showing up as the person you're becoming.",
    image: "editorial-garden",
  },
  {
    id: "optimising",
    kicker: "Philosophy",
    title: "1% better, on repeat",
    blurb:
      "Optimising the life — sleep, training, work, rest — not for perfection, but " +
      "for momentum. Small disciplines, compounded, become a signature.",
    image: "street-style",
  },
];
