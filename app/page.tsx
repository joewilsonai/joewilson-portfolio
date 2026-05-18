// The page is just a composition of sections. Reorder freely.
//
// Sections that depend on data slots (Press, Speaking, Certifications) render
// themselves as null when their data arrays are empty — so the site never
// embarrasses itself with "Coming Soon" headers. As proof artifacts land,
// the sections materialize automatically.

import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { Press } from "@/components/sections/press";
import { Manifesto } from "@/components/sections/manifesto";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Speaking } from "@/components/sections/speaking";
import { Certifications } from "@/components/sections/certifications";
import { Stack } from "@/components/sections/stack";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Press />
        <Manifesto />
        <Experience />
        <Projects />
        <Certifications />
        <Speaking />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
