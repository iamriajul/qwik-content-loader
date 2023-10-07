import {h, SVGAttributes} from "@builder.io/qwik";
import JSX = h.JSX;

export interface IContentLoaderProps extends SVGAttributes<SVGElement> {
  animate?: boolean
  animateBegin?: string
  backgroundColor?: string
  backgroundOpacity?: number
  baseUrl?: string
  foregroundColor?: string
  foregroundOpacity?: number
  gradientRatio?: number
  gradientDirection?: 'left-right' | 'top-bottom'
  interval?: number
  rtl?: boolean
  speed?: number
  title?: string
  uniqueKey?: string
  beforeMask?: JSX.Element
}

export { ContentLoader } from "./components/ContentLoader";
export { ContentLoaderFacebook } from "./components/presets/ContentLoaderFacebook";
export { ContentLoaderInstagram } from "./components/presets/ContentLoaderInstagram";
export { ContentLoaderCode } from "./components/presets/ContentLoaderCode";
export { ContentLoaderList } from "./components/presets/ContentLoaderList";
export { ContentLoaderBulletList } from "./components/presets/ContentLoaderBulletList";


