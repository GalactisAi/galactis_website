// Company logo data with URLs from reliable sources
export const companyLogos = [
  {
    name: "ICICI Bank",
    logo: "https://logo.clearbit.com/icicibank.com",
    fallbackColor: "#F47920"
  },
  {
    name: "HDFC Bank",
    logo: "https://logo.clearbit.com/hdfcbank.com",
    fallbackColor: "#004C8F"
  },
  {
    name: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
    fallbackColor: "#007CC2"
  },
  {
    name: "TCS",
    logo: "https://logo.clearbit.com/tcs.com",
    fallbackColor: "#001489"
  },
  {
    name: "Apollo Hospitals",
    logo: "https://logo.clearbit.com/apollohospitals.com",
    fallbackColor: "#00A651"
  },
  {
    name: "TVS Motors",
    logo: "https://logo.clearbit.com/tvsmotor.com",
    fallbackColor: "#E31E24"
  },
  {
    name: "Airtel",
    logo: "https://logo.clearbit.com/airtel.in",
    fallbackColor: "#ED1C24"
  },
  {
    name: "Ashok Leyland",
    logo: "https://logo.clearbit.com/ashokleyland.com",
    fallbackColor: "#003DA5"
  },
  {
    name: "LOM Logistics",
    logo: "https://logo.clearbit.com/lomlogistics.com",
    fallbackColor: "#0066CC"
  },
  {
    name: "Corpay",
    logo: "https://logo.clearbit.com/corpay.com",
    fallbackColor: "#00A3E0"
  },
];

export function getCompanyLogo(companyName: string) {
  return companyLogos.find(
    (logo) => logo.name.toLowerCase() === companyName.toLowerCase()
  );
}
