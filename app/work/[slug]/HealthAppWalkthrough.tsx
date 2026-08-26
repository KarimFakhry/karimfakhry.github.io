export default function HealthAppWalkthrough() {
  return (
    <section className="screen-section health-app-walkthrough-section" id="prototype-walkthrough">
      <div className="screen-heading">
        <p className="eyebrow">Golden-path walkthrough</p>
        <h2>One appointment, carried from discovery to secure follow-up.</h2>
        <p>A cursor-guided recording of the finished light-mode prototype, following the product&apos;s wired interactions and states.</p>
      </div>
      <figure className="prototype-walkthrough health-app-prototype-walkthrough">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/video/andalusia-health-app-golden-path-poster.jpg"
          aria-label="Andalusia Health App golden-path walkthrough from doctor discovery through booking, queue status and secure lab follow-up"
        >
          <source src="/video/andalusia-health-app-golden-path.mp4" type="video/mp4" />
          Your browser does not support embedded video. <a href="/video/andalusia-health-app-golden-path.mp4">Open the walkthrough video.</a>
        </video>
        <figcaption>
          <span>Interactive prototype · 49 seconds</span>
          <strong>Find care → choose a time → confirm → arrive → follow up.</strong>
          <p>The path uses the prototype&apos;s actual navigation, bottom sheets, processing state, live queue context, biometric gate and clinical follow-up record. It is a design proposal, not a deployed-product recording.</p>
        </figcaption>
      </figure>
    </section>
  );
}
