import { parse } from 'yaml';
import roh from '../data/betrieb.yaml?raw';

type Betrieb = {
  name: string;
  inhaber: string;
  slogan?: string;
  gruendung?: number;
  adresse: { strasse: string; plz: string | number; ort: string };
  telefon: string | number;
  email: string;
  oeffnungszeiten: { tage: string; zeit: string }[];
};

export const betrieb = parse(roh) as Betrieb;
export const telefonLink = 'tel:' + String(betrieb.telefon).replace(/[^\d+]/g, '');
