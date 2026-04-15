import CTASection from "../components/ctasection";
import PageHero from "../components/pagehero";

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Local service. Clean results."
        text="Groundworks LV is built around straightforward communication, reliable work, and repeat service that keeps properties looking sharp."
      />

      <section className="section">
        <div className="container content">
          <h2>What customers can expect</h2>
          <p>
            Clear pricing. Clear scope. No clutter. The goal is simple: show up,
            do the work right, and build recurring customer relationships over time.
          </p>

          <h3>How the business operates</h3>
          <p>
            The company is structured around route density, repeat service,
            and practical exterior work that delivers visible value.
          </p>

          <h3>What this site will grow into</h3>
          <p>
            Service pages, local area pages, blog posts, and case studies will
            expand the site over time for SEO and trust-building.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default About;