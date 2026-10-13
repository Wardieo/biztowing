import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
export default function FAQPage() {
  usePageMeta("Frequently Asked Questions");
  return (
    <>
      <div className="page-heading container">
        <div className="eyebrow">KNOW BEFORE YOU GO</div>
        <h1>A little clarity. A lot less stress.</h1>
        <p>Your roadside assistance questions, answered.</p>
      </div>
      <section className="container narrow section">
        <FAQ />
        <div className="question-box">
          <h3>Still have a question?</h3>
          <Link className="button" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
