import { useState } from "react";
import { Search } from "lucide-react";
import ServiceGrid from "../components/ServiceGrid";
import { services } from "../data/services";
import { usePageMeta } from "../hooks/usePageMeta";
export default function Services() {
  usePageMeta("Our Services");
  const [category, setCategory] = useState("All services");
  const [query, setQuery] = useState("");
  const items = services.filter(
    (s) =>
      (category === "All services" || s.category === category) &&
      s.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <div className="page-heading container">
        <div className="eyebrow">WHATEVER THE ROAD THROWS YOUR WAY</div>
        <h1>The right help for every ride.</h1>
        <p>Towing, recovery, and roadside support. Explore all 22 services.</p>
      </div>
      <section className="container section services-page">
        <div className="filter-row">
          <div className="filter-tabs">
            {[
              "All services",
              "Towing",
              "Roadside",
              "Recovery",
              "Transport",
            ].map((c) => (
              <button
                className={category === c ? "active" : ""}
                onClick={() => setCategory(c)}
                key={c}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={18} />
            <input
              aria-label="Search services"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a service"
            />
          </label>
        </div>
        <p className="results" aria-live="polite">
          {items.length} services
        </p>
        <ServiceGrid items={items} />
        {!items.length && (
          <div className="empty-state">
            No matching services. Try another search or category.
          </div>
        )}
      </section>
    </>
  );
}
