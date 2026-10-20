import CreditedImage from "../components/CreditedImage";
import { diversityExamples } from "../data/diversity";
import { images } from "../data/images";

const classification = [
  { level: "Kingdom", value: "Animalia" },
  { level: "Phylum", value: "Chordata" },
  { level: "Class", value: "Chondrichthyes" },
  { level: "Subclass", value: "Elasmobranchii" },
];

export default function Taxonomy() {
  return (
    <section
      id="taxonomy"
      className="section section--alt"
      aria-labelledby="taxonomy-heading"
    >
      <div className="section__inner">
        <h2 id="taxonomy-heading">Taxonomy and Shark Diversity</h2>
        <p>
          Sharks are classified within a clear taxonomic hierarchy that
          places them alongside their closest cartilaginous-fish relatives:
        </p>

        <dl className="classification-list">
          {classification.map((item) => (
            <div className="classification-list__row" key={item.level}>
              <dt>{item.level}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <p>
          Within this classification, sharks are extraordinarily diverse —
          ranging from the 18-meter filter-feeding whale shark to small
          deep-sea dogfish barely longer than a human hand. The following
          examples illustrate just a slice of that diversity in size, diet,
          behavior, and habitat.
        </p>

        <div className="diversity-grid">
          {diversityExamples.map((example) => (
            <article className="diversity-card" key={example.id}>
              <CreditedImage
                image={images[example.imageKey]}
                className="diversity-card__image"
              />
              <div className="diversity-card__body">
                <h3>{example.commonName}</h3>
                <p className="diversity-card__sci">
                  <em>{example.scientificName}</em>
                </p>
                <p>{example.description}</p>
                <ul className="diversity-card__facts">
                  <li>
                    <strong>Habitat:</strong> {example.habitat}
                  </li>
                  <li>
                    <strong>Approximate size:</strong> {example.size}
                  </li>
                  <li>
                    <strong>Notable adaptation:</strong> {example.adaptation}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
