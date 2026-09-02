import EvidenceMedia from "./EvidenceMedia";

const mediaRoot = "/screens/daoud-tycoons";

type DaoudMediaProps = {
  file: string;
  title: string;
  alt: string;
  device?: "desktop" | "mobile";
  eager?: boolean;
  highDensityInline?: boolean;
};

function DaoudMedia({ file, title, alt, device = "desktop", eager, highDensityInline }: DaoudMediaProps) {
  return (
    <EvidenceMedia
      src={`${mediaRoot}/${file}.webp`}
      fullSrc={`${mediaRoot}/${file}@2x.png`}
      title={title}
      alt={alt}
      label="REDESIGN"
      device={device}
      eager={eager}
      highDensityInline={highDensityInline}
    />
  );
}

export default function DaoudCaseStudy() {
  return (
    <div className="daoud-case-study">
      <section className="daoud-showcase daoud-opening">
        <div className="daoud-section-copy">
          <p className="eyebrow">Heritage, translated digitally</p>
          <h2>A quieter storefront for a fashion house with history.</h2>
          <p>
            Established in Amman in 1979, Daoud Tycoons carries heritage and an international
            point of view. The concept uses editorial scale, warm material colour and deliberate
            pacing to let that identity lead—while keeping product discovery close at hand.
          </p>
        </div>
        <DaoudMedia
          file="hero-desktop"
          title="Daoud Tycoons desktop homepage hero"
          alt="Daoud Tycoons luxury ecommerce homepage with an editorial fashion hero"
          eager
          highDensityInline
        />
      </section>

      <section className="daoud-showcase daoud-merchandising">
        <div className="daoud-section-copy daoud-copy-pair">
          <div>
            <p className="eyebrow">Editorial merchandising</p>
            <h2>Stories create desire. Structure keeps shopping clear.</h2>
          </div>
          <p>
            New This Season establishes a point of view before the interface asks for a decision.
            Categories and Houses then become meaningful ways into the collection, giving each
            brand presence without flattening the experience into a marketplace grid.
          </p>
        </div>
        <div className="daoud-media-stack">
          <DaoudMedia
            file="new-season-desktop"
            title="New This Season editorial merchandising"
            alt="New This Season editorial product stories and luxury fashion imagery"
          />
          <DaoudMedia
            file="houses-desktop"
            title="The Houses brand discovery"
            alt="The Houses section presenting international fashion brands as a discovery route"
          />
        </div>
      </section>

      <section className="daoud-showcase daoud-discovery">
        <div className="daoud-section-copy">
          <p className="eyebrow">Discovery to decision</p>
          <h2>The editorial world resolves into practical product choices.</h2>
          <p>
            Collection pages make category, House, size, colour and price easy to navigate without
            overpowering the merchandise. Product detail preserves the photography-first rhythm,
            then brings colour, size and availability forward when the shopper is ready to act.
          </p>
        </div>
        <div className="daoud-discovery-grid">
          <article>
            <h3>Find the right piece.</h3>
            <DaoudMedia
              file="collection-desktop"
              title="Collection and filtering experience"
              alt="Daoud Tycoons collection page with category, brand, size, colour and price filtering"
            />
          </article>
          <article>
            <h3>Make the product the decision surface.</h3>
            <DaoudMedia
              file="pdp-desktop"
              title="Product detail and add-to-bag state"
              alt="Daoud Tycoons product detail page with imagery, colour, size and add-to-bag controls"
            />
          </article>
        </div>
      </section>

      <section className="daoud-showcase daoud-commerce">
        <div className="daoud-section-copy daoud-copy-pair">
          <div>
            <p className="eyebrow">Commerce continuity</p>
            <h2>Keep momentum from product choice to checkout.</h2>
          </div>
          <p>
            The bag is an immediate continuation of the product decision, not a competing
            destination. Checkout reduces the visual language to the essentials while keeping the
            same typography, spacing and restrained tone as the storefront.
          </p>
        </div>
        <div className="daoud-paired-media">
          <DaoudMedia
            file="bag-desktop"
            title="Shopping bag experience"
            alt="Daoud Tycoons shopping bag overlay with selected fashion product and order summary"
          />
          <DaoudMedia
            file="checkout-desktop"
            title="Checkout experience"
            alt="Daoud Tycoons checkout with delivery information, order summary and payment progression"
          />
        </div>
      </section>

      <section className="daoud-showcase daoud-responsive">
        <div className="daoud-section-copy daoud-copy-pair">
          <div>
            <p className="eyebrow">Responsive composition</p>
            <h2>Mobile is recomposed, not reduced.</h2>
          </div>
          <p>
            The smaller canvas changes the reading order. Imagery is reframed, navigation becomes
            focused and product controls enter the sequence when they matter. The result preserves
            the same quiet hierarchy while making browsing and buying comfortable in one hand.
          </p>
        </div>
        <div className="daoud-mobile-gallery">
          <article className="daoud-phone-stage daoud-phone-hero">
            <DaoudMedia
              file="mobile-hero"
              title="Mobile editorial homepage"
              alt="Daoud Tycoons mobile homepage with editorial fashion hero"
              device="mobile"
              highDensityInline
            />
            <p>Editorial opening</p>
          </article>
          <article className="daoud-phone-stage">
            <div className="daoud-phone-viewport">
              <DaoudMedia
                file="mobile-collection"
                title="Mobile collection experience"
                alt="Daoud Tycoons mobile collection with product discovery and filters"
                device="mobile"
              />
            </div>
            <p>Focused discovery</p>
          </article>
          <article className="daoud-phone-stage">
            <div className="daoud-phone-viewport">
              <DaoudMedia
                file="mobile-pdp"
                title="Mobile product detail"
                alt="Daoud Tycoons mobile product detail with imagery, options and commerce controls"
                device="mobile"
              />
            </div>
            <p>Product decision</p>
          </article>
        </div>
      </section>

      <section className="daoud-showcase daoud-rtl">
        <div className="daoud-section-copy daoud-copy-pair">
          <div>
            <p className="eyebrow">Arabic RTL</p>
            <h2>Localization is a composed product mode.</h2>
          </div>
          <p>
            Arabic uses its own typography and reading rhythm. Navigation, alignment and interaction
            direction are mirrored where appropriate, while the fashion imagery, product identity
            and restrained brand character remain consistent across languages.
          </p>
        </div>
        <div className="daoud-rtl-grid">
          <DaoudMedia
            file="rtl-hero-desktop"
            title="Arabic RTL desktop homepage"
            alt="Arabic RTL Daoud Tycoons homepage with native navigation and editorial composition"
          />
          <div className="daoud-phone-stage">
            <div className="daoud-phone-viewport">
              <DaoudMedia
                file="rtl-mobile-collection"
                title="Arabic RTL mobile collection"
                alt="Arabic RTL mobile collection with mirrored product discovery and controls"
                device="mobile"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="daoud-showcase daoud-system">
        <div className="daoud-section-copy">
          <p className="eyebrow">The product system</p>
          <h2>A restrained language, built to carry two scripts and every commerce state.</h2>
          <p>
            Warm ivory, bone, espresso and stone create the material foundation. Editorial serif
            typography carries the fashion voice; modern grotesk and Arabic-specific type keep
            navigation, product controls and transactional details precise.
          </p>
        </div>
        <div className="daoud-system-grid">
          <DaoudMedia
            file="system-palette"
            title="Daoud Tycoons colour system"
            alt="Warm ivory, espresso, stone and taupe colour system for Daoud Tycoons"
          />
          <DaoudMedia
            file="system-type-latin"
            title="Latin typography system"
            alt="Editorial serif and modern grotesk Latin typography hierarchy"
          />
          <DaoudMedia
            file="system-type-arabic"
            title="Arabic typography system"
            alt="Arabic typography hierarchy composed for native right-to-left reading"
          />
        </div>
      </section>

      <section className="daoud-reflection">
        <p className="eyebrow">Design reflection</p>
        <h2>Heritage becomes useful when it shapes the whole experience.</h2>
        <p>
          The concept brings Daoud Tycoons’ history, editorial fashion perspective and commerce
          journey into one coherent multilingual system—distinctive in tone, practical in use and
          deliberate at every scale.
        </p>
      </section>
    </div>
  );
}
