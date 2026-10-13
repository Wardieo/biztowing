import {
  Car,
  Truck,
  Bike,
  Zap,
  Caravan,
  Container,
  Bus,
  CarFront,
} from "lucide-react";
export const vehicles = [
  {
    name: "Cars & sedans",
    description: "Everyday commuters, compact cars, and family sedans.",
    icon: Car,
    service: "Emergency Towing",
  },
  {
    name: "SUVs & pickup trucks",
    description: "Crossovers, full-size SUVs, and light-duty pickups.",
    icon: CarFront,
    service: "Flatbed Towing",
  },
  {
    name: "Motorcycles",
    description: "Street bikes, touring motorcycles, and scooters.",
    icon: Bike,
    service: "Motorcycle Towing",
  },
  {
    name: "Electric & hybrid vehicles",
    description: "Vehicle-specific support for electric and hybrid rides.",
    icon: Zap,
    service: "EV Roadside Assistance",
  },
  {
    name: "Vans & fleet vehicles",
    description: "Passenger vans, delivery vehicles, and business fleets.",
    icon: Bus,
    service: "Vehicle Transport",
  },
  {
    name: "Commercial & heavy trucks",
    description:
      "Working trucks and larger vehicles requiring specialist equipment.",
    icon: Truck,
    service: "Heavy-Duty Towing",
  },
  {
    name: "RVs & trailers",
    description: "Motorhomes, travel trailers, and recreational vehicles.",
    icon: Caravan,
    service: "RV & Trailer Towing",
  },
  {
    name: "Equipment & machinery",
    description: "Non-vehicle loads and equipment needing planned transport.",
    icon: Container,
    service: "Non-Vehicle & Equipment Towing",
  },
];
