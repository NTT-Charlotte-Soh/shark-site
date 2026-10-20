import { useState } from "react";
import type { ImageCredit } from "../data/images";

interface CreditedImageProps {
  image: ImageCredit;
  className?: string;
  showCreditInline?: boolean;
}

export default function CreditedImage({
  image,
  className,
  showCreditInline = true,
}: CreditedImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <figure className={`credited-image ${className ?? ""}`}>
      <div className="credited-image__frame">
        {status === "loading" && (
          <div className="credited-image__loading" aria-hidden="true">
            <span className="spinner" />
          </div>
        )}
        {status === "error" ? (
          <div className="credited-image__error" role="img" aria-label={image.alt}>
            <p>
              [Verified image of {image.speciesShown} could not be loaded —
              please check your connection]
            </p>
          </div>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            style={{ opacity: status === "loaded" ? 1 : 0 }}
          />
        )}
      </div>
      {showCreditInline && (
        <figcaption className="credited-image__caption">
          Image: {image.creator} ·{" "}
          <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">
            {image.license}
          </a>
        </figcaption>
      )}
    </figure>
  );
}
