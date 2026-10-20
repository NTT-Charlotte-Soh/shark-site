import { timeline, evolutionFacts } from "../data/evolution";

export default function Evolution() {
  return (
    <section id="evolution" className="section" aria-labelledby="evolution-heading">
      <div className="section__inner">
        <h2 id="evolution-heading">Evolutionary Roots of Sharks</h2>
        <p>
          Sharks belong to the class <strong>Chondrichthyes</strong>, the
          cartilaginous fishes, a group that also includes rays, skates, and
          chimaeras (sometimes called "ghost sharks"). Unlike most fish, their
          skeletons are made of flexible cartilage rather than bone.
        </p>
        <ul className="trait-list">
          {evolutionFacts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>

        <h3>A Simplified Evolutionary Timeline</h3>
        <p className="section__note">
          This timeline presents simplified, broadly accepted milestones for
          general audiences; exact dates and relationships are refined
          through ongoing paleontological research.
        </p>
        <ol className="timeline" aria-label="Shark evolution timeline">
          {timeline.map((event) => (
            <li className="timeline__event" key={event.id}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <p className="timeline__period">{event.period}</p>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="comparison-callout">
          <p>
            <strong>Not "unchanged dinosaurs":</strong> Sharks are often
            mistakenly described as prehistoric creatures that never changed.
            In reality, the fossil record shows continuous evolution — body
            shapes, teeth, and entire species have shifted dramatically over
            hundreds of millions of years. Today's sharks are the current
            result of a long, ongoing evolutionary process, not a frozen
            relic of the past.
          </p>
        </div>
      </div>
    </section>
  );
}
