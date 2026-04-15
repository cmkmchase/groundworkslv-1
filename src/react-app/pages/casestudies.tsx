import PageHero from "../components/pagehero";

function CaseStudies() {
  const studies = [
    "Oak branch debris haul-off",
    "Recurring lawn maintenance route build",
    "Property cleanup and edge restoration",
  ];

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Real jobs. Real before-and-after proof."
        text="This section will hold project breakdowns, photos, scope summaries, and outcomes."
      />

      <section className="section">
        <div className="container grid-3">
          {studies.map((study) => (
            <div className="card" key={study}>
              <h3>{study}</h3>
              <p>Placeholder case study card. Add job photos and results next.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default CaseStudies;