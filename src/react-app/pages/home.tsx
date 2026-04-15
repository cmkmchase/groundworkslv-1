import { Link } from "react-router-dom";
import CTASection from "../components/ctasection";
import PageHero from "../components/pagehero";

function Home() {
  const services = [
    {
      name: "Basic Service",
      price: "From $50",
      items: ["Mowing", "Weed eating", "Blow off cleanup"],
    },
    {
      name: "Premium Service",
      price: "From $75",
      items: ["Everything in Basic", "Edging", "Trimming", "Pruning"],
    },
  ];

  const sizes = [
    ["Small Yard", "$50", "$75"],
    ["Medium Yard", "$70", "$100"],
    ["Large Yard", "$90", "$125"],
  ];

  return (
    <>
      <PageHero
        eyebrow="Groundworks LV"
        title="Straightforward lawn care."
        text="Reliable weekly and recurring lawn service with simple pricing, clean results, and no clutter."
      />

      <section className="section">
        <div className="container">
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@groundworkslv.com">
              Get a quote
            </a>
            <Link className="button button-secondary" to="/services">
              View services
            </Link>
          </div>
          <p className="hero-email">Email: hello@groundworkslv.com</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container grid-3">
          <div className="card">
            <h3>Recurring Focus</h3>
            <p>Built around repeat service and consistent routes.</p>
          </div>
          <div className="card">
            <h3>Clean Pricing</h3>
            <p>Two service tiers. Simple size-based rates.</p>
          </div>
          <div className="card">
            <h3>Extra Services</h3>
            <p>Seeding, weeding, mulching, and sidewalk reclamation available.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Services</h2>
            <p>Choose a clean maintenance package that fits the property.</p>
          </div>

          <div className="grid-2">
            {services.map((service) => (
              <div className="card" key={service.name}>
                <div className="service-top">
                  <h3>{service.name}</h3>
                  <span className="price-pill">{service.price}</span>
                </div>

                <ul className="list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Pricing</h2>
            <p>
              Base rates by yard size. Final quote depends on condition, access,
              and scope.
            </p>
          </div>

          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Yard Size</th>
                  <th>Basic</th>
                  <th>Premium</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map(([size, basic, premium]) => (
                  <tr key={size}>
                    <td>{size}</td>
                    <td>{basic}</td>
                    <td>{premium}</td>
                    <td>Recurring maintenance</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default Home;