// Speaking & Teaching — slot.
//
// Goal: AI Builders Circle eventually becomes content engine. Workshops, podcast
// appearances, conference talks all live here once they exist. Until then the
// section stays hidden.

export type SpeakingItem = {
  title: string;
  venue: string;
  year: number;
  url?: string;        // slides, recording, or event link
  description?: string;
};

export const speaking: SpeakingItem[] = [
  // Empty. Will populate as talks happen.
];
