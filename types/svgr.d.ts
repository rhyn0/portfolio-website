declare module "*.svg?url" {
   import { type StaticImageData } from "next/image";
   // import SVG without SVGR getting in the way
   const content: StaticImageData;
   export default content;
}
