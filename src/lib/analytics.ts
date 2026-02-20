declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
}

export const events = {
  formStart: () => trackEvent("form_start", { form_name: "lead_capture" }),
  formSubmit: () => trackEvent("form_submit", { form_name: "lead_capture" }),
  clickCall: () => trackEvent("click_call"),
  clickEmail: () => trackEvent("click_email"),
  clickBook: () => trackEvent("click_book"),
  scrollDepth: (percent: number) =>
    trackEvent("scroll_depth", { percent_scrolled: percent }),
};
