import CTASection from "../components/ctasection";
import PageHero from "../components/pagehero";

function LeavenworthLawnCare() {
  return (
    <>
      <PageHero
        eyebrow="Location Page"
        title="Lawn care in Leavenworth"
        text="Recurring mowing, cleanup, and straightforward property maintenance for Leavenworth-area customers."
      />

      <section className="section">
        <div className="container content">
          <h2>Local service focus</h2>
          <p>
            This page targets Leavenworth-specific search traffic and will be
            expanded with service details, photos, and local proof over time.
          </p>

          <h3>What belongs here later</h3>
          <ul>
            <li>Neighborhood references</li>
            <li>Before-and-after examples</li>
            <li>Local FAQs</li>
            <li>Internal links to service pages</li>
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default LeavenworthLawnCare;