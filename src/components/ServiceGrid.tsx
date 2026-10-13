import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
export default function ServiceGrid({
  items = services,
}: {
  items?: typeof services;
}) {
  return (
    <div className="service-grid">
      {items.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
