import PageHeader from "@/components/ui/PageHeader";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Projects — A small, deliberate catalogue",
  description:
    "Every Riddhi Siddhi address is built one at a time. Explore our delivered, ongoing and forthcoming residences across Nagpur.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The portfolio"
        title="Eight addresses. Each"
        highlight="hand-drawn."
        body="From a quiet boutique tower in Civil Lines to a single-residence-per-floor address in Shankar Nagar — each project below has had our full attention for years."
      />
      <ProjectsGrid heading={false} />
      <CTA />
    </>
  );
}
