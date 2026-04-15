import PageHero from "../components/pagehero";

function Blog() {
  const posts = [
    "How often to mow in Leavenworth",
    "What to do after storm debris falls in your yard",
    "When to mulch in Kansas",
  ];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Local service content and SEO pages."
        text="This section will hold lawn care guides, cleanup advice, seasonal articles, and service-area content."
      />

      <section className="section">
        <div className="container grid-3">
          {posts.map((post) => (
            <div className="card" key={post}>
              <h3>{post}</h3>
              <p>Placeholder post card. Build full article pages next.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Blog;