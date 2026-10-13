import { useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  LoaderCircle,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import { services } from "../data/services";
import { prepareSubmission } from "../services/submissions";
function useSubmission() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    try {
      await prepareSubmission(
        Object.fromEntries(new FormData(e.currentTarget)),
      );
      setState("done");
    } catch {
      setState("error");
    }
  }
  return { state, submit };
}
export function RequestAssistanceForm() {
  const [params] = useSearchParams();
  const { state, submit } = useSubmission();
  const [location, setLocation] = useState(params.get("location") || "");
  const [mapLocation, setMapLocation] = useState(
    params.get("location") || "Dallas, Texas",
  );
  const [notice, setNotice] = useState("");
  const [service, setService] = useState(params.get("service") || "");
  function locate() {
    if (!navigator.geolocation) {
      setNotice("Location is unavailable. Please enter your address.");
      return;
    }
    setNotice("Finding your location…");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const value = `${p.coords.latitude.toFixed(6)}, ${p.coords.longitude.toFixed(6)}`;
        setLocation(value);
        setMapLocation(value);
        setNotice("Location added. Please include a nearby landmark.");
      },
      () => setNotice("Location access failed. Please enter your address."),
      { timeout: 10000 },
    );
  }
  return (
    <form className="form-card" onSubmit={submit}>
      <h2>Tell us how we can help.</h2>
      <p>Prepare your details. A few minutes now makes the next step easier.</p>
      <div className="form-grid">
        <label>
          Full name
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Your full name"
            maxLength={100}
          />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="Your callback number"
            minLength={7}
            maxLength={30}
          />
        </label>
        <label className="full">
          What do you need?
          <select
            name="service"
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="full">
          Vehicle details
          <input
            name="vehicle"
            required
            placeholder="Make, model, year, and any important details"
            maxLength={250}
          />
        </label>
        <label className="full">
          Pickup location
          <input
            name="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Address, road, or nearby landmark"
            maxLength={500}
          />
        </label>
        <div className="full location-tools">
          <button type="button" onClick={locate}>
            <Navigation size={16} /> Use my location
          </button>
          <button
            type="button"
            onClick={() => location.trim() && setMapLocation(location)}
          >
            <MapPin size={16} /> View on map
          </button>
        </div>
        {notice && (
          <p className="full" role="status">
            {notice}
          </p>
        )}
        <iframe
          className="full location-map"
          title="Pickup location Google Map"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(mapLocation)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="full field-note">
          Enter an address or use your location, then select “View on map” to
          confirm the area.
        </p>
        {(!service ||
          services.find((s) => s.slug === service)?.category !==
            "Roadside") && (
          <label className="full">
            Destination (for towing or transport)
            <input
              name="destination"
              placeholder="Preferred drop-off address, if known"
              maxLength={500}
            />
          </label>
        )}
        <label className="full">
          Anything else we should know?
          <textarea
            name="notes"
            placeholder="Vehicle condition, access restrictions, or other details"
            rows={4}
            maxLength={2000}
          />
        </label>
      </div>
      <p className="demo-note">
        Frontend demo: this form prepares a request only. It does not contact a
        provider or dispatch assistance.
      </p>
      <button className="button" disabled={state === "loading"}>
        {state === "loading" ? (
          <>
            <LoaderCircle className="spin" size={18} /> Preparing…
          </>
        ) : (
          <>
            Prepare assistance request <ArrowUpRight size={18} />
          </>
        )}
      </button>
      {state === "done" && (
        <div className="success" role="status">
          <CheckCircle2 /> Your details are prepared. No request has been sent.
          Connect a dispatch API to enable live submissions.
        </div>
      )}
      {state === "error" && (
        <p role="alert">Unable to prepare your request. Please try again.</p>
      )}
    </form>
  );
}
export function ContactForm() {
  const { state, submit } = useSubmission();
  return (
    <form className="form-card" onSubmit={submit}>
      <h2>Let’s talk.</h2>
      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="full">
          Message
          <textarea name="message" rows={6} required maxLength={2000} />
        </label>
      </div>
      <p className="demo-note">Demo only. Messages are not sent or stored.</p>
      <button className="button" disabled={state === "loading"}>
        {state === "loading" ? "Preparing…" : "Prepare message"}
        <ArrowUpRight size={18} />
      </button>
      {state === "done" && (
        <p className="success" role="status">
          Message prepared. Connect a backend to send it.
        </p>
      )}
      {state === "error" && (
        <p role="alert">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
