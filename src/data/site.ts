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

export const NAV = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why NIR Studio', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

// Domaines d'application, hérités de l'offre NIRLAB.
export const APPLICATIONS = [
  {
    title: 'Law Enforcement',
    text: 'Identify and quantify narcotics and explosives on-site within seconds. Point-and-shoot, made for field officers.',
    icon: 'shield',
  },
  {
    title: 'Drug Checking',
    text: 'Instant purity and composition analysis for harm reduction programs and forensic labs.',
    icon: 'flask',
  },
  {
    title: 'Pharma',
    text: 'Raw material identification and quality control, from goods-in to production line.',
    icon: 'pill',
  },
  {
    title: 'Polymers & Recycling',
    text: 'Sort and verify plastics and recycled materials instantly, directly on the line.',
    icon: 'recycle',
  },
  {
    title: 'Agriculture & Feed',
    text: 'Moisture, protein and fat analysis in the field, without sending samples to the lab.',
    icon: 'leaf',
  },
  {
    title: 'Your industry',
    text: 'A measurement problem we have not solved yet? That is exactly what NIR Studio is for.',
    icon: 'sparkles',
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

export const VALUES = [
  {
    title: 'Trustable data',
    text: 'Lab-grade precision in the palm of your hand: the NIRLAB system is the first handheld NIR solution proven at ISO 17025 level.',
    icon: 'check',
  },
  {
    title: 'Automate',
    text: 'Replace slow send-to-lab loops with instant on-site analysis embedded in your existing processes.',
    icon: 'bolt',
  },
  {
    title: 'Reduce',
    text: 'Cut analysis time from days to seconds and reduce costs per measurement dramatically.',
    icon: 'trend',
  },
  {
    title: 'Scale',
    text: 'One platform, unlimited applications: add new substances, sites and users as your needs grow.',
    icon: 'layers',
  },
];

export const QUOTE = {
  text: 'It is unique to the world to be capable of generating data with a handheld device that is on equal level with the data of a gold standard laboratory. We have proven this with the ISO 17025 certification of the NIRLAB system.',
  author: 'Prof. Pierre Esseiva',
  role: 'NIRLAB, Co-Founder',
};
