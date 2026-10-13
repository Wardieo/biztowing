import { Link } from "react-router-dom";
import { ShieldCheck, Phone, Check } from "lucide-react";
import RequestAssistanceForm from "../components/RequestAssistanceForm";
import { usePageMeta } from "../hooks/usePageMeta";
export default function Request() {
  usePageMeta("Request Assistance");
  return (
    <>
      <div className="page-heading container">
        <div className="eyebrow">YOUR NEXT MILE STARTS HERE</div>
        <h1>Let’s find your way forward.</h1>
        <p>Tell us where you are and what you need.</p>
      </div>
      <section className="container form-layout section">
        <aside className="request-aside">
          <ShieldCheck size={38} />
          <h2>
            A little preparation.
            <br />A smoother next step.
          </h2>
          <p>
            Keep your vehicle details and exact location handy. Include a nearby
            landmark if you’re unsure of the address.
          </p>
          <ul className="checklist">
            <li>
              <Check />
              Share your situation
            </li>
            <li>
              <Check />
              Confirm your pickup location
            </li>
            <li>
              <Check />
              Review with your provider
            </li>
          </ul>
          <Link className="outline-button" to="/contact">
            <Phone size={18} /> Prefer to call?
          </Link>
          <p className="field-note">
            Sample number. This site has no live dispatch.
          </p>
          <div className="safety-note">
            <strong>Your safety comes first.</strong>
            <p>
              If there’s immediate danger or someone is injured, contact local
              emergency services.
            </p>
          </div>
        </aside>
        <RequestAssistanceForm />
      </section>
    </>
  );
}
