import { faqs } from "../data/services";
import { Plus } from "lucide-react";
export default function FAQ({ limit = faqs.length }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faqs.slice(0, limit).map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Plus size={20} />
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
