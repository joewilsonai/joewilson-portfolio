// Press — third-party validation.
//
// SLOT. Empty by design. Section renders nothing when this array is empty —
// no embarrassing "as seen in: nobody yet". When a press hit lands, push an entry
// and the section appears.
//
// Example entry once you have one:
//   {
//     outlet: "Lenny's Newsletter",
//     logo: "/press/lennys.svg",
//     headline: "The solo operator running CS at team scale",
//     url: "https://lennysnewsletter.com/...",
//     date: "2026-07-15",
//   }

export type PressItem = {
  outlet: string;
  logo?: string;
  headline?: string;
  url: string;
  date: string; // ISO
};

export const press: PressItem[] = [
  // Empty until the first feature lands.
];
