// Contenu centralisé de la page nirstudio.com.
// ⚠️ Tout le copy est un DRAFT à faire valider par Guillermo / 908 Devices.

export const SITE = {
  name: 'NIR Studio',
  domain: 'https://www.nirstudio.com',
  tagline: 'Custom NIR solutions, on demand',
  description:
    'NIR Studio builds tailored near-infrared spectroscopy applications on demand: from data acquisition to production-ready models. By the team behind NIRLAB, now part of 908 Devices.',
  parent: {
    name: '908 Devices',
    url: 'https://908devices.com',
  },
  nirlab: {
    name: 'NIRLAB',
    url: 'https://nirlab.com',
  },
  // Email de contact : placeholder, à confirmer par le client.
  contactUrl: 'https://908devices.com/contact/',
};

// Structure de page validée par Guillermo : Solution / Hardware / Applications.
export const NAV = [
  { label: 'Solution', href: '#solution' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Applications', href: '#applications' },
  { label: 'Contact', href: '#contact' },
];

// Les 3 applications de NIR Studio : Agriculture, Food, Counterfeit.
export const APPLICATIONS = [
  {
    title: 'Agriculture',
    text: 'Moisture, protein, fat and oil content measured directly in the field or on the farm: crops, feed, forage and soil amendments, without sending samples to the lab.',
    icon: 'leaf',
  },
  {
    title: 'Food',
    text: 'Quality control and authenticity along the whole chain: incoming goods, production line and final product. From olive oil to dairy, results in seconds.',
    icon: 'apple',
  },
  {
    title: 'Counterfeit',
    text: 'Verify that a product is what it claims to be. Detect counterfeit and adulterated materials instantly, from pharmaceuticals to branded goods.',
    icon: 'shield',
  },
];

// Section Hardware : le device + l'app, copy hérité de nirlab.com (FIELDLAB / NIRLIGHT).
export const HARDWARE = [
  {
    title: 'Handheld NIR spectrometer',
    text: 'The world’s best performing handheld NIR device: ultra-light, robust, wireless and IP67 rated. Point, shoot, done.',
    icon: 'bolt',
  },
  {
    title: 'Mobile and web app',
    text: 'Results on your phone in seconds, synced to a cloud platform where your team manages measurements, users and devices.',
    icon: 'layers',
  },
  {
    title: 'Custom models built in',
    text: 'Your NIR Studio application ships pre-loaded on the device: your substances, your matrices, your thresholds.',
    icon: 'check',
  },
];

export const STEPS = [
  {
    n: '01',
    title: 'Define',
    text: 'We scope your measurement problem together: substances, matrices, accuracy targets and field conditions.',
  },
  {
    n: '02',
    title: 'Develop',
    text: 'Our chemometricians build and validate your custom model on lab-grade reference data, with a seamless workflow from acquisition to production.',
  },
  {
    n: '03',
    title: 'Deploy',
    text: 'Your teams get a handheld device and an app tuned to your use case. Results in seconds, anywhere, synced to the cloud.',
  },
];

export const QUOTE = {
  text: 'It is unique to the world to be capable of generating data with a handheld device that is on equal level with the data of a gold standard laboratory. We have proven this with the ISO 17025 certification of the NIRLAB system.',
  author: 'Prof. Pierre Esseiva',
  role: 'NIRLAB, Co-Founder',
};
