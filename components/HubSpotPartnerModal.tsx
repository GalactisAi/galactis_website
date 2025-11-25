"use client";

import { trackEvent } from "@/lib/analytics";
import { getPartnerFormUrl } from "@/lib/hubspotForms";

export interface HubSpotPartnerModalProps {
  triggerText?: string;
  triggerClassName?: string;
  title?: string;
  description?: string;
  partnerType?: string;
}

export default function HubSpotPartnerModal({
  triggerText = "Apply as Partner",
  triggerClassName = "rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700",
  title,
  description,
  partnerType
}: HubSpotPartnerModalProps) {
  const handleClick = () => {
    const hubspotUrl = getPartnerFormUrl();
    trackEvent("partner_clicked", {
      source: "hubspot_redirect",
      partnerType,
    });
    window.open(hubspotUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      data-contact-trigger
      data-intent="partner"
      data-partner-type={partnerType}
      onClick={handleClick}
      className={triggerClassName}
    >
      {triggerText}
    </button>
  );
}
