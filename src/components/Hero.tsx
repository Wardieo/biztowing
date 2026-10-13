import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Phone,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { business } from "../utils/config";
const slides = [
  {
    image: "towing",
    title: (
      <>
        A little help.
        <br />
        <span>A clear road ahead.</span>
      </>
    ),
    text: "Towing and roadside assistance for the moments you didn’t plan. Find the right help, wherever the road takes you.",
    alt: "A roadside operator loading a pickup onto a tow truck",
    caption: "Towing & roadside assistance",
  },
  {
    image: "recovery",
    title: (
      <>
        Off the road.
        <br />
        <span>On your way again.</span>
      </>
    ),
    text: "Stuck in sand, mud, or an unexpected spot? Explore vehicle recovery and find your next step.",
    alt: "A driver assisting a pickup on an off-road desert route",
    caption: "Recovery, on and off the road",
  },
  {
    image: "truck",
    title: (
      <>
        Every vehicle.
        <br />
        <span>Every next mile.</span>
      </>
    ),
    text: "From everyday cars to working trucks, discover transport and assistance suited to your vehicle.",
    alt: "A tow truck parked beside an urban building",
    caption: "Vehicle transport & specialist towing",
  },
];
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    if (paused || hovered || focused) return;
    const timer = window.setTimeout(
      () => setIndex((current) => (current + 1) % slides.length),
      4000,
    );
    return () => window.clearTimeout(timer);
  }, [index, paused, hovered, focused]);
  const slide = slides[index];
  return (
    <section
      className="hero container"
      aria-label="Roadside assistance highlights"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <div className="hero-content">
        <div className="eyebrow">
          <span /> DALLAS–FORT WORTH · 24/7 ASSISTANCE
        </div>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="hero-actions">
          <Link className="button" to="/contact">
            Call us <Phone size={18} />
          </Link>
        </div>
        <span className="hero-note">{business.phone} · Sample number</span>
        <div className="hero-location">
          <MapPin size={17} />
          <span>Dallas, Texas & 36 surrounding communities</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrap">
          <img
            key={slide.image}
            className="hero-photo"
            src={`/images/${slide.image}.jpg`}
            alt={slide.alt}
            fetchPriority="high"
          />
          <span className="hero-image-label">READY FOR THE NEXT MILE.</span>
        </div>
        <div className="carousel-bottom">
          <span className="slide-caption">
            <span className="slide-number">
              0{index + 1} / 0{slides.length}
            </span>
            {slide.caption}
          </span>
          <div className="carousel-controls">
            <button
              aria-label={
                paused
                  ? "Resume automatic slideshow"
                  : "Pause automatic slideshow"
              }
              aria-pressed={paused}
              onClick={() => setPaused((current) => !current)}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button
              aria-label="Previous slide"
              onClick={() =>
                setIndex(
                  (current) => (current + slides.length - 1) % slides.length,
                )
              }
            >
              <ArrowLeft size={18} />
            </button>
            <button
              aria-label="Next slide"
              onClick={() =>
                setIndex((current) => (current + 1) % slides.length)
              }
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
