// Préfixe un chemin absolu avec le base path du build.
// En prod (nirstudio.com) base = '/', en staging GitHub Pages base = '/nirstudio'.
export const withBase = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + path;
