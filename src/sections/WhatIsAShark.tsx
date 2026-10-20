import { notSharks, trueSharkTraits } from "../data/notSharks";

export default function WhatIsAShark() {
  return (
    <section
      id="what-is-a-shark"
      className="section section--alt"
      aria-labelledby="what-is-a-shark-heading"
    >
      <div className="section__inner">
        <h2 id="what-is-a-shark-heading">What Is a Shark?</h2>
        <p>
          True sharks belong to a specific group of cartilaginous fish, and
          they share a consistent set of defining biological traits:
        </p>
        <ul className="trait-list">
          {trueSharkTraits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>

        <h3>Animals Called "Sharks" That Are Not True Sharks</h3>
        <p>
          Many animals borrow the word "shark" in their common name because of
          a superficial resemblance — usually a similar body shape or fin —
          even though they belong to completely different, unrelated groups of
          fish. Here is how these look-alikes compare to true sharks:
        </p>

        <div className="not-shark-grid" role="list">
          {notSharks.map((item) => (
            <article className="not-shark-card" role="listitem" key={item.id}>
              <h4>{item.name}</h4>
              <p className="not-shark-card__group">
                Actually: <strong>{item.actualGroup}</strong>
              </p>
              <p>{item.explanation}</p>
            </article>
          ))}
        </div>

        <div className="comparison-callout" aria-label="Key difference">
          <p>
            <strong>Key difference:</strong> True sharks have a cartilaginous
            skeleton and no bony gill coverings. Every animal above is a bony
            fish (Osteichthyes) with a true bone skeleton — placing them in an
            entirely different class from real sharks, no matter how similar
            they look.
          </p>
        </div>
      </div>
    </section>
  );
}
