import PageHero from "../components/pagehero";

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote."
        text="Send the property address, city, yard size, and the service you want."
      />

      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <h3>Email</h3>
            <p>hello@groundworkslv.com</p>
          </div>

          <div className="card">
            <h3>Quote details to include</h3>
            <ul className="list">
              <li>Property address</li>
              <li>City</li>
              <li>Service needed</li>
              <li>Yard size or job description</li>
              <li>Photos if available</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;