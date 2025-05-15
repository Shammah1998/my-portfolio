/// <reference types="vite/client" />

// Declare markdown modules
declare module '*.md' {
  const content: string;
  export default content;
}
