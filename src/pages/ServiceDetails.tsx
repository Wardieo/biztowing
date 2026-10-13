import { Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
import ServiceGrid from "../components/ServiceGrid";
export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  usePageMeta(service?.name || "Service not found");
  if (!service)
    return (
      <div className="container page-heading">
        <h1>Service not found.</h1>
        <Link className="button" to="/services">
          Explore services
        </Link>
      </div>
    );
  const Icon = service.icon;
  return (
    <>
      <section className="container detail-layout section">
        <div>
          <Link className="breadcrumb" to="/services">
            Our services <ChevronRight size={15} /> {service.name}
          </Link>
          <div className="eyebrow">
            <Icon size={19} />
            {service.category.toUpperCase()}
          </div>
          <h1>{service.name}</h1>
          <p className="lead">{service.description}</p>
          <p>
            Every situation is different. Share your vehicle details and
            location so your service provider can assess the job, confirm
            suitable equipment, and explain your options.
          </p>
          <ul className="checklist">
            {[
              "Vehicle-specific assistance",
              "Pickup and destination details in one place",
              "Confirm pricing before work begins",
            ].map((t) => (
              <li key={t}>
                <Check size={18} />
                {t}
              </li>
            ))}
          </ul>
          <Link className="button" to="/contact">
            Call us <Phone size={18} />
          </Link>
          <p className="field-note">
            Availability and pricing must be confirmed by your provider.
          </p>
        </div>
        <img
          className="detail-photo"
          src={service.image}
          alt={service.imageAlt}
          style={{ objectPosition: service.imagePosition }}
        />
      </section>
      <section className="container section">
        <div className="eyebrow">MORE WAYS TO KEEP MOVING</div>
        <h2>Related services</h2>
        <ServiceGrid
          items={services
            .filter((s) => s.category === service.category && s.slug !== slug)
            .slice(0, 3)}
        />
      </section>
    </>
  );
}
