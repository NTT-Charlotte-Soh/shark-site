import { thresherSpecies } from "../data/threshers";

const eyeFeatures: Record<string, string> = {
  "common-thresher": "Moderate-sized eyes; white patch above pectoral fins",
  "bigeye-thresher": "Very large, upward-facing eyes; deep head grooves",
  "pelagic-thresher": "Smaller eyes; no pale pectoral patch",
};

const coloration: Record<string, string> = {
  "common-thresher": "Dark blue-gray to brownish-gray above, white below",
  "bigeye-thresher": "Purplish-brown to gray above",
  "pelagic-thresher": "Dark blue-gray to purplish above",
};

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="section"
      aria-labelledby="comparison-heading"
    >
      <div className="section__inner">
        <h2 id="comparison-heading">Species Comparison</h2>
        <p>
          The table below compares the three living thresher shark species
          side by side. On narrow screens, scroll horizontally to see all
          columns, or refer to the stacked cards beneath the table.
        </p>

        <div className="comparison-table-wrapper" tabIndex={0} role="region" aria-label="Thresher shark species comparison table, scrollable horizontally">
          <table className="comparison-table">
            <caption className="sr-only">
              Comparison of common, bigeye, and pelagic thresher sharks
            </caption>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                {thresherSpecies.map((s) => (
                  <th scope="col" key={s.id}>
                    {s.commonName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Scientific name</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>
                    <em>{s.scientificName}</em>
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Eye size / distinguishing features</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>{eyeFeatures[s.id]}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Coloration</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>{coloration[s.id]}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Maximum size</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>{s.maxSize}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Main habitat</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>{s.habitatDepth}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Geographic range</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>{s.range}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Main prey</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>{s.diet}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Conservation status</th>
                {thresherSpecies.map((s) => (
                  <td key={s.id}>
                    <span className="status-pill">{s.conservationStatus}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="comparison-cards" aria-hidden="false">
          {thresherSpecies.map((s) => (
            <article className="comparison-card" key={s.id}>
              <h3>
                {s.commonName} — <em>{s.scientificName}</em>
              </h3>
              <dl>
                <dt>Eye size / features</dt>
                <dd>{eyeFeatures[s.id]}</dd>
                <dt>Coloration</dt>
                <dd>{coloration[s.id]}</dd>
                <dt>Maximum size</dt>
                <dd>{s.maxSize}</dd>
                <dt>Main habitat</dt>
                <dd>{s.habitatDepth}</dd>
                <dt>Geographic range</dt>
                <dd>{s.range}</dd>
                <dt>Main prey</dt>
                <dd>{s.diet}</dd>
                <dt>Conservation status</dt>
                <dd>
                  <span className="status-pill">{s.conservationStatus}</span>
                </dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
