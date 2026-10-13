import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQPage from "./pages/FAQPage";
import Request from "./pages/Request";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="request" element={<Request />} />
          <Route
            path="*"
            element={
              <div className="container page-heading">
                <h1>This road doesn’t lead anywhere.</h1>
                <Link className="button" to="/">
                  Back to home
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
