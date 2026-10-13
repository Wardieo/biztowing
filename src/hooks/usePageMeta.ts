import { useEffect } from "react";
export function usePageMeta(
  title: string,
  description = "Explore towing, vehicle recovery, and roadside assistance in Dallas, Texas. Prepare an assistance request with your vehicle and location details.",
) {
  useEffect(() => {
    document.title = `${title} | BizTowing`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
}
