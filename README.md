# BizTowing — roadside assistance frontend

React 19, TypeScript, Vite, Tailwind CSS 4, React Router, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
npm run lint
```

## Design

The interface uses an off-white canvas, charcoal typography, muted green surfaces, and restrained orange accents. A split hero pairs large readable text with a four-second photo carousel. Shared styling covers all routes, including service details, the searchable 36-city Dallas–Fort Worth directory, eight vehicle categories, FAQs, and forms. Mobile navigation includes an assistance link and closes with Escape.

## Structure

- `src/components/`: navigation, footer, hero carousel, service cards/grid, service-area directory, vehicle categories, FAQ, feedback, and reusable forms.
- `src/pages/`: Home, Services, Service Details, About, Contact, FAQ, and Request Assistance.
- `src/layouts/`: shared layout and navigation scroll reset.
- `src/hooks/`: page titles and descriptions.
- `src/services/`: replaceable submission adapter.
- `src/data/`: all 22 services and FAQs.
- `src/utils/`: shared business configuration.
- `src/assets/`: original project assets.
- `public/images/`: downloaded, optimized photographs served locally.

## Before a live launch

This is a complete frontend demonstration, with no live dispatch or messaging backend. Forms validate and prepare details but do not transmit or persist customer information. Replace `prepareSubmission` in `src/services/submissions.ts` with your API integration, then update the demo notices and success messages to reflect actual server-confirmed behavior. Add server-side validation, abuse protection, and appropriate privacy handling.

Replace the sample telephone and brand configuration in `src/utils/config.ts`, email in the Contact page, and illustrative coverage with the actual business details. Phone links currently use a fictional North American 555 number. No customer reviews, certifications, guarantees, or response-time statistics have been invented; the reusable Testimonials component displays an honest empty state.

Google Maps uses an embedded map, updated with the entered pickup address or browser geolocation. It requires an internet connection. Precise map-click selection and Places autocomplete can be added using a configured Google Maps API key. Geolocation requires HTTPS or localhost and user permission.

Configure your static host to serve `index.html` for React Router routes, including `/services/:slug`. Deploy the `dist/` directory after building. Page metadata changes client-side; use prerendering or SSR if crawler-specific service-page indexing is required.

The interface supports small screens, keyboard focus, native FAQ accordions, reduced-motion preferences, lazy-loaded service photography, and a hero carousel that advances every four seconds, with manual navigation, pause/resume controls, and a pause during hover or keyboard interaction. Google Fonts falls back to local sans-serif fonts if unavailable.

## Photo sources

Photos are downloaded from Pexels and served locally, under the [Pexels license](https://www.pexels.com/license/).

- Towing: [Jonathan Reynaga](https://www.pexels.com/photo/a-car-on-a-tow-truck-17429097/)
- Tow truck: [Erik Mclean](https://www.pexels.com/photo/tow-truck-parked-outside-building-7781262/)
- Off-road recovery: [daria usanova](https://www.pexels.com/photo/man-towing-a-pick-up-truck-on-desert-road-5209221/)
- Mobile tire service: [Mykola Volkov](https://www.pexels.com/photo/black-tires-in-the-truck-8660855/)

Service cards use category-specific local photography, accurate alt text, and focal-point cropping configured in `src/data/serviceImages.ts`. Additional source links are recorded in [SERVICE_PHOTOS.md](src/assets/SERVICE_PHOTOS.md).
# biztowing
