import { getCollection } from 'astro:content';

const tag = (d: Date) => Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());

/** Alle Hinweise, die heute (zum Zeitpunkt des Builds) gelten. */
export async function aktuelleHinweise() {
  const heute = tag(new Date());
  const alle = await getCollection('hinweise');
  return alle
    .filter(({ data }) => (!data.von || tag(data.von) <= heute) && (!data.bis || heute <= tag(data.bis)))
    .sort((a, b) => (a.data.bis?.getTime() ?? Infinity) - (b.data.bis?.getTime() ?? Infinity));
}

export function datumDeutsch(d: Date, mitJahr = true): string {
  return d.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    ...(mitJahr ? { year: 'numeric' } : {}),
    timeZone: 'UTC',
  });
}
