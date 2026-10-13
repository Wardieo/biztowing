import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Route } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
export default function About() {
  usePageMeta("About Us");
  return (
    <>
      <div className="page-heading container">
        <div className="eyebrow">BUILT AROUND THE PERSON BEHIND THE WHEEL</div>
        <h1>Every mile deserves peace of mind.</h1>
        <p>
          A clear, human approach to finding help when your journey takes a
          turn.
        </p>
      </div>
      <section className="container detail-layout section">
        <img
          className="detail-photo"
          src="/images/truck.jpg"
          alt="Roadside recovery truck"
        />
        <div>
          <div className="eyebrow">OUR APPROACH</div>
          <h2>
            A helping hand.
            <br />A clearer road ahead.
          </h2>
          <p>
            BizTowing is a demonstration of a better assistance experience:
            straightforward service information, an easy way to share your
            location, and room for the details that matter.
          </p>
          <p>
            We put clarity first. Before any work begins, a live provider should
            confirm coverage, equipment, price, and next steps. This frontend is
            ready to connect to that workflow.
          </p>
          <Link className="button" to="/services">
            Discover our services <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="container steps section">
        {[
          [
            ShieldCheck,
            "Safety first",
            "Make thoughtful decisions for you, your passengers, and your vehicle.",
          ],
          [
            HeartHandshake,
            "People before problems",
            "Keep communication clear and treat every situation with care.",
          ],
          [
            Route,
            "A way forward",
            "Understand your options so you can choose your next step.",
          ],
        ].map(([Icon, title, copy]) => {
          const I = Icon as typeof Route;
          return (
            <div className="step" key={title as string}>
              <I className="orange" size={30} />
              <h3>{title as string}</h3>
              <p>{copy as string}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}
