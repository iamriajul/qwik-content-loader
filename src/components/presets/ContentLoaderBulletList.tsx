import {component$} from "@builder.io/qwik";
import {IContentLoaderProps} from "../../index";
import {ContentLoaderSvg} from "../ContentLoaderSvg";

export const ContentLoaderBulletList = component$<IContentLoaderProps>((props) => {
  return (
    <ContentLoaderSvg viewBox="0 0 245 125" {...props}>
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="110" r="8" />
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoaderSvg>
  );
});