"use client";

import { getCompanyLogo } from "@/lib/companyLogos";
import { useState } from "react";

type CompanyLogoProps = {
  company: string;
  size?: number;
  className?: string;
};

export default function CompanyLogo({
  company,
  size = 48,
  className = "",
}: CompanyLogoProps) {
  const logoData = getCompanyLogo(company);
  const [imageError, setImageError] = useState(false);

  if (!logoData || imageError) {
    // Fallback: colored circle with company initial
    const initial = company.charAt(0).toUpperCase();
    const color = logoData?.fallbackColor || "#6B7280";

    return (
      <div
        className={`flex items-center justify-center rounded-lg font-bold text-white shadow-sm ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          fontSize: size * 0.4,
        }}
        aria-label={company}
      >
        {initial}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ${className}`}
      style={{ width: size, height: size, padding: size * 0.15 }}
    >
      <img
        src={logoData.logo}
        alt={`${company} logo`}
        className="h-full w-full object-contain"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    </div>
  );
}
