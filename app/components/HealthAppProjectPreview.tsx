export default function HealthAppProjectPreview() {
  return (
    <span className="health-app-preview" aria-hidden="true">
      <span className="health-app-preview-copy">
        <i>Mobile healthcare · 2026</i>
        <b>One journey.<br />Every step connected.</b>
      </span>
      <span className="health-app-orbit health-app-orbit-one" />
      <span className="health-app-orbit health-app-orbit-two" />
      <span className="health-app-phone health-app-phone-left">
        <img src="/screens/health-app/doctors-list.png" alt="" />
      </span>
      <span className="health-app-phone health-app-phone-main">
        <img src="/screens/health-app/home.png" alt="" />
      </span>
      <span className="health-app-phone health-app-phone-right">
        <img src="/screens/health-app/booking-summary.png" alt="" />
      </span>
      <span className="health-app-flow">
        <i>Discover</i><em>→</em><i>Book</i><em>→</em><i>Follow up</i>
      </span>
    </span>
  );
}

