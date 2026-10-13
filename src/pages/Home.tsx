import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  PhoneCall,
  MapPin,
  Truck,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";
import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import FAQ from "../components/FAQ";
import VehiclesWeHandle from "../components/VehiclesWeHandle";
import Coverage from "../components/Coverage";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
export default function Home() {
  usePageMeta("24/7 Roadside Assistance & Towing");
  return (
    <>
      <Hero />
      <div className="trust-strip">
        <div className="container">
          {[
            [ShieldCheck, "Care for your vehicle"],
            [Clock3, "Day or night, rain or shine"],
            [HeartHandshake, "Real help. Human approach."],
            [Truck, "More than just towing"],
          ].map(([Icon, text]) => {
            const I = Icon as typeof Truck;
            return (
              <span key={text as string}>
                <I size={22} />
                {text as string}
              </span>
            );
          })}
        </div>
      </div>
      <section className="section container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">OUR SERVICES</div>
            <h2>Help for the unexpected.</h2>
            <p>Towing, recovery, and everyday roadside support.</p>
          </div>
          <Link className="outline-button" to="/services">
            Explore all services <ArrowUpRight size={17} />
          </Link>
        </div>
        <ServiceGrid items={services.slice(0, 6)} />
        <div className="service-bottom">
          <span>
            From motorcycles to electric vehicles, find the right support for
            your ride.
          </span>
          <Link to="/services">
            View all 22 services <ChevronRight size={17} />
          </Link>
        </div>
      </section>
      <section className="how-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">HOW IT WORKS</div>
              <h2>A simpler way to get help.</h2>
            </div>
            <p>
              Three simple steps.
              <br />
              One less thing to worry about.
            </p>
          </div>
          <div className="steps">
            {[
              [
                PhoneCall,
                "01",
                "Tell us what happened",
                "Choose your service and share a few details about your vehicle.",
              ],
              [
                MapPin,
                "02",
                "Share your location",
                "An address, landmark, or GPS location helps pinpoint where you are.",
              ],
              [
                Truck,
                "03",
                "Confirm your assistance",
                "Your provider confirms availability, pricing, and the next steps.",
              ],
            ].map(([Icon, num, title, copy]) => {
              const I = Icon as typeof Truck;
              return (
                <div className="step" key={num as string}>
                  <div className="step-top">
                    <I size={25} />
                    <span>{num as string}</span>
                  </div>
                  <h3>{title as string}</h3>
                  <p>{copy as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <VehiclesWeHandle />
      <Coverage />
      <section className="container section faq-section">
        <div>
          <div className="eyebrow">COMMON QUESTIONS</div>
          <h2>
            Good questions.
            <br />
            Straight answers.
          </h2>
          <p>Know what to expect before you need us.</p>
          <Link className="text-link" to="/faq">
            All frequently asked questions <ArrowUpRight size={17} />
          </Link>
        </div>
        <FAQ limit={4} />
      </section>
      <section className="cta-banner container">
        <div>
          <div className="eyebrow light">WHEN YOU NEED A HAND</div>
          <h2>Let’s get you moving again.</h2>
          <p>Take the first step toward your next mile.</p>
        </div>
        <Link className="button" to="/contact">
          Call us <Phone size={18} />
        </Link>
      </section>
    </>
  );
}
