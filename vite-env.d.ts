/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SISENSE_API_TOKEN: string;
    // add other env variables here if you have them
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }