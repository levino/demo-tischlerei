/** Baut einen Link relativ zur Basis-Adresse der Website. */
export function url(pfad = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + pfad.replace(/^\//, '');
}
