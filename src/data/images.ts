import heroOrchard from "@/assets/hero-avocado-orchard.jpg";
import logoFull from "@/assets/images/logo-full.png.asset.json";
import logoEmblem from "@/assets/images/logo-emblem.png.asset.json";
import plantationAerial from "@/assets/images/plantation-aerial.webp.asset.json";
import nursery from "@/assets/images/nursery.webp.asset.json";
import inHand from "@/assets/images/pameling-in-hand.webp.asset.json";
import cut from "@/assets/images/pameling-cut.webp.asset.json";
import crates from "@/assets/images/harvest-crates.webp.asset.json";
import onTree from "@/assets/images/pameling-on-tree.webp.asset.json";
import cluster from "@/assets/images/pameling-cluster.png.asset.json";
import visit1 from "@/assets/images/visit-1.webp.asset.json";
import visit2 from "@/assets/images/visit-2.webp.asset.json";
import visit3 from "@/assets/images/visit-3.webp.asset.json";
import visit4 from "@/assets/images/visit-4.webp.asset.json";
import seedPowder from "@/assets/images/seed-powder.webp.asset.json";
import frozen from "@/assets/images/frozen-avocado.webp.asset.json";
import oil from "@/assets/images/avocado-oil.webp.asset.json";

/** Official PT Adiba Berjaya Abadi logo (the only authorised logo). */
export const logo = {
  full: { src: logoFull.url, width: 900, height: 429 },
  emblem: { src: logoEmblem.url, width: 600, height: 212 },
};

/** Generated atmospheric image — not a photo of company property. */
export const hero = { src: heroOrchard, width: 1920, height: 1088 };

export const photos = {
  plantationAerial: { src: plantationAerial.url, width: 2825, height: 655 },
  nursery: { src: nursery.url, width: 800, height: 601 },
  inHand: { src: inHand.url, width: 720, height: 405 },
  cut: { src: cut.url, width: 640, height: 640 },
  crates: { src: crates.url, width: 450, height: 800 },
  onTree: { src: onTree.url, width: 315, height: 560 },
  cluster: { src: cluster.url, width: 599, height: 800 },
  visit1: { src: visit1.url, width: 720, height: 405 },
  visit2: { src: visit2.url, width: 720, height: 405 },
  visit3: { src: visit3.url, width: 720, height: 405 },
  visit4: { src: visit4.url, width: 720, height: 405 },
  seedPowder: { src: seedPowder.url, width: 375, height: 240 },
  frozen: { src: frozen.url, width: 800, height: 396 },
  oil: { src: oil.url, width: 488, height: 372 },
};
