import { useState } from "react";
import CreditedImage from "../components/CreditedImage";
import { images } from "../data/images";
import { thresherSpecies } from "../data/threshers";

export default function ThresherSpeciesSection() {
  const [openId, setOpenId] = useState<string>(thresherSpecies[0].id);

  return (
    <section
      id="thresher-species"
      className="section section--alt"
      aria-labelledby="thresher-species-heading"
    >
      <div className="section__inner">
        <h2 id="thresher-species-heading">Thresher Shark Species</h2>
        <p>
          There are three living species of thresher shark, each adapted to
          a slightly different niche within the open ocean. Select a species
          below to explore its identification features, biology, and
          conservation status.
        </p>

        <div className="species-accordion">
          {thresherSpecies.map((species) => {
            const isOpen = openId === species.id;
            return (
              <div className="species-accordion__item" key={species.id}>
                <h3>
                  <button
                    className="species-accordion__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${species.id}`}
                    id={`trigger-${species.id}`}
                    onClick={() => setOpenId(isOpen ? "" : species.id)}
                  >
                    <span>
                      {species.commonName} —{" "}
                      <em>{species.scientificName}</em>
                    </span>
                    <span className="species-accordion__icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={`panel-${species.id}`}
                  role="region"
                  aria-labelledby={`trigger-${species.id}`}
                  className="species-accordion__panel"
                  hidden={!isOpen}
                >
                  <div className="species-detail">
                    <CreditedImage
                      image={images[species.imageKey]}
                      className="species-detail__image"
                    />
                    <div className="species-detail__body">
                      <h4>Identification Features</h4>
                      <ul>
                        {species.identification.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <dl className="species-detail__facts">
                        <dt>Maximum size</dt>
                        <dd>{species.maxSize}</dd>
                        <dt>Geographic range</dt>
                        <dd>{species.range}</dd>
                        <dt>Habitat and depth range</dt>
                        <dd>{species.habitatDepth}</dd>
                        <dt>Diet and hunting behavior</dt>
                        <dd>{species.diet}</dd>
                        <dt>Conservation status</dt>
                        <dd>
                          <span className="status-pill">
                            {species.conservationStatus}
                          </span>
                        </dd>
                      </dl>
                      <h4>Main Threats</h4>
                      <ul>
                        {species.threats.map((threat, i) => (
                          <li key={i}>{threat}</li>
                        ))}
                      </ul>
                      {species.notes && (
                        <p className="section__note">{species.notes}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
