import CTASection from "../components/ctasection";
import PageHero from "../components/pagehero";

function LawnCare() {
  return (
    <>
      <PageHero
        eyebrow="Service Page"
        title="Lawn care services"
        text="Recurring and one-time lawn service with simple scope and visible results."
      />

      <section className="section">
        <div className="container content">
          <h2>What is included</h2>
          <ul>
            <li>Mowing</li>
            <li>Weed eating</li>
            <li>Blow off cleanup</li>
            <li>Edging on premium service</li>
            <li>Trimming and detail work as quoted</li>
          </ul>

          <h3>Who this service fits</h3>
          <p>
            Customers who want a dependable recurring maintenance option or a
            straightforward cleanup before listing, events, or seasonal reset.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default LawnCare;