import heroOrchard from "@/assets/hero-avocado-orchard.jpg";
import logoFull from "@/assets/images/logo-full.png.asset.json";
import logoEmblem from "@/assets/images/logo-emblem.png.asset.json";
import plantationAerial from "@/assets/images/plantation-aerial-hd.jpg";
import nursery from "@/assets/images/nursery-hd.jpg";
import inHand from "@/assets/images/pameling-in-hand-hd.jpg";
import cut from "@/assets/images/pameling-cut-hd.jpg";
import crates from "@/assets/images/harvest-crates-hd.jpg";
import onTree from "@/assets/images/pameling-on-tree-hd.jpg";
import cluster from "@/assets/images/pameling-cluster-hd.jpg";
import visit1 from "@/assets/images/visit-1-hd.jpg";
import visit2 from "@/assets/images/visit-2-hd.jpg";
import visit3 from "@/assets/images/visit-3-hd.jpg";
import visit4 from "@/assets/images/visit-4-hd.jpg";
import seedPowder from "@/assets/images/seed-powder-hd.jpg";
import frozen from "@/assets/images/frozen-avocado-hd.jpg";
import oil from "@/assets/images/avocado-oil-hd.jpg";

/** Official PT Adiba Berjaya Abadi logo (the only authorised logo). */
export const logo = {
  full: { src: logoFull.url, width: 900, height: 429 },
  emblem: { src: logoEmblem.url, width: 600, height: 212 },
};

/** Generated atmospheric image — not a photo of company property. */
export const hero = { src: heroOrchard, width: 1920, height: 1088 };

/** Company-profile photos, restored/sharpened for clarity (content unchanged). */
export const photos = {
  plantationAerial: { src: plantationAerial, width: 1920, height: 640 },
  nursery: { src: nursery, width: 1600, height: 1200 },
  inHand: { src: inHand, width: 1920, height: 1088 },
  cut: { src: cut, width: 1280, height: 1280 },
  crates: { src: crates, width: 864, height: 1536 },
  onTree: { src: onTree, width: 864, height: 1536 },
  cluster: { src: cluster, width: 704, height: 944 },
  visit1: { src: visit1, width: 1440, height: 810 },
  visit2: { src: visit2, width: 1440, height: 810 },
  visit3: { src: visit3, width: 1440, height: 810 },
  visit4: { src: visit4, width: 1440, height: 810 },
  seedPowder: { src: seedPowder, width: 1200, height: 768 },
  frozen: { src: frozen, width: 1600, height: 792 },
  oil: { src: oil, width: 1200, height: 912 },
};
