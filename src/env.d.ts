/// <reference types="astro/client" />
declare module '*.yaml?raw' {
  const inhalt: string;
  export default inhalt;
}
