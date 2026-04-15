type Props = {
  eyebrow?: string;
  title: string;
  text: string;
};

function PageHero({ eyebrow, title, text }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default PageHero;