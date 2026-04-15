import CTASection from "../components/ctasection";
import PageHero from "../components/pagehero";

function DebrisRemoval() {
  return (
    <>
      <PageHero
        eyebrow="Service Page"
        title="Debris removal and haul-off"
        text="Fallen limbs, brush piles, storm cleanup, and visible property debris removal."
      />

      <section className="section">
        <div className="container content">
          <h2>Common debris jobs</h2>
          <ul>
            <li>Fallen branch cleanup</li>
            <li>Brush pile removal</li>
            <li>Storm debris haul-off</li>
            <li>Yard waste cleanup</li>
          </ul>

          <h3>How quoting works</h3>
          <p>
            Pricing depends on access, cutting required, haul volume, disposal,
            and overall job difficulty.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default DebrisRemoval;