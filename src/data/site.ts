// Contenu centralisé du site nirstudio.com.
// ⚠️ Tout le copy est un DRAFT à faire valider par Guillermo / 908 Devices.
// Mots-clés SEO issus de la recherche du 13/07 (voir SEO.md).

export const SITE = {
  name: 'NIR Studio',
  domain: 'https://www.nirstudio.com',
  tagline: 'Custom NIR solutions, on demand',
  description:
    'NIR Studio builds custom NIR spectroscopy applications on demand: chemometric model development, handheld NIR spectrometer and cloud platform. By the team behind NIRLAB, now part of 908 Devices.',
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

// Structure validée par Guillermo : Solution / Hardware / Applications (pages séparées).
export const NAV = [
  { label: 'Solution', href: '/solution' },
  { label: 'Hardware', href: '/hardware' },
  { label: 'Applications', href: '/applications' },
  { label: 'Contact', href: '/#contact' },
];

// Les 3 applications : Agriculture, Food, Counterfeit. Une page SEO par application.
export const APPLICATIONS = [
  {
    slug: 'agriculture',
    title: 'Agriculture',
    icon: 'leaf',
    // Mot-clé principal : portable NIR analyzer for agriculture / grain analysis
    metaTitle: 'Portable NIR Analyzer for Agriculture & Feed | NIR Studio',
    metaDescription:
      'Measure moisture, protein, oil and starch in grain, feed and forage in seconds with a handheld NIR analyzer. Custom calibrations for your crops, without sending samples to the lab.',
    h1: 'Portable NIR analysis for agriculture and feed',
    teaser:
      'NIR Studio builds custom models for soil, plant tissue, harvested crops and manure, trained on your fields, your crops and your local conditions. Measure nutrients, composition and quality on-site, without waiting on lab turnaround.',
    intro:
      'Grain traders, feed mills and farmers make quality decisions every day. NIR Studio puts a portable NIR analyzer in your pocket, calibrated for your crops and your quality parameters: results in seconds, at intake, in the field or on the line.',
    measures: ['Moisture', 'Protein', 'Fat & oil', 'Starch', 'Fiber (ADF/NDF)', 'Ash'],
    useCases: [
      {
        title: 'Grain intake and trading',
        text: 'Grade incoming and outgoing grain in real time: protein, moisture and oil at the truck, not two days later at the lab.',
      },
      {
        title: 'Feed and forage quality',
        text: 'Check rations, silage and raw ingredients on the farm or at the mill, and adjust formulations immediately.',
      },
      {
        title: 'Harvest decisions',
        text: 'Measure crop maturity and dry matter in the field to pick the right harvest window.',
      },
    ],
  },
  {
    slug: 'food',
    title: 'Food',
    icon: 'apple',
    // Mots-clés : food fraud detection / food authenticity testing / NIR food quality control
    metaTitle: 'Food Fraud Detection & Quality Control with NIR | NIR Studio',
    metaDescription:
      'Detect food fraud and control quality in seconds with handheld NIR spectroscopy: olive oil adulteration, incoming goods inspection, authenticity testing along your whole supply chain.',
    h1: 'Food authenticity and quality control, in seconds',
    teaser:
      'From olive oil to salmon, cheese to meat, NIR Studio builds a model trained on your specific product and supply chain. Check quality and authenticity at intake or on the line, in seconds, without sending samples to a lab.',
    intro:
      'Food fraud costs the industry billions and one recall can cost a brand everything. NIR Studio builds food authenticity and quality applications on handheld NIR: verify incoming goods, monitor production and confirm the final product matches its label, without a lab.',
    measures: ['Fat & oil content', 'Water content', 'Protein', 'Sugar', 'Adulterants', 'Authenticity match'],
    useCases: [
      {
        title: 'Incoming goods inspection',
        text: 'Verify every delivery against specification in seconds: oils, dairy powders, spices, sweeteners and more.',
      },
      {
        title: 'Adulteration screening',
        text: 'Detect diluted olive oil, stretched spices or substituted ingredients before they enter production.',
      },
      {
        title: 'Production and final product',
        text: 'Monitor fat, water or sugar content on the line and confirm the finished product matches its claim.',
      },
    ],
  },
  {
    slug: 'counterfeit',
    title: 'Counterfeit',
    icon: 'shield',
    // Mots-clés : counterfeit detection / product authentication / brand protection
    metaTitle: 'Counterfeit Detection & Product Authentication | NIR Studio',
    metaDescription:
      'Authenticate products and detect counterfeits on-site in seconds with handheld NIR spectroscopy: pharmaceuticals, branded goods and materials. Non-destructive brand protection.',
    h1: 'Counterfeit detection and product authentication',
    teaser:
      'NIR Studio builds detection models trained on your genuine product, from pharmaceutical products to tobacco, so counterfeits are identified on the spot, at customs, in the field or on the line. Models are updated as counterfeiting techniques evolve.',
    intro:
      'Counterfeit medicines endanger patients and fake goods erode brands. NIR Studio builds authentication applications on handheld NIR: scan a tablet, a package or a material and know in seconds whether it matches the genuine reference, non-destructively.',
    measures: ['Authenticity match', 'Formulation fingerprint', 'API presence', 'Packaging materials', 'Adulterants'],
    useCases: [
      {
        title: 'Pharmaceutical authentication',
        text: 'Screen medicines in the field or at customs: a genuine reference model gives a clear match or no-match in seconds.',
      },
      {
        title: 'Brand protection',
        text: 'Give inspectors a point-and-shoot tool to verify branded goods and materials anywhere in the supply chain.',
      },
      {
        title: 'Material verification',
        text: 'Confirm that incoming materials, coatings or components are the genuine specified product.',
      },
    ],
  },
  {
    slug: 'industrial',
    title: 'Industrial',
    icon: 'layers',
    // Mots-clés : industrial NIR quality control / polymer identification / raw material testing
    metaTitle: 'Industrial NIR Quality Control: Polymers & Raw Materials | NIR Studio',
    metaDescription:
      'Check polymers, raw materials and cosmetics for identity and consistency in seconds with handheld NIR. Custom models trained on your process, without the cost of a full process analyzer.',
    h1: 'Industrial quality control, on the line and in the warehouse',
    teaser:
      'From polymers to raw materials and cosmetics, NIR Studio builds models for instant quality control, catching off-spec material before it becomes a shipped batch, checking homogeneity and mixes, without the cost of a full process analyzer.',
    intro:
      'Off-spec material found after shipping costs more than the incoming check that could have caught it. NIR Studio builds industrial quality control applications on handheld NIR: verify polymers, raw materials and cosmetics for identity, homogeneity and mix ratio, on-site, without the cost of a full process analyzer.',
    measures: ['Identity confirmation', 'Homogeneity', 'Mix ratio', 'Moisture', 'Contaminants', 'Batch consistency'],
    useCases: [
      {
        title: 'Incoming raw material checks',
        text: 'Verify polymers and raw materials against specification before they enter production, without waiting on a lab result.',
      },
      {
        title: 'Homogeneity and mix control',
        text: 'Confirm that blends and mixes reach the right ratio and consistency, on the line, in real time.',
      },
      {
        title: 'Batch release',
        text: 'Catch off-spec material before it becomes a shipped batch, cutting rework and returns.',
      },
    ],
  },
];

// Section Hardware : specs et features du device (copy hérité de nirlab.com FIELDLAB/NIRLIGHT).
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

// Stats du device pour la grille bento (valeurs publiques nirlab.com, à confirmer).
export const HW_STATS = [
  { value: 'IP67', label: 'Dust and water resistant' },
  { value: '< 10 s', label: 'From scan to result' },
  { value: 'ISO 17025', label: 'Proven system accuracy' },
  { value: '0 wires', label: 'Fully wireless workflow' },
];

export const STEPS = [
  {
    n: '01',
    title: 'Scan and send',
    text: 'You scan each sample with the NIR Studio device. At the same time, you send that same sample to a lab for a certified reference analysis.',
  },
  {
    n: '02',
    title: 'We build your model',
    text: 'We match each device scan to its certified lab result. From these pairs, we build and validate a model trained specifically on your material.',
  },
  {
    n: '03',
    title: 'Ready to use',
    text: 'The validated model is loaded into the NIR Studio ecosystem, where your team can access it through the app, ready to use in the field.',
  },
];

export const QUOTE = {
  text: 'It is unique to the world to be capable of generating data with a handheld device that is on equal level with the data of a gold standard laboratory. We have proven this with the ISO 17025 certification of the NIRLAB system.',
  author: 'Prof. Pierre Esseiva',
  role: 'NIRLAB, Co-Founder',
};
