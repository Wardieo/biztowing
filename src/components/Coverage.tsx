import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { serviceAreas } from "../data/coverage";
export default function Coverage() {
  const [query, setQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Dallas");
  const matchingAreas = serviceAreas
    .map((area) => ({
      ...area,
      cities: area.cities.filter((city) =>
        city.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    }))
    .filter((area) => area.cities.length);
  return (
    <section
      className="service-areas section container"
      id="service-areas"
      aria-labelledby="service-areas-title"
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">SERVICE AREAS</div>
          <h2 id="service-areas-title">Close to home. Across the Metroplex.</h2>
          <p>
            Explore 36 communities across the Metroplex. Find your city and
            share where you need help.
          </p>
        </div>
        <Link className="outline-button" to="/contact">
          Call us <Phone size={18} />
        </Link>
      </div>
      <div className="areas-layout">
        <div className="areas-directory">
          <label className="search area-search">
            <Search size={19} />
            <input
              aria-label="Search service areas"
              placeholder="Find your city…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="area-regions" aria-live="polite">
            {matchingAreas.map((area) => (
              <div className="area-region" key={area.region}>
                <h3>{area.region}</h3>
                <div className="area-tags">
                  {area.cities.map((city) => (
                    <button
                      type="button"
                      className={selectedCity === city ? "selected" : ""}
                      aria-pressed={selectedCity === city}
                      onClick={() => setSelectedCity(city)}
                      key={city}
                    >
                      <MapPin size={14} />
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {!matchingAreas.length && (
              <p className="area-empty">
                Don’t see your city? Call us with your pickup location to
                confirm coverage.
              </p>
            )}
          </div>
        </div>
        <div className="area-map-panel">
          <div className="coverage-map">
            <iframe
              title={`${selectedCity}, Texas service area map`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${selectedCity}, Texas`)}&z=11&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-label">
              <span className="orange">
                <MapPin size={23} />
              </span>
              <div>
                <strong>{selectedCity}, Texas</strong>
                <small>Select a city to explore the area</small>
              </div>
            </div>
          </div>
          <div className="area-map-copy">
            <h3>Assistance in your area.</h3>
            <p>
              From neighborhood streets to highway breakdowns, provide an exact
              address or nearby landmark.
            </p>
            <Link className="text-link" to="/contact">
              Call us <Phone size={18} />
            </Link>
          </div>
        </div>
      </div>
      <p className="field-note">
        Illustrative service areas. Availability, travel distance, and suitable
        equipment must be confirmed with your provider.
      </p>
    </section>
  );
}
