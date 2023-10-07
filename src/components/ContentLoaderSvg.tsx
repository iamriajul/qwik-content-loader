import uid from "../shared/uid";
import {component$, Slot} from "@builder.io/qwik";
import {IContentLoaderProps} from "../index";

/// ContentLoaderSvg requires a Slot to be passed in as a child.
/// valid child examples:
/// <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
/// <circle cx="30" cy="30" r="30" />
/// <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
/// etc.
export const ContentLoaderSvg = component$<IContentLoaderProps>(({
                                                      animate = true,
                                                      animateBegin,
                                                      backgroundColor = '#f5f6f7',
                                                      backgroundOpacity = 1,
                                                      baseUrl = '',
                                                      foregroundColor = '#eee',
                                                      foregroundOpacity = 1,
                                                      gradientRatio = 2,
                                                      gradientDirection = 'left-right',
                                                      uniqueKey,
                                                      interval = 0.25,
                                                      rtl = false,
                                                      speed = 1.2,
                                                      style = {},
                                                      title = 'Loading...',
                                                      beforeMask = null,
                                                      ...props
                                                    }) => {
  const fixedId = uniqueKey || uid()
  const idClip = `${fixedId}-diff`
  const idGradient = `${fixedId}-animated-diff`
  const idAria = `${fixedId}-aria`

  const rtlStyle = rtl ? { transform: 'scaleX(-1)' } : null
  const keyTimes = `0; ${interval}; 1`
  const dur = `${speed}s`
  const gradientTransform =
    gradientDirection === 'top-bottom' ? 'rotate(90)' : undefined

  return (
    <svg
      aria-labelledby={idAria}
      role="img"
      style={{
      ...(style as object),
      ...rtlStyle
    }}
      {...props}
    >
      {title ? <title id={idAria}>{title}</title> : null}
      {beforeMask ? beforeMask : null}
      <rect
        role="presentation"
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath={`url(${baseUrl}#${idClip})`}
        style={{ fill: `url(${baseUrl}#${idGradient})` }}
      />

      <defs>
        <clipPath id={idClip}>
          <Slot />
        </clipPath>

        <linearGradient id={idGradient} gradientTransform={gradientTransform}>
          <stop
            offset="0%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio}; ${-gradientRatio}; 1`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>

          <stop
            offset="50%"
            stopColor={foregroundColor}
            stopOpacity={foregroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`${-gradientRatio / 2}; ${-gradientRatio / 2}; ${1 +
                  gradientRatio / 2}`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>

          <stop
            offset="100%"
            stopColor={backgroundColor}
            stopOpacity={backgroundOpacity}
          >
            {animate && (
              <animate
                attributeName="offset"
                values={`0; 0; ${1 + gradientRatio}`}
                keyTimes={keyTimes}
                dur={dur}
                repeatCount="indefinite"
                begin={animateBegin}
              />
            )}
          </stop>
        </linearGradient>
      </defs>
    </svg>
  )
});
