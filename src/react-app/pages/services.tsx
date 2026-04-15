import { Link } from "react-router-dom";
import CTASection from "../components/ctasection";
import PageHero from "../components/pagehero";

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Core lawn and exterior services."
        text="Focused offerings built for recurring maintenance, cleanup, curb appeal, and straightforward quoting."
      />

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Lawn Care</h3>
            <p>
              Recurring mowing, weed eating, blow off cleanup, edging,
              and related maintenance work.
            </p>
            <div className="hero-actions">
              <Link className="button button-secondary" to="/services/lawn-care">
                View page
              </Link>
            </div>
          </div>

          <div className="card">
            <h3>Debris Removal</h3>
            <p>
              Fallen limb cleanup, haul-off, storm debris, and visible property
              cleanup work.
            </p>
            <div className="hero-actions">
              <Link className="button button-secondary" to="/services/debris-removal">
                View page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default Services;