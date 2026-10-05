import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Datumsangaben dürfen als 2026-12-24 oder als 24.12.2026 geschrieben werden.
const datum = z.preprocess((wert) => {
  if (typeof wert === 'string') {
    const deutsch = wert.trim().match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    if (deutsch) {
      const [, tag, monat, jahr] = deutsch;
      return new Date(Date.UTC(Number(jahr), Number(monat) - 1, Number(tag)));
    }
    return new Date(wert);
  }
  return wert;
}, z.date());

const leistungen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leistungen' }),
  schema: z.object({
    title: z.string(),
    kurz: z.string(),
    reihenfolge: z.number().default(99),
  }),
});

const referenzen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/referenzen' }),
  schema: z.object({
    title: z.string(),
    ort: z.string(),
    jahr: z.number(),
    kurz: z.string(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    art: z.string(),
    aktiv: z.boolean().default(true),
  }),
});

const hinweise = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hinweise' }),
  schema: z.object({
    title: z.string(),
    text: z.string().optional(),
    von: datum.optional(),
    bis: datum.optional(),
  }),
});

export const collections = { leistungen, referenzen, jobs, hinweise };
