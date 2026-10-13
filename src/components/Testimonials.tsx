import { MessageSquareText } from "lucide-react";
export default function Testimonials() {
  return (
    <section className="feedback-panel">
      <MessageSquareText size={32} />
      <div>
        <div className="eyebrow">REAL EXPERIENCES MATTER</div>
        <h3>Every journey has a story.</h3>
        <p>
          Verified customer stories will appear here once available. We believe
          trust starts with honest feedback.
        </p>
      </div>
    </section>
  );
}
