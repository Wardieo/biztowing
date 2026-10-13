import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { vehicles } from "../data/vehicles";
import { services } from "../data/services";
export default function VehiclesWeHandle() {
  return (
    <section className="vehicles-section" aria-labelledby="vehicles-title">
      <div className="container section">
        <div className="section-heading">
          <div>
            <div className="eyebrow light">YOUR VEHICLE, YOUR WAY</div>
            <h2 id="vehicles-title">Vehicles we handle.</h2>
            <p>
              From your daily driver to your working fleet. Find the right fit.
            </p>
          </div>
          <Link className="vehicles-cta outline-button" to="/contact">
            Call us <Phone size={18} />
          </Link>
        </div>
        <div className="vehicle-grid">
          {vehicles.map((vehicle) => {
            const Icon = vehicle.icon;
            const service = services.find(
              (item) => item.name === vehicle.service,
            );
            return (
              <Link
                className="vehicle-card"
                to={service ? `/services/${service.slug}` : "/services"}
                key={vehicle.name}
              >
                <div className="vehicle-card-top">
                  <span className="vehicle-icon">
                    <Icon size={32} strokeWidth={1.5} />
                  </span>
                  <ArrowUpRight size={19} />
                </div>
                <h3>{vehicle.name}</h3>
                <p>{vehicle.description}</p>
                <span className="text-link">
                  Explore assistance <ArrowUpRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
        <p className="vehicle-note">
          Share your vehicle’s make, model, weight, and condition so your
          provider can confirm the appropriate equipment.
        </p>
      </div>
    </section>
  );
}
