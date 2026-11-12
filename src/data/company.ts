/**
 * All company facts below come from the PT Adiba Berjaya Abadi company profile.
 * Deliberately excluded (incorrect in the profile): its logo, website URL and contact details.
 */
export const company = {
  name: "PT Adiba Berjaya Abadi",
  brand: "Alpukat Pameling",
  product: "Pameling Avocado",
  tagline: "Extra Large, Thick Flesh, Premium Quality from Malang, Indonesia.",
  about: [
    "PT Adiba Berjaya Abadi is an Indonesian trading company supplying premium jumbo avocados sourced directly from trusted local farmers, serving both local and international markets.",
    "With a mission to bring Indonesia's finest agricultural produce to consumers and business partners, we build strong partnerships with farmers — supported by carefully managed procurement, handling and distribution — so that product quality stays consistent all the way to our customers.",
  ],
  vision:
    "To become a trusted tropical fruit trading company that connects Indonesian agricultural produce with local and global markets through integrity, quality and sustainability.",
  mission: [
    "Empower and build partnerships with local farmers.",
    "Ensure consistent product quality that meets the needs of local and international markets.",
    "Promote sustainable agricultural practices.",
  ],
  quality:
    "We prioritise product safety, freshness and sustainability. Every product is handled through a carefully managed process and goes through quality checks to ensure it continues to meet the standards and requirements of local and international markets.",
  plantation: {
    title: "Centra Alpukat Pameling Nasional",
    subtitle: "National Pameling Avocado Seedling & Research Development Centre",
    text: "Located in the highlands of Wonorejo, Lawang, the Pameling Avocado Plantation specialises in cultivating premium jumbo avocados. Supported by fertile volcanic soil and sustainable farming practices, the plantation ensures consistent quality and freshness to meet the needs of both domestic and export markets.",
  },
  partnerVisits:
    "We have welcomed many international visitors who were impressed by the superior quality and distinctive taste of our jumbo avocados. Their visits reflect the growing interest and confidence of the global market in Pameling as a reliable source of premium Indonesian avocados.",
  marketSegments: [
    "Fruit distributors",
    "Supermarkets",
    "Hotels, restaurants & cafés",
    "Food & beverage industry",
    "Export",
  ],
} as const;

export const contact = {
  channel: "WhatsApp",
  display: "+62 823 8086 1495",
  href: "https://wa.me/6282380861495?text=Hello%20PT%20Adiba%20Berjaya%20Abadi%2C%20I%27m%20interested%20in%20Pameling%20avocados",
} as const;

export const qualityPillars = [
  {
    key: "qc",
    title: "Quality Control",
    text: "Every product goes through quality checks before it moves on to our partners.",
  },
  {
    key: "sustainable",
    title: "Sustainable Farming",
    text: "Cultivation on fertile volcanic highland soil with sustainable agricultural practices.",
  },
  {
    key: "traceable",
    title: "Traceable Supply",
    text: "Avocados sourced directly from trusted local farmers through managed procurement.",
  },
  {
    key: "community",
    title: "Community Development Impact",
    text: "Partnerships that empower local farming communities across Indonesia.",
  },
] as const;

/** Cultivation area development, 2022–2025 (hectares, approximate). */
export const cultivationArea = {
  period: "2022–2025",
  malangRegency: 360,
  outsideMalang: [
    { region: "Pasuruan", ha: 130 },
    { region: "Sukabumi", ha: 60 },
    { region: "Jombang", ha: 28 },
    { region: "Blitar", ha: 12 },
    { region: "Banyumas", ha: 10 },
    { region: "Jember", ha: 5 },
    { region: "Bogor", ha: 5 },
  ],
} as const;

export const totalOutsideMalang = cultivationArea.outsideMalang.reduce((sum, r) => sum + r.ha, 0);
export const totalCultivationArea = cultivationArea.malangRegency + totalOutsideMalang;

/** Key product figures from the official variety description. */
export const keyFigures = [
  { value: "579–1,300 g", label: "Weight per fruit" },
  { value: "80.7–88%", label: "Edible portion" },
  { value: "500–900 kg", label: "Yield per tree / year" },
  { value: "662–1,332", label: "Fruits per tree / year" },
] as const;

export const varietyRegistration =
  "Decree of the Minister of Agriculture of the Republic of Indonesia No. 112/Kpts/SR.120/D.2.7/7/2019";

export type SpecGroup = { title: string; rows: { label: string; value: string }[] };

export const specifications: SpecGroup[] = [
  {
    title: "Fruit",
    rows: [
      { label: "Weight per fruit", value: "579.5 – 1,300 g" },
      { label: "Fruit shape", value: "Elongated round, mango-like" },
      { label: "Fruit size", value: "Length 14.5 – 18.9 cm · Diameter 8.2 – 10.3 cm" },
      {
        label: "Skin colour",
        value: "Moderate yellowish green (RHS 138 A) — stays green when ripe",
      },
      { label: "Flesh colour", value: "Light greenish yellow (RHS 7 D)" },
      { label: "Flesh texture", value: "Finely fibrous" },
      { label: "Flavour", value: "Savoury, slightly sweet" },
      { label: "Edible portion", value: "80.7 – 88.0%" },
      { label: "Seed shape", value: "Ovate" },
      { label: "Seed colour", value: "Light orange yellow (RHS 2015 23 C)" },
    ],
  },
  {
    title: "Composition",
    rows: [
      { label: "Water content", value: "89.31%" },
      { label: "Fat content", value: "4.35%" },
      { label: "Fibre content", value: "1.75%" },
      { label: "Sugar content", value: "1.80%" },
      { label: "Protein content", value: "1.07%" },
    ],
  },
  {
    title: "Yield & Handling",
    rows: [
      { label: "Fruits per tree", value: "662 – 1,332 fruits / tree / year" },
      { label: "Yield per tree", value: "500 – 900 kg / year" },
      { label: "Shelf life at 19–26 °C", value: "5 – 7 days after harvest" },
      { label: "Flowering season", value: "October, May" },
      { label: "Harvest season", value: "March, November" },
    ],
  },
  {
    title: "Variety & Origin",
    rows: [
      {
        label: "Origin",
        value: "Wonorejo Village, Lawang District, Malang Regency, East Java",
      },
      { label: "Variety group", value: "Clone" },
      { label: "Pedigree", value: "Mother-tree selection" },
      {
        label: "Adaptation",
        value: "Medium to high altitudes in Malang Regency",
      },
      { label: "Tree height", value: "16 m" },
      { label: "Canopy shape", value: "Umbrella" },
    ],
  },
];

export const futureProducts = [
  { key: "oil", name: "Avocado Oil" },
  { key: "seedPowder", name: "Avocado Seed Powder" },
  { key: "frozen", name: "Frozen Avocado" },
] as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality & Export" },
  { to: "/gallery", label: "Gallery" },
] as const;
