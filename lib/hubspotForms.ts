const SALES_FORM_FALLBACK = "https://41irce.share-na2.hsforms.com/2bHmeo6CkRbSbK86J0ReqTQ";
const PARTNER_FORM_FALLBACK = "https://41irce.share-na2.hsforms.com/2m3ZauQ5XQBGq3OEF4HnhQQ";

export function getSalesFormUrl() {
  return process.env.NEXT_PUBLIC_HUBSPOT_SALES_URL?.trim() || SALES_FORM_FALLBACK;
}

export function getPartnerFormUrl() {
  return process.env.NEXT_PUBLIC_HUBSPOT_PARTNER_URL?.trim() || PARTNER_FORM_FALLBACK;
}

