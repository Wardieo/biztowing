import { Phone, MessageSquare, MapPin, ArrowUpRight } from "lucide-react";
import { business } from "../utils/config";
import { usePageMeta } from "../hooks/usePageMeta";
export default function Contact() {
  usePageMeta(
    "Call or Text Us",
    "Find BizTowing’s call and text contact numbers for roadside assistance in Dallas–Fort Worth. Demonstration numbers only.",
  );
  return (
    <>
      <div className="page-heading container">
        <div className="eyebrow">CALL OR TEXT</div>
        <h1>Let’s get you connected.</h1>
        <p>
          Choose how you’d like to reach us. Have your location and vehicle
          details ready.
        </p>
      </div>
      <section
        className="container section"
        aria-label="Call and text contact numbers"
      >
        <div className="contact-options">
          <article className="contact-option">
            <span className="contact-option-icon">
              <Phone size={27} />
            </span>
            <h2>Give us a call.</h2>
            <p>Talk through your situation and the assistance you need.</p>
            <a className="contact-number" href={business.phoneHref}>
              {business.phone}
            </a>
            <span className="field-note">Mock US number for calls</span>
            <a className="button" href={business.phoneHref}>
              <Phone size={18} /> Call this number <ArrowUpRight size={18} />
            </a>
          </article>
          <article className="contact-option">
            <span className="contact-option-icon">
              <MessageSquare size={27} />
            </span>
            <h2>Send us a text.</h2>
            <p>
              Share your pickup location, vehicle details, and what happened.
            </p>
            <a className="contact-number" href={business.smsHref}>
              {business.textPhone}
            </a>
            <span className="field-note">Mock US number for text messages</span>
            <a className="outline-button" href={business.smsHref}>
              <MessageSquare size={18} /> Text this number{" "}
              <ArrowUpRight size={18} />
            </a>
          </article>
        </div>
        <p className="contact-demo-note">
          These are demonstration numbers. Calls and texts are not monitored.
          Replace them with your business numbers before launch.
        </p>
        <div className="contact-region">
          <MapPin size={21} />
          <div>
            <h3>Dallas–Fort Worth & surrounding communities</h3>
            <p>
              Include your exact address or a nearby landmark so service
              availability can be confirmed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
