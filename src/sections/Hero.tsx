import CreditedImage from "../components/CreditedImage";
import { images } from "../data/images";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero__content">
        <h1 id="hero-heading">Thresher Sharks: Evolution, Diversity, and Survival</h1>
        <p className="hero__intro">
          Thresher sharks are instantly recognizable for one extraordinary
          feature: an upper tail fin that can be as long as the rest of their
          body. They use this whip-like tail to stun and herd schooling fish —
          a hunting strategy found almost nowhere else in the animal kingdom.
          Explore how these remarkable predators fit into the much longer
          story of shark evolution and diversity.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#thresher-sharks">
            Explore Thresher Sharks
          </a>
          <a className="button button--secondary" href="#what-is-a-shark">
            Learn What Makes a Shark
          </a>
        </div>
      </div>
      <div className="hero__media">
        <CreditedImage image={images.commonThresher} className="hero__image" />
      </div>
    </section>
  );
}
