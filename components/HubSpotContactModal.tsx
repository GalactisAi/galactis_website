"use client";

import { trackEvent } from "@/lib/analytics";
import { getSalesFormUrl } from "@/lib/hubspotForms";

export interface HubSpotContactModalProps {
  triggerText?: string;
  triggerClassName?: string;
  title?: string;
  description?: string;
}

export default function HubSpotContactModal({
  triggerText = "Contact Sales",
  triggerClassName = "rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700",
  title,
  description,
}: HubSpotContactModalProps) {
  const handleClick = () => {
    const hubspotUrl = getSalesFormUrl();
    trackEvent("contact_clicked", { source: "hubspot_redirect" });
    window.open(hubspotUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      data-contact-trigger
      data-intent="sales"
      onClick={handleClick}
      className={triggerClassName}
    >
      {triggerText}
    </button>
  );
}
