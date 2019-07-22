//these are the original themes colors
const purple60 = `#663399`;
//const purple30 = `#D9BAE8`;
const grey90 = `#232129`;
//const black80 = `#1B1F23`;
const white = `#fff`;
//const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const lightGray = `hsla(0, 0%, 0%, 0.2)`;

//remixes colors
const samon = `#F86278`;
const darkSamon = `#FA9EAC`;
const yellow = `#FFE69B`;
//const lightBlue = `#E0DEFF`;

export default {
  text: grey90,
  background: white,
  primary: samon,
  secondary: yellow,
  muted: lightGray,
  highlight: opaqueLightYellow,
  heading: grey90,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  modes: {
    dark: {
      text: `white`,
      background: grey90,
      primary: darkSamon,
      secondary: yellow,
      muted: opaqueLightWhite,
      highlight: purple60,
      heading: white,
    },
  },
};
