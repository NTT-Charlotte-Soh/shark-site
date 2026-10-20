import CreditedImage from "../components/CreditedImage";
import { images } from "../data/images";

export default function ThresherOverview() {
  return (
    <section
      id="thresher-sharks"
      className="section"
      aria-labelledby="thresher-overview-heading"
    >
      <div className="section__inner section__inner--split">
        <div>
          <h2 id="thresher-overview-heading">Thresher Sharks</h2>
          <p>
            Thresher sharks belong to the genus <strong>Alopias</strong>,
            within the family Alopiidae. All three living species share one
            unmistakable feature: an extremely long, scythe-shaped upper
            lobe of the tail fin, which can account for roughly half of the
            shark's total body length.
          </p>
          <p>
            Rather than using their tail only for propulsion, thresher sharks
            use it as a weapon. They accelerate toward a school of small
            fish, then whip the elongated tail forward over their head at
            tremendous speed — stunning, injuring, or killing several prey
            fish in a single strike. This "tail-slap" hunting behavior is
            rare among sharks and allows threshers to feed efficiently on
            tightly packed schooling fish.
          </p>
          <p>
            Thresher sharks have slender, streamlined bodies built for
            speed and endurance, and they generally act as mid-to-upper-level
            predators in the open ocean food web, feeding on schooling fish
            and squid.
          </p>
          <p>
            Like many large sharks, thresher species grow slowly, mature
            late, and produce few offspring. This makes them especially
            vulnerable to overfishing — population losses take decades to
            recover, if they recover at all.
          </p>
        </div>
        <div>
          <CreditedImage
            image={images.commonThresher}
            className="thresher-overview__image"
          />
          <p className="section__note">
            The elongated upper tail lobe, clearly visible here, is the
            single most distinctive anatomical feature shared by all three
            thresher shark species.
          </p>
        </div>
      </div>
    </section>
  );
}
