// Sélection des articles Science publiés (liste Viktoriia du 07/08/2026, ordre = date desc).
// Le JSON complet (67 articles migrés de nirlab.com) reste dans articles-full.json :
// pour republier un article, il suffit de remettre son slug ici.
import articles from './articles-full.json';

export const SCIENCE_SLUGS = [
  'how-portable-nir-and-advanced-modeling-are-reshaping-quality-and-trust-in-the-tobacco-industry',
  'understanding-regression-theory-to-real-world-use',
  'instant-ingredient-verification-with-portable-nir',
  'how-light-uncovers-coffees-hidden-story',
  'understanding-classification-problems-theory-to-real-world-applications-with-nirlab',
  'portable-nir-solution-for-instant-meat-quality-checks',
  'rapid-detection-and-quantification-of-falsified-viagra',
  'measuring-olives-and-olive-oil-on-the-spot',
  'portable-vs-benchtop-nir-which-one-will-lead-the-future-of-spectroscopy',
  'unlocking-the-future-of-corn-production-with-real-time-analysis',
  'sustainable-farming-with-nirlabs-real-time-analysis',
  'how-nir-spectroscopy-and-machine-learning-are-transforming-material-analysis-across-industries',
  'use-of-portable-nir-technology-for-drug-analysis-in-australia',
  'current-drug-situation-in-europe-2024-an-insightful-analysis',
  'revolutionizing-forensic-analysis-with-ultra-portable-nir-technology',
  'how-portable-nir-technology-is-revolutionizing-forensic-cannabis-analysis',
  'the-impact-of-portable-nir-devices-in-forensic-drug-analysis',
  'textile-quality-assurance-practical-guide-for-nir',
  'counterfeit-medicines-unmasking-the-role-of-nir-spectroscopy',
  'scanning-living-fish-a-case-study-for-real-time-fat-level-analysis',
  'molecular-vibrations-with-nir-a-detailed-exploration',
  'analyzing-the-nir-spectroscopy-data-for-substance-analysis',
  'sugar-cane-quality-control-a-comprehensive-guide',
  'navigating-the-waters-decoding-the-intricacies-of-water-in-nir-spectroscopy',
  'the-pa6-and-pa66-challenge-distinguishing-the-indistinguishable',
  'plastic-recycling-revolution-nir-spectroscopys-transformative-role',
  'food-safety-the-future-with-nir-technology',
  'expert-tips-for-accurate-nirlab-spectrometer-analysis',
  'ftir-vs-nir-spectroscopy-a-comparative-analysis',
  'nirlabs-role-in-combating-counterfeit-cosmetics-to-protect-consumers-and-sellers',
  'the-science-behind-nir-how-it-helps-in-material-identification',
  'unmasking-the-hidden-danger-advanced-techniques-in-using-nir-spectroscopy-for-asbestos-detection',
  'how-to-set-up-your-nir-spectrometer-for-optimal-results-in-the-polymer-industry',
  'comprehensive-catalogue-for-polymers-detection',
  'la-permanence-de-drug-checking-a-scanne-170-echantillons',
  'providing-illicit-drugs-results-in-five-seconds-using-ultra-portable-nir-technology-an-opportunity-for-forensic-laboratories-to-cope-with-the-trend-toward-the-decentralization-of-forensic-capabiliti-2',
  'drogen-in-funf-sekundenqualitativ-und-quantitativanalysieren',
  'nir-spectroscopy-nutshell',
  'nylon-polyamide-pa6-pa66-distinguishing',
  'near-infrared-spectroscopy-in-recycling',
];

export const SCIENCE_ARTICLES = SCIENCE_SLUGS.map((slug) => {
  const article = articles.find((a) => a.slug === slug);
  if (!article) throw new Error(`Article Science introuvable dans articles-full.json : ${slug}`);
  return article;
});
