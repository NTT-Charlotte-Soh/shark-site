import { images } from "../data/images";
import { sources } from "../data/sources";

export default function SourcesAndCredits() {
  const imageList = Object.values(images);

  return (
    <section
      id="sources"
      className="section section--alt"
      aria-labelledby="sources-heading"
    >
      <div className="section__inner">
        <h2 id="sources-heading">Sources and Image Credits</h2>

        <h3>Scientific and Educational Sources</h3>
        <p>
          The biological, taxonomic, and conservation information presented
          throughout this site draws on the following types of reputable
          sources. Specific conservation statuses reflect general
          IUCN Red List categories at the time of writing; always check the
          IUCN Red List directly for the most current assessment.
        </p>
        <ul className="source-list">
          {sources.map((source) => (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.name}
              </a>
              {source.note && <span> — {source.note}</span>}
            </li>
          ))}
        </ul>

        <h3>Image Credits</h3>
        <p>
          All photographs used in this guide are sourced from Wikimedia
          Commons and are either in the public domain or published under a
          Creative Commons license, as noted below. Click a license link to
          view the original file and its full licensing details.
        </p>
        <div className="credit-table-wrapper">
          <table className="credit-table">
            <caption className="sr-only">Full image credits</caption>
            <thead>
              <tr>
                <th scope="col">Species Shown</th>
                <th scope="col">Creator / Organization</th>
                <th scope="col">License</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              {imageList.map((img) => (
                <tr key={img.sourceUrl}>
                  <td>{img.speciesShown}</td>
                  <td>{img.creator}</td>
                  <td>{img.license}</td>
                  <td>
                    <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer">
                      View original
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
