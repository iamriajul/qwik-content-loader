## Qwik-Content-Loader
### Ported from [React-Content-Loader](https://github.dev/danilowoz/react-content-loader)
<p align="center">
  <img width="400" alt="Example's react-content-loader" src="https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif" />
</p>

SVG-Powered component to easily create placeholder loadings (like Facebook's cards loading).

## Features

- :gear: **Customizable:** Feel free to change the colors, speed, sizes, and even **RTL**;
- :ok_hand: **Plug and play:** with many presets to use, see the [examples](http://danilowoz.com/create-content-loader/#gallery);
- :pencil2: **DIY:** use the [create-content-loader](https://danilowoz.com/create-content-loader) to create your own custom loaders easily;
- ⚛️ **Really lightweight:** no runtime! **0 dependencies**;

## Index

- [Getting Started](#gettingstarted)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Similar packages](#similarpackages)
- [Development](#development)

## Getting Started

```sh
npm i qwik-content-loader --save
```

```sh
pnpm i qwik-content-loader
```

```sh
yarn add qwik-content-loader
```

CDN from [JSDELIVR](https://www.jsdelivr.com/package/npm/qwik-content-loader)

## Usage

There are two ways to use it:

**1. Presets, see the [examples](https://danilowoz.com/react-content-loader/):**

```jsx
import { ContentLoader, ContentLoaderFacebook } from 'qwik-content-loader'

const MyLoader = () => <ContentLoader> <!-- Your custom shapes! --> </ContentLoader>
const MyFacebookLoader = () => <ContentLoaderFacebook />
```

**2. Custom mode, see the [online tool](https://danilowoz.com/create-content-loader)**

```jsx
const MyLoader = () => (
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}    
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

(React version Demo:)
**Still not clear?** Take a look at this working example at [codesandbox.io](https://codesandbox.io/s/moojk887z9)
Or try the components editable demo hands-on and install it from [bit.dev](https://bit.dev/danilowoz/react-content-loader)

## Options

| <div style="width:250px">Prop name and type</div>                | Description                                                                                                                                                                                                                                                                                         |
|------------------------------------------------------------------| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`animate?: boolean`** <br/> Defaults to `true`                 | Opt-out of animations with `false`                                                                                                                                                                                                                                                                  |
| **`title?: string`** <br/> Defaults to `Loading...`              | It's used to describe what element it is. <br />Use `''` (empty string) to remove.                                                                                                                                                                                                                  |
| **`baseUrl?: string`**<br /> Defaults to an empty string         | Required if you're using `<base url="/" />` document `<head/>`. <br/>This prop is common used as: <br/>`<ContentLoader baseUrl={window.location.pathname} />` which will fill the SVG attribute with the relative path. Related [#93](https://github.com/danilowoz/react-content-loader/issues/93). |
| **`speed?: number`** <br /> Defaults to `1.2`                    | Animation speed in seconds.                                                                                                                                                                                                                                                                         |
| **`interval?: number`** <br /> Defaults to `0.25`                | Interval of time between runs of the animation, <br/>as a fraction of the animation speed.                                                                                                                                                                                                          |
| **`viewBox?: string`** <br /> Defaults to `undefined`            | Use viewBox props to set a custom viewBox value, <br/>for more information about how to use it, <br/>read the article [How to Scale SVG](https://css-tricks.com/scale-svg/).                                                                                                                        |
| **`gradientRatio?: number`** <br /> Defaults to `1.2`            | Width of the animated gradient as a fraction of the view box width.                                                                                                                                                                                                                                 |
| **`gradientDirection?: string`** <br /> Defaults to `left-right` | Direction in which the gradient is animated. Useful to implement top-down animations                                                                                                                                                                                                                |
| **`rtl?: boolean`** <br /> Defaults to `false`                   | Content right-to-left.                                                                                                                                                                                                                                                                              |
| **`backgroundColor?: string`** <br /> Defaults to `#f5f6f7`      | Used as background of animation.                                                                                                                                                                                                                                                                    |
| **`foregroundColor?: string`** <br /> Defaults to `#eee`         | Used as the foreground of animation.                                                                                                                                                                                                                                                                |
| **`backgroundOpacity?: number`** <br /> Defaults to `1`          | Background opacity (0 = transparent, 1 = opaque)<br/>used to solve an issue in [Safari](#safari--ios)                                                                                                                                                                                               |
| **`foregroundOpacity?: number`** <br /> Defaults to `1`          | Animation opacity (0 = transparent, 1 = opaque)<br/>used to solve an issue in [Safari](#safari--ios)                                                                                                                                                                                                |
| **`style?: CSSProperties`** <br /> Defaults to `{}`              |                                                                                                                                                                                                                                                                                                     |
| **`uniqueKey?: string`** <br /> Defaults to random unique id     | Use the same value of prop key, <br/>that will solve inconsistency on the SSR, see more [here](https://github.com/danilowoz/react-content-loader/issues/78).                                                                                                                                        |
| **`beforeMask?: JSX.Element`** <br /> Defaults to null           | Define custom shapes before content, <br/>see more [here](https://github.com/danilowoz/react-content-loader/issues/266).                                                                                                                                                                            |
| **`animateBegin?: string`** <br /> Defaults to `undefined`       | Delay before the animation begins, identical to the [SVG animate element begin attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/begin)

See all options [live](https://danilowoz.com/react-content-loader/)

## Examples

##### Facebook Style

```jsx
import { ContentLoaderFacebook } from 'qwik-content-loader'

const MyFacebookLoader = () => <ContentLoaderFacebook />
```

<img alt="Facebook Style" src="https://user-images.githubusercontent.com/4838076/73212460-328f7500-4146-11ea-99e7-e19cd4e07a51.png" width="500px" />

##### Instagram Style

```jsx
import { ContentLoaderInstagram } from 'qwik-content-loader'

const MyInstagramLoader = () => <ContentLoaderInstagram />
```

<img alt="Instagram Style" src="https://user-images.githubusercontent.com/4838076/73212462-328f7500-4146-11ea-98dc-3a6aeafd4a26.png" width="500px" />

##### Code Style

```jsx
import { ContentLoaderCode } from 'qwik-content-loader'

const MyCodeLoader = () => <ContentLoaderCode />
```

<img alt="Code Style" src="https://user-images.githubusercontent.com/4838076/73212459-328f7500-4146-11ea-89b0-1b7bbae8047b.png" width="500px" />

##### List Style

```jsx
import { ContentLoaderList } from 'qwik-content-loader'

const MyListLoader = () => <ContentLoaderList />
```

<img alt="List Style" src="https://user-images.githubusercontent.com/4838076/73212463-33280b80-4146-11ea-9f93-95c2cbdef17b.png" width="500px" />

##### Bullet list Style

```jsx
import { ContentLoaderBulletList } from 'qwik-content-loader'

const MyBulletListLoader = () => <ContentLoaderBulletList />
```

<img alt="Bullet list Style" src="https://user-images.githubusercontent.com/4838076/73212458-328f7500-4146-11ea-826f-576059c4644e.png" width="500px" />

### Custom Style

For the custom mode, use the
[online tool](https://danilowoz.com/create-content-loader).

```jsx
const MyLoader = () => (
  <ContentLoader
    height={140}
    speed={1}
    backgroundColor={'#333'}
    foregroundColor={'#999'}
    viewBox="0 0 380 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)
```

![Custom](https://user-images.githubusercontent.com/4838076/36352947-b87019a8-149e-11e8-99ba-c71c2bcf8733.gif)

## Troubleshooting

#### Responsive - Mobile version

In order to avoid unexpected behavior, the package doesn't have opinioned settings. So if it needs to be responsive, have in mind that the output of the package is a regular SVG, so it just needs the same attributes to become a regular SVG responsive, which means:

```jsx
import { Code } from 'react-content-loader'

const MyCodeLoader = () => (
  <Code
    width={100}
    height={100}
    viewBox="0 0 100 100"
    style={{ width: '100%' }}
  />
)
```

#### **Alpha is not working: Safari / iOS**

When using `rgba` as a `backgroundColor` or `foregroundColor` value, [Safari does not respect the alpha channel](https://github.com/w3c/svgwg/issues/180), meaning that the color will be opaque. To prevent this, instead of using a `rgba` value for `backgroundColor`/`foregroundColor`, use the `rgb` equivalent and move the alpha channel value to the `backgroundOpacity`/`foregroundOpacity` props.

```jsx
{/* Opaque color in Safari and iOS */}
<ContentLoader
  backgroundColor="rgba(0,0,0,0.06)"
  foregroundColor="rgba(0,0,0,0.12)">


{/_ Semi-transparent color in Safari and iOS _/}
<ContentLoader
    backgroundColor="rgb(0,0,0)"
    foregroundColor="rgb(0,0,0)"
    backgroundOpacity={0.06}
    foregroundOpacity={0.12}>


```

#### **Black box in Safari / iOS (again)**

Using the base tag on a page that contains SVG elements fails to render and it looks like a black box. Just remove the **base-href** tag from the `<head />` and the issue has been solved.

<img width="350" src="https://user-images.githubusercontent.com/11562881/39406054-2f308de6-4bce-11e8-91fb-bbb35e29fc10.png" alt="black box" />

See: [#93](https://github.com/danilowoz/react-content-loader/issues/93) / [109](https://github.com/danilowoz/react-content-loader/issues/109)

#### Browser supports SVG-Animate

Old browsers don't support animation in SVG ([compatibility list](https://caniuse.com/#search=SVGAnimateElement)), and if your project must support IE, for examples, here's a couple of ways to make sure that browser supports SVG Animate:

- `window.SVGAnimateElement`
- `document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#SVG-Animation", "1.1")`
- Or even use https://modernizr.com/

## Similar packages

- React: [react-content-loader](https://github.com/danilowoz/react-content-loader)
- React Native: [rn-placeholder](https://github.com/mfrachet/rn-placeholder), [react-native-svg-animated-linear-gradient](https://github.com/virusvn/react-native-svg-animated-linear-gradient);
- [Preact](https://github.com/bonitasoft/preact-content-loader);
- Vue.js: [vue-content-loading](https://github.com/LucasLeandro1204/vue-content-loading), [vue-content-loader](https://github.com/egoist/vue-content-loader);
- Angular: [ngx-content-loading](https://github.com/Gbuomprisco/ngx-content-loading), [ngx-content-loader](https://github.com/NetanelBasal/ngx-content-loader).

---

## Development

Fork the repo and then clone it

```
$ git clone git@github.com:YourUsername/qwik-content-loader.git && cd qwik-content-loader
```

`$ pnpm i`: Install the dependencies;

`$ pnpm run build`: Build to production;

`$ pnpm run dev`: Run the Qwik Dev Server to see your changes;

### Commit messages

Commit messages should follow the [commit message convention](https://conventionalcommits.org/) so, changelogs could be generated automatically by that. Commit messages are validated automatically upon commit. If you aren't familiar with the commit message convention, you can use yarn commit (or `pnpm run commit`) instead of git commit, which provides an interactive CLI for generating proper commit messages.

## License

[MIT](https://github.com/danilowoz/react-content-loader/blob/master/LICENSE)
