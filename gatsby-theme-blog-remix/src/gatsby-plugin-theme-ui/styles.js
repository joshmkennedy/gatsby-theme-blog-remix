export default {
  root: {
    fontFamily: `body`,
  },
  Header: {
    backgroundColor: ``,
    padding: "20px",
    color: "white",
    fontFamily: `Montserrat`,
  },
  Main: {
    position: `relative`,
  },
  Container: {
    position: `relative`,
    padding: [`70px 40px`, `70px 40px`, `90px 0`],
  },

  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 4,
    hyphens: `none`,
    marginBottom: 0,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
  },
  code: {
    fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: `inherit`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    bg: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`,
  },
  hr: {
    borderColor: `muted`,
  },
  p: {
    fontSize: `18px`,
    lineHeight: `1.5`,
    code: {
      fontSize: `inherit`,
    },
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    opacity: 0.8,
    "&.translation": {
      fontSize: `1em`,
    },
  },
  h1: {
    fontFamily: `heading`,
  },
  h2: {
    fontFamily: `heading`,
  },
};
