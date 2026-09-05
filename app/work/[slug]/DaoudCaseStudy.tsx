import EvidenceMedia from "./EvidenceMedia";

const mediaRoot = "/screens/daoud-tycoons";

type DaoudMediaProps = {
  file: string;
  title: string;
  alt: string;
  device?: "desktop" | "tablet" | "mobile" | "drawer";
  eager?: boolean;
  highDensityInline?: boolean;
  finalAsset?: boolean;
};

function DaoudMedia({
  file,
  title,
  alt,
  device = "desktop",
  eager,
  highDensityInline,
  finalAsset = false,
}: DaoudMediaProps) {
  const source = `${mediaRoot}/${file}.webp`;
  const fullSource = finalAsset ? `${mediaRoot}/${file}.png` : `${mediaRoot}/${file}@2x.png`;

  return (
    <EvidenceMedia
      src={source}
      fullSrc={fullSource}
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
              file="pdp-blouson-selected"
              title="DI LORENZO Blouson with size L selected"
              alt="Daoud Tycoons product detail page for the DI LORENZO Blouson with canonical size L selected"
              device="tablet"
              finalAsset
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
            The state remains truthful from decision to confirmation. Size L is selected before
            Add to Bag; the bag then moves from two to three items and carries the same 435 JOD
            total through guest checkout, delivery, payment and confirmation.
          </p>
        </div>
        <div className="daoud-commerce-sequence">
          <article className="daoud-cart-proof">
            <h3>The product decision enters the bag intact.</h3>
            <DaoudMedia
              file="cart-blouson"
              title="Bag with the DI LORENZO Blouson"
              alt="Daoud Tycoons bag drawer showing three items including the DI LORENZO Blouson in size L and a 435 JOD subtotal"
              device="drawer"
              finalAsset
            />
          </article>
          <div className="daoud-checkout-proof">
            <article>
              <h3>Guest checkout keeps the order visible.</h3>
              <DaoudMedia
                file="checkout-entry-blouson"
                title="Blouson guest checkout entry"
                alt="Daoud Tycoons checkout entry showing three products and a 435 JOD order total"
                finalAsset
              />
            </article>
            <article>
              <h3>Confirmation closes the same journey.</h3>
              <DaoudMedia
                file="confirmation-blouson"
                title="Blouson order confirmation"
                alt="Daoud Tycoons order confirmation showing the completed three-item order and 435 JOD total"
                finalAsset
              />
            </article>
          </div>
        </div>
      </section>

      <section className="daoud-showcase daoud-walkthrough" id="prototype-walkthrough">
        <div className="daoud-section-copy daoud-copy-pair">
          <div>
            <p className="eyebrow">Prototype walkthrough</p>
            <h2>Discover. Select. Checkout.</h2>
          </div>
          <p>
            The certified desktop prototype connects the editorial homepage to collection,
            DI LORENZO Blouson selection and a consistent three-item guest checkout journey.
          </p>
        </div>
        <figure className="prototype-walkthrough daoud-prototype-walkthrough">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/video/daoud-tycoons-video-poster.jpg"
            aria-label="Daoud Tycoons prototype walkthrough from homepage to order confirmation"
          >
            <source src="/video/daoud-tycoons-prototype-walkthrough.mp4" type="video/mp4" />
            <a href="/video/daoud-tycoons-prototype-walkthrough.mp4">
              Open the Daoud Tycoons prototype walkthrough
            </a>
          </video>
          <figcaption>
            <span>Certified prototype · 75 seconds</span>
            <strong>Homepage → Blouson L → Bag 3 → guest checkout → confirmation.</strong>
            <p>
              Recorded from the approved Figma Presentation flow; the order remains at three items
              and 435 JOD from the bag through confirmation.
            </p>
          </figcaption>
        </figure>
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
