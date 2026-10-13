import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
export default function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;
  return (
    <Link className="service-card" to={`/services/${service.slug}`}>
      <div className="service-image">
        <img
          src={service.image}
          alt={service.imageAlt}
          style={{ objectPosition: service.imagePosition }}
          loading="lazy"
        />
        <span className="service-icon">
          <Icon size={23} />
        </span>
      </div>
      <div className="service-copy">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <span className="text-link">
          Explore service <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
